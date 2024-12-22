import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tool, content } = JSON.parse(req.body);

  let prompt = "";

  if (tool === "lint") {
    prompt = `Review the following code for best practices and syntax issues:\n${content}`;
  } else if (tool === "refactor") {
    prompt = `Refactor the following code to improve readability, efficiency, and maintainability:\n${content}`;
  } else if (tool === "test") {
    prompt = `Generate test cases for the following code:\n${content}`;
  } else if (tool === "fix") {
    prompt = `Identify and fix any errors in the following code:\n${content}`;
  } else if (tool === "suggest") {
    prompt = `Provide suggestions to improve the following code:\n${content}`;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
    });

    const result = response.choices[0]?.message?.content || "No output generated.";
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: "Failed to process the AI tool request" });
  }
}
