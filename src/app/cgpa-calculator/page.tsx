"use client";

import { useState } from "react";

export default function CgpaCalculatorPage() {
  const [sgpas, setSgpas] = useState<string[]>([""]);
  const [cgpa, setCgpa] = useState<number | null>(null);

  const addSemester = () => {
    setSgpas([...sgpas, ""]);
  };

  const updateSgpa = (index: number, value: string) => {
    const updated = [...sgpas];
    updated[index] = value;
    setSgpas(updated);
  };

  const calculateCgpa = () => {
    const values = sgpas
      .map(Number)
      .filter((n) => !isNaN(n) && n > 0);

    if (!values.length) return;

    const total = values.reduce((a, b) => a + b, 0);
    const result = total / values.length;

    setCgpa(Number(result.toFixed(2)));
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-3">
          VTU CGPA Calculator
        </h1>

        <p className="text-gray-400 mb-8">
          Enter your semester SGPAs and calculate CGPA instantly.
        </p>

        <div className="space-y-4">
          {sgpas.map((value, index) => (
            <input
              key={index}
              type="number"
              step="0.01"
              placeholder={`Semester ${index + 1} SGPA`}
              value={value}
              onChange={(e) =>
                updateSgpa(index, e.target.value)
              }
              className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
            />
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={addSemester}
            className="bg-zinc-800 px-5 py-3 rounded-xl"
          >
            Add Semester
          </button>

          <button
            onClick={calculateCgpa}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"
          >
            Calculate CGPA
          </button>
        </div>

        {cgpa !== null && (
          <div className="mt-10 p-6 rounded-2xl border border-blue-500">
            <h2 className="text-2xl font-semibold">
              Your CGPA
            </h2>

            <p className="text-5xl font-bold text-blue-500 mt-3">
              {cgpa}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}