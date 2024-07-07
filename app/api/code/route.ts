import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

const instructionMessage: OpenAI.Chat.ChatCompletionMessage = {
  role: 'assistant',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
};



export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;
    if (!userId) new NextResponse('Unauthorized', { status: 401 });
    if (!openai.apiKey)
      new NextResponse('OpenAI API Key not configured.', { status: 500 });
    if (!messages) new NextResponse('Messages are required', { status: 400 });

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro)
      return new NextResponse(
        'Free trial has expired. Please upgrade to pro.',
        {
          status: 403,
        }
      );

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });
    await incrementApiLimit();

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}