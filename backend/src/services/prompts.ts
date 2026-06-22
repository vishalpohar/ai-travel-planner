interface tripPromptInterface {
  destination: string;
  durationDays: number;
  budgetTier: string;
  interests: string[];

  weather: {
    temperature: number;
    condition: string;
  };
}

const rules = (durationDays = 1) => {
  return `
IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do NOT wrap the response in markdown.
3. Do NOT include explanations.
4. Do NOT include comments.
5. Do NOT include code fences.
6. All prices must be realistic for the destination.
7. Generate activities that match the user's interests.
8. Generate exactly ${durationDays} days.
9. Each day should have 3 to 5 activities.

ACTIVITY COST RULES:

1. Every activity MUST contain estimatedCost.
2. estimatedCost MUST be a realistic average cost PER PERSON.
3. Food-related activities MUST have a cost greater than 0.

Examples:
- Dinner
- Lunch
- Food Tour
- Street Food Tour

4. Shopping activities MUST have a cost greater than 0.

5. Museum visits MUST have a cost greater than 0.

6. Theme parks MUST have a cost greater than 0.

7. Guided tours MUST have a cost greater than 0.

8. Transportation activities MUST have a cost greater than 0.

9. ONLY completely free attractions may have estimatedCost = 0.

Examples:
- Public parks
- Public streets
- Free temples
- Free viewpoints

10. At least 80% of activities should have estimatedCost greater than 0.

CURRENCY RULES:

1. Convert all costs to USD. Do NOT return local currency.
2. Use a single currency for the entire response.
3. Include a top-level currency field.
4. All prices must use that currency.

TIME OF DAY RULES:

timeOfDay MUST be EXACTLY one of:

- Morning
- Afternoon
- Evening

Never use:
- Late Morning
- Early Morning
- Noon
- Late Afternoon
- Night
- Midnight
- Sunset
- Sunrise

`;
};

export const buildTripPrompt = ({
  destination,
  durationDays,
  budgetTier,
  interests,
  weather,
}: tripPromptInterface) => `
You are a professional travel planner and budget analyst.

Your task is to generate a realistic, detailed travel plan.

Destination: ${destination}
Duration: ${durationDays} days
Budget Tier: ${budgetTier}
Interests: ${interests.join(", ")}

Current Weather:

Temperature: ${weather.temperature}°C

Condition: ${weather.condition}

Use this weather information when generating:

1. Activities
2. Hotel suggestions
3. Packing list

The packing list MUST be appropriate for the weather.

${rules(durationDays)}

HOTEL RULES:

Hotel recommendations should match the selected budget tier.

Return EXACTLY 3 hotels:

Hotel 1:
Matches selected budget tier.

Hotel 2:
Cheaper alternative.

Hotel 3:
Premium alternative.

All hotel prices must be realistic for the destination.

PACKING LIST RULES:

1. Return ONLY the MOST IMPORTANT items.
2. Return EXACTLY 10 items.
3. Prioritize essentials over optional items.
4. Avoid duplicates.
5. Focus on:
   - Travel documents
   - Weather essentials
   - Electronics
   - Clothing
   - Activity-specific necessities
6. Do NOT include obvious everyday items unless absolutely necessary.
7. Choose items that are most useful for this destination and weather.

CATEGORY RULES:

category MUST be EXACTLY one of:

- Documents
- Clothing
- Electronics
- Weather
- Activities
- Other

Return data using EXACTLY this structure:

{
  "currency": "USD",

  "itinerary": [
    {
      "dayNumber": 1,
      "activities": [
        {
          "title": "Activity Name",
          "description": "Short description",
          "estimatedCost": 20,
          "timeOfDay": "Morning"
        }
      ]
    }
  ],
  
  "hotels": [
    {
      "name": "Hotel Name",
      "rating": "4.5",
      "pricePerNight": 120
    }
  ],

  "packingList": [
    {
      "item": "Passport",
      "category": "Documents"
    }
  ]
}

CRITICAL:

The response will be parsed programmatically.

Any text outside the JSON object will cause the request to fail.

Return ONLY valid JSON.
`;

export const buildDayPrompt = ({
  destination,
  budgetTier,
  interests,
  dayNumber,
  instruction,
}: any) => `
You are an expert travel planner.

Destination:
${destination}

Budget:
${budgetTier}

Interests:
${interests.join(", ")}

Day:
${dayNumber}

User Request:
${instruction}

Generate a completely new itinerary for this day.

${rules()}

Return data using EXACTLY this structure:

{
  "dayNumber": ${dayNumber},
  "activities": [
    {
      "title": "Activity Name",
      "description": "Short description",
      "estimatedCost": 200,
      "timeOfDay": "Morning"
    }
  ]
}
`;
