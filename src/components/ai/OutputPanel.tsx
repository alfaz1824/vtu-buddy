"use client";

interface OutputPanelProps {
  answer: string;
  loading: boolean;
  error: string;
}

export default function OutputPanel({
  answer,
  loading,
  error,
}: OutputPanelProps) {
  if (loading) {
    return (
      <div className="rounded-lg border p-6">
        Generating answer...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  if (!answer) {
    return (
      <div className="rounded-lg border p-6 text-gray-500">
        Ask a question to generate an answer.
      </div>
    );
  }

  return (
    <div className="rounded-lg border p-6 whitespace-pre-wrap">
      {answer}
    </div>
  );
}