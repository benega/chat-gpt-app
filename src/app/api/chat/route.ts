import { openai } from "@ai-sdk/openai";

import { streamText, convertToCoreMessages, LanguageModelV1 } from "ai";
import { NextRequest } from "next/server";

export const runtime = "edge";

const model = openai.chat("gpt-3.5-turbo");

export const POST = async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const result = await streamText({
    model: model as LanguageModelV1,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
};
