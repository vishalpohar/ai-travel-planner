import { GoogleGenAI } from "@google/genai";
export const generateTripPlan = async (prompt) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY missing");
    }
    const ai = new GoogleGenAI({
        apiKey,
    });
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
        },
    });
    const text = response.text;
    if (!text) {
        throw new Error("Gemini returned empty response");
    }
    return text;
};
//# sourceMappingURL=gemini.service.js.map