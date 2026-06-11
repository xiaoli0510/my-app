import { createDeepSeek } from "@ai-sdk/deepseek";
import { convertToModelMessages, streamText } from "ai";
import { NextRequest } from "next/server";
import { DEEPSEEK_API_KEY } from "./key";
const deepSeek  = createDeepSeek({
    apiKey:DEEPSEEK_API_KEY
})
export async function POST(req: NextRequest) {
    const { messages} = await req.json();
    const result = streamText({
        model: deepSeek('deepseek-chat'),
        messages: await convertToModelMessages(messages),
        system:'你是一个超市老板'
    });
    return result.toUIMessageStreamResponse();//返回流s

}