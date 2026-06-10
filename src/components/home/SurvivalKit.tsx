import {
  Clock3,
  Zap,
  Target,
  BookOpen,
} from "lucide-react";

const kits = [
  {
    title: "Pass in 3 Hours",
    description:
      "Most important questions to clear the exam.",
    icon: Clock3,
  },
  {
    title: "Pass in 1 Day",
    description:
      "High-priority topics and quick revision plan.",
    icon: Zap,
  },
  {
    title: "Score 80+",
    description:
      "Complete preparation strategy for top marks.",
    icon: Target,
  },
  {
    title: "Important Diagrams",
    description:
      "Frequently asked diagrams and illustrations.",
    icon: BookOpen,
  },
];

export default function SurvivalKit() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Semester Survival Kit
        </h2>

        <p className="text-muted-foreground mb-10">
          Everything you need to survive and excel in VTU exams.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {kits.map((kit) => (
            <div
              key={kit.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-blue-500 transition-all duration-300"
            >
              <kit.icon className="h-10 w-10 text-blue-500 mb-4" />

              <h3 className="font-semibold text-xl mb-2">
                {kit.title}
              </h3>

              <p className="text-sm text-zinc-400">
                {kit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}