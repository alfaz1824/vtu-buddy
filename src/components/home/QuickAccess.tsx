"use client";

import {
  BookOpen,
  FileText,
  Brain,
  Calculator,
  Briefcase,
} from "lucide-react";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Notes",
    icon: BookOpen,
    description: "Module-wise VTU notes",
    href: "/resources",
  },
  {
    title: "Question Papers",
    icon: FileText,
    description: "Previous year papers",
    href: "/question-papers",
  },
  {
    title: "AI Assistant",
    icon: Brain,
    description: "Exam-oriented answers",
    href: "/ai-tools",
  },
  {
    title: "CGPA Calculator",
    icon: Calculator,
    description: "Track your performance",
    href: "/cgpa-calculator",
  },
  {
    title: "Placement Hub",
    icon: Briefcase,
    description: "DSA & Interview Prep",
    href: "/placements",
  },
];

export default function QuickAccess() {
  const router = useRouter();

  return (
    <section className="mt-10">
      <h2 className="text-3xl font-bold mb-6">
        Everything You Need
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              onClick={() => router.push(item.href)}
              className="
                rounded-2xl
                border
                border-zinc-200
                bg-white
                p-6
                shadow-sm
                hover:shadow-md
                hover:border-blue-500
                transition-all
                cursor-pointer
                group
              "
            >
              <Icon
                className="
                  h-8
                  w-8
                  mb-4
                  text-blue-600
                  group-hover:scale-110
                  transition-transform
                "
              />

              <h3 className="font-semibold text-lg text-black">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}