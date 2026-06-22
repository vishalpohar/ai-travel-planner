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
export declare const buildTripPrompt: ({ destination, durationDays, budgetTier, interests, weather, }: tripPromptInterface) => string;
export declare const buildDayPrompt: ({ destination, budgetTier, interests, dayNumber, instruction, }: any) => string;
export {};
//# sourceMappingURL=prompts.d.ts.map