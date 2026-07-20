import { NextRequest, NextResponse } from "next/server";
import { generateAnswer } from "@/lib/ai";
import type { AIRequest, AIResponse } from "@/types/ai";

export async function POST(request: NextRequest) {
  try {
    const body: AIRequest = await request.json();

    if (!body.question?.trim()) {
      return NextResponse.json(
        {
          success: false,
          answer: "Question is required.",
        },
        { status: 400 }
      );
    }

    const answer = await generateAnswer(body.question);

    const response: AIResponse = {
      success: true,
      answer,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("AI Generate Error:", error);

    return NextResponse.json(
      {
        success: false,
        answer: "Something went wrong while generating the answer.",
      },
      { status: 500 }
    );
  }
}