import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI, { ChatCompletionRequestMessage } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage = {
  role: 'system',
  content:
    'You are the code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
};
export async function POST(req) {
  try {
    const { userId } = await auth(req);

    const body = await req.json();

    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
