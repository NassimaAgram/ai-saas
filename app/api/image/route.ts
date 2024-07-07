import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = '512x512' } = body;

    if (!userId) new NextResponse('Unauthorized', { status: 401 });
    if (!openai.apiKey)
      new NextResponse('OpenAI API Key not configured.', { status: 500 });
    if (!prompt) new NextResponse('Prompt is required', { status: 400 });
    if (!amount) new NextResponse('Amount is required', { status: 400 });
    if (!resolution)
      new NextResponse('Resolution is required', { status: 400 });

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro)
      return new NextResponse('Free trial has expired', { status: 403 });

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });
    await incrementApiLimit();

    return NextResponse.json(response.data);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
