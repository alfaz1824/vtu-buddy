"use client";

interface PromptFormProps {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  loading: boolean;
}

export default function PromptForm({
  question,
  setQuestion,
  onSubmit,
  loading,
}: PromptFormProps) {
  return (
    <div className="space-y-4">
      <textarea
        className="w-full rounded-lg border p-4"
        rows={6}
        placeholder="Enter your VTU question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
  onClick={() => {
    console.log("Button clicked");
    onSubmit();
  }}
>
  Generate Answer
</button>
    </div>
  );
}