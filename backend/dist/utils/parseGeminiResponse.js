export const parseGeminiResponse = (response) => {
    return JSON.parse(response
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim());
};
//# sourceMappingURL=parseGeminiResponse.js.map