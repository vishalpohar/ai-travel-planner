export const parseGeminiResponse = (response: string) => {
  return JSON.parse(
    response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim(),
  );
};
