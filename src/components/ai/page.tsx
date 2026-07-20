"use client";

import { useState } from "react";
import PromptForm from "@/components/ai/PromptForm";
import OutputPanel from "@/components/ai/OutputPanel";
import type { AIResponse } from "@/types/ai";

export default function AnswerWriterPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data: AIResponse = await response.json();

      if (data.success) {
        setAnswer(data.answer);
      } else {
        setError(data.answer);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong while generating the answer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-5xl p-8 space-y-8">
      <h1 className="text-4xl font-bold">
        AI Answer Writer
      </h1>

      <PromptForm
        question={question}
        setQuestion={setQuestion}
        onSubmit={handleGenerate}
        loading={loading}
      />

      <OutputPanel
        answer={answer}
        loading={loading}
        error={error}
      />
    </main>
  );
}