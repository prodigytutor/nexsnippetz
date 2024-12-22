import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const aiResponse = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: "Generate a JavaScript code snippet for sorting an array." }],
        max_tokens: 100,
      });

      const snippet = aiResponse.choices[0]?.message?.content || "No snippet generated.";
      res.status(200).json({ snippet });
    } catch (error) {
      res.status(500).json({ error: "Failed to generate snippet" });
    }
  }
}