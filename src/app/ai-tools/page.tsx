import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

const tools = [
  {
    title: "Answer writer",
    description: "Draft structured VTU-style answers from a question prompt.",
    href: "/ai-tools/answer-writer",
  },
  {
    title: "Question predictor",
    description: "Coming soon.",
    href: "/ai-tools",
  },
  {
    title: "Study planner",
    description: "Coming soon.",
    href: "/ai-tools",
  },
  {
    title: "Topic explainer",
    description: "Coming soon.",
    href: "/ai-tools",
  },
];

export default function AiToolsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold tracking-tight">AI Tools</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Use exam-focused helpers for revision, writing practice, and study
            planning.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="rounded-2xl border border-zinc-800 p-6 transition-colors hover:border-blue-500"
              >
                <h2 className="text-xl font-semibold">{tool.title}</h2>
                <p className="mt-3 text-sm text-zinc-400">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
