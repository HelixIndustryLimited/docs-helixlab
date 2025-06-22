import { createDeepSeek } from '@ai-sdk/deepseek';
import { streamText } from "ai";

export const maxDuration = 30;

const deepseek = createDeepSeek({
  apiKey: "sk-Uu6hVIwwVsaf6AHO40E86aD957Ec4aAeB30237702b70429a",
  baseURL: "https://one-api.bltcy.top/v1/chat/completions"
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: deepseek("deepseek-v3-0324"),
    messages,
  });
  return result.toDataStreamResponse();
}