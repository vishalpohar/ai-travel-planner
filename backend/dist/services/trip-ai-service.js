import { parseGeminiResponse } from "../utils/parseGeminiResponse.js";
import { generateTripPlan } from "./gemini.service.js";
import { buildDayPrompt, buildTripPrompt } from "./prompts.js";
export const generateTripAIData = async (trip, weather) => {
    const prompt = buildTripPrompt({
        destination: trip.destination,
        durationDays: trip.durationDays,
        budgetTier: trip.budgetTier,
        interests: trip.interests,
        weather: {
            temperature: weather.main.temp,
            condition: weather.weather[0].main,
        },
    });
    const response = await generateTripPlan(prompt);
    return parseGeminiResponse(response);
};
export const regenerateDayData = async (trip, dayNumber, instruction) => {
    const prompt = buildDayPrompt({
        destination: trip.destination,
        budgetTier: trip.budgetTier,
        interests: trip.interests,
        dayNumber,
        instruction,
    });
    const response = await generateTripPlan(prompt);
    return parseGeminiResponse(response);
};
//# sourceMappingURL=trip-ai-service.js.map