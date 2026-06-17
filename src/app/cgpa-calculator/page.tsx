"use client";

import { useState } from "react";

const gradePoints: Record<string, number> = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  P: 4,
  F: 0,
};

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<"sgpa" | "cgpa">("sgpa");

  // SGPA State
  const [subjects, setSubjects] = useState([
    {
      credits: "",
      grade: "O",
    },
  ]);

  const [sgpaResult, setSgpaResult] = useState<number | null>(null);

  // CGPA State
  const [sgpas, setSgpas] = useState<string[]>([""]);
  const [cgpaResult, setCgpaResult] = useState<number | null>(null);

  // ---------------- SGPA ----------------

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        credits: "",
        grade: "O",
      },
    ]);
  };

  const updateSubject = (
    index: number,
    field: "credits" | "grade",
    value: string
  ) => {
    const updated = [...subjects];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setSubjects(updated);
  };

  const calculateSgpa = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credits = Number(subject.credits);

      if (!credits) return;

      totalCredits += credits;
      totalPoints += credits * gradePoints[subject.grade];
    });

    if (totalCredits === 0) return;

    setSgpaResult(
      Number((totalPoints / totalCredits).toFixed(2))
    );
  };

  // ---------------- CGPA ----------------

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

    setCgpaResult(
      Number((total / values.length).toFixed(2))
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-3">
          VTU Calculator
        </h1>

        <p className="text-zinc-400 mb-8">
          Calculate your SGPA and CGPA instantly.
        </p>

        {/* Tabs */}

        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setActiveTab("sgpa")}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              activeTab === "sgpa"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            SGPA Calculator
          </button>

          <button
            onClick={() => setActiveTab("cgpa")}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              activeTab === "cgpa"
                ? "bg-blue-600"
                : "bg-zinc-800"
            }`}
          >
            CGPA Calculator
          </button>
        </div>

        {/* ---------------- SGPA ---------------- */}

        {activeTab === "sgpa" && (
          <div>

            <h2 className="text-2xl font-semibold mb-6">
              SGPA Calculator
            </h2>

            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <input
                    type="number"
                    placeholder="Credits"
                    value={subject.credits}
                    onChange={(e) =>
                      updateSubject(
                        index,
                        "credits",
                        e.target.value
                      )
                    }
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-700"
                  />

                  <select
                    value={subject.grade}
                    onChange={(e) =>
                      updateSubject(
                        index,
                        "grade",
                        e.target.value
                      )
                    }
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-700"
                  >
                    <option>O</option>
                    <option>A+</option>
                    <option>A</option>
                    <option>B+</option>
                    <option>B</option>
                    <option>C</option>
                    <option>P</option>
                    <option>F</option>
                  </select>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={addSubject}
                className="bg-zinc-800 px-5 py-3 rounded-xl"
              >
                Add Subject
              </button>

              <button
                onClick={calculateSgpa}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl"
              >
                Calculate SGPA
              </button>
            </div>

            {sgpaResult !== null && (
              <div className="mt-10 p-6 rounded-2xl border border-blue-500">
                <h3 className="text-2xl font-semibold">
                  Your SGPA
                </h3>

                <p className="text-5xl font-bold text-blue-500 mt-3">
                  {sgpaResult}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ---------------- CGPA ---------------- */}

        {activeTab === "cgpa" && (
          <div>

            <h2 className="text-2xl font-semibold mb-6">
              CGPA Calculator
            </h2>

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

            {cgpaResult !== null && (
              <div className="mt-10 p-6 rounded-2xl border border-blue-500">
                <h3 className="text-2xl font-semibold">
                  Your CGPA
                </h3>

                <p className="text-5xl font-bold text-blue-500 mt-3">
                  {cgpaResult}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}