import {
  BookOpen,
  FileText,
  Brain,
  Calculator,
  Briefcase,
} from "lucide-react";

const items = [
  {
    title: "Notes",
    icon: BookOpen,
    description: "Module-wise VTU notes",
  },
  {
    title: "Question Papers",
    icon: FileText,
    description: "Previous year papers",
  },
  {
    title: "AI Assistant",
    icon: Brain,
    description: "Exam-oriented answers",
  },
  {
    title: "CGPA Calculator",
    icon: Calculator,
    description: "Track your performance",
  },
  {
    title: "Placement Hub",
    icon: Briefcase,
    description: "DSA & Interview Prep",
  },
];

export default function QuickAccess() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-6 hover:border-blue-500 transition-all cursor-pointer"
            >
              <item.icon className="h-8 w-8 mb-4 text-blue-500" />

              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}