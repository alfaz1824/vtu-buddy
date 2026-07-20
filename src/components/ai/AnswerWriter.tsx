"use client";

import { useState } from "react";
import PromptForm from "@/components/ai/PromptForm";
import OutputPanel from "@/components/ai/OutputPanel";
import type { AIResponse } from "@/types/ai";

export default function AnswerWriter() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    console.log("1. Generate button clicked");

    if (!question.trim()) {
      console.log("2. Question is empty");
      setError("Please enter a question.");
      return;
    }

    console.log("3. Question:", question);

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      console.log("4. Calling API...");

      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      console.log("5. Response Status:", response.status);

      const data: AIResponse = await response.json();

      console.log("6. API Response:", data);

      if (data.success) {
        console.log("7. Setting answer");
        setAnswer(data.answer);
      } else {
        console.log("8. API returned error");
        setError(data.answer);
      }
    } catch (err) {
      console.error("9. Fetch Error:", err);
      setError("Something went wrong.");
    } finally {
      console.log("10. Finished");
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