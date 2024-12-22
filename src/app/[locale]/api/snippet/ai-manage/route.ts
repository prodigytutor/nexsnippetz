import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { content, action } = JSON.parse(req.body);

  let prompt = "";

  if (action === "optimize") {
    prompt = `Optimize the following code:\n${content}`;
  } else if (action === "debug") {
    prompt = `Debug the following code and explain any errors:\n${content}`;
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
    });

    const optimizedContent = response.choices[0]?.message?.content || content;
    res.status(200).json({ optimizedContent });
  } catch (error) {
    res.status(500).json({ error: "AI failed to process the snippet" });
  }
}