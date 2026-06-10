import {
  Brain,
  Sparkles,
  FileText,
  CalendarDays,
} from "lucide-react";

const features = [
  {
    title: "AI Answer Writer",
    icon: FileText,
  },
  {
    title: "VTU GPT",
    icon: Brain,
  },
  {
    title: "Question Predictor",
    icon: Sparkles,
  },
  {
    title: "Study Planner",
    icon: CalendarDays,
  },
];

export default function AiFeatures() {
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
              className="rounded-3xl border border-zinc-800 p-8 hover:border-blue-500 transition-all"
            >
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />

              <h3 className="text-2xl font-semibold">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}