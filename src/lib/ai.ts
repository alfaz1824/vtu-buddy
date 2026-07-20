import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in .env.local");
}

const ai = new GoogleGenAI({
  apiKey,
});

export async function generateAnswer(question: string): Promise<string> {
  const prompt = `
You are an expert VTU engineering professor.

Generate a well-structured exam-oriented answer.

Include:
- Definition
- Explanation
- Headings
- Bullet points
- Advantages
- Disadvantages (if applicable)
- Conclusion
- Diagram suggestion if relevant

Question:
${question}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text ?? "No response generated.";
}