"use client";

import { useRouter } from "next/navigation";

const subjects = [
  "Machine Learning",
  "Full Stack Development",
  "DBMS",
  "Computer Networks",
  "Operating Systems",
  "Data Structures",
];

export default function PopularSubjects() {
  const router = useRouter();

  const handleSubjectClick = (subject: string) => {
    router.push(
      `/resources?subject=${encodeURIComponent(subject)}`
    );
  };

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">
            Popular Subjects
          </h2>

          <button
            onClick={() => router.push("/resources")}
            className="text-blue-500 hover:text-blue-400"
          >
            View All →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject}
              onClick={() => handleSubjectClick(subject)}
              className="
                rounded-2xl
                border
                p-6
                cursor-pointer
                hover:border-blue-500
                hover:bg-blue-500/5
                transition-all
                duration-300
              "
            >
              <h3 className="font-semibold text-xl">
                {subject}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Explore notes, question papers and resources
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}