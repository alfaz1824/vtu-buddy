"use client";

import { useState } from "react";
import ResourceList from "./ResourceList";

const allResources = [
  {
    id: "1",
    title: "FSD Module 1",
    subject: "Full Stack Development",
    semester: "6",
  },
  {
    id: "2",
    title: "FSD Module 2",
    subject: "Full Stack Development",
    semester: "6",
  },
  {
    id: "3",
    title: "Machine Learning Notes",
    subject: "Machine Learning",
    semester: "6",
  },
  {
    id: "4",
    title: "Cloud Computing Notes",
    subject: "Cloud Computing",
    semester: "6",
  },
];

export default function ResourceNavigator() {
  const [selectedScheme, setSelectedScheme] =
    useState("");

  const [selectedBranch, setSelectedBranch] =
    useState("");

  const [selectedSemester, setSelectedSemester] =
    useState("");

  const [selectedSubject, setSelectedSubject] =
    useState("");

  const subjectsBySemester: Record<string, string[]> = {
    "6": [
      "Full Stack Development",
      "Machine Learning",
      "Cloud Computing",
      "Software Testing",
      "DevOps",
    ],
    "5": [
      "DBMS",
      "Computer Networks",
      "Operating Systems",
    ],
  };

  return (
    <div className="space-y-10">

      {/* Scheme */}
      <div>
        <h3 className="text-2xl font-bold text-black mb-4">
          Choose Scheme
        </h3>

        <div className="flex flex-wrap gap-4">
          {["2021", "2022"].map((scheme) => (
            <button
              key={scheme}
              onClick={() => {
                setSelectedScheme(scheme);
                setSelectedBranch("");
                setSelectedSemester("");
                setSelectedSubject("");
              }}
              className={`px-8 py-4 rounded-2xl border font-semibold text-lg transition-all
              ${
                selectedScheme === scheme
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white border-zinc-300 text-black hover:border-blue-500"
              }`}
            >
              {scheme} Scheme
            </button>
          ))}
        </div>
      </div>

      {/* Branch */}
      {selectedScheme && (
        <div>
          <h3 className="text-2xl font-bold text-black mb-4">
            Choose Branch
          </h3>

          <div className="flex flex-wrap gap-4">
            {["CSE", "ISE", "AIML", "ECE"].map(
              (branch) => (
                <button
                  key={branch}
                  onClick={() => {
                    setSelectedBranch(branch);
                    setSelectedSemester("");
                    setSelectedSubject("");
                  }}
                  className={`px-8 py-4 rounded-2xl border font-semibold text-lg transition-all
                  ${
                    selectedBranch === branch
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-white border-zinc-300 text-black hover:border-blue-500"
                  }`}
                >
                  {branch}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* Semester */}
      {selectedBranch && (
        <div>
          <h3 className="text-2xl font-bold text-black mb-4">
            Choose Semester
          </h3>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[1,2,3,4,5,6,7,8].map((sem) => (
              <button
                key={sem}
                onClick={() => {
                  setSelectedSemester(
                    String(sem)
                  );
                  setSelectedSubject("");
                }}
                className={`h-16 rounded-2xl border font-semibold text-lg transition-all
                ${
                  selectedSemester ===
                  String(sem)
                    ? "bg-blue-100 border-blue-500 text-blue-700"
                    : "bg-white border-zinc-300 text-black hover:border-blue-500"
                }`}
              >
                Sem {sem}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Subjects */}
      {selectedSemester && (
        <div>
          <h3 className="text-2xl font-bold text-black mb-4">
            Available Subjects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(subjectsBySemester[
              selectedSemester
            ] || []).map((subject) => (
              <div
                key={subject}
                onClick={() =>
                  setSelectedSubject(subject)
                }
                className={`rounded-2xl border p-6 cursor-pointer transition-all
                ${
                  selectedSubject === subject
                    ? "bg-blue-50 border-blue-500"
                    : "bg-white border-zinc-300 hover:border-blue-500 hover:shadow-lg"
                }`}
              >
                <div className="text-3xl mb-3">
                  📘
                </div>

                <h4 className="font-bold text-black text-lg">
                  {subject}
                </h4>

                <p className="text-zinc-600 mt-2">
                  View notes, PYQs and study materials
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Resource List */}
      {selectedSubject && (
        <ResourceList
          resources={allResources}
          selectedSubject={selectedSubject}
        />
      )}
    </div>
  );
}