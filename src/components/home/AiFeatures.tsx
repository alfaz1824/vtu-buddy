"use client";

import {
  Brain,
  Sparkles,
  FileText,
  CalendarDays,
} from "lucide-react";

import { useRouter } from "next/navigation";

const features = [
  {
    title: "AI Answer Writer",
    description:
      "Generate exam-oriented VTU answers instantly.",
    icon: FileText,
    route: "/ai-tools",
  },
  {
    title: "VTU GPT",
    description:
      "Ask VTU-related questions and get instant help.",
    icon: Brain,
    route: "/ai-tools",
  },
  {
    title: "Question Predictor",
    description:
      "Discover important and frequently asked questions.",
    icon: Sparkles,
    route: "/ai-tools",
  },
  {
    title: "Study Planner",
    description:
      "Create personalized exam preparation plans.",
    icon: CalendarDays,
    route: "/ai-tools",
  },
];

export default function AiFeatures() {
  const router = useRouter();

  return (
    <section className="py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            AI Powered Tools
          </h2>

          <p className="mt-4 text-zinc-400">
            Study smarter using AI built specifically for VTU students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => router.push(feature.route)}
              className="
                rounded-3xl
                border
                border-zinc-800
                p-8
                cursor-pointer
                hover:border-blue-500
                hover:bg-blue-500/5
                transition-all
                duration-300
              "
            >
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {feature.description}
              </p>

              <div className="mt-4 text-blue-500 text-sm">
                Explore →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/ai-tools")}
            className="
              bg-blue-600
              hover:bg-blue-700
              px-6
              py-3
              rounded-xl
              font-semibold
              transition-all
            "
          >
            Explore AI Tools
          </button>
        </div>

      </div>
    </section>
  );
}