import Navbar from "@/components/layout/Navbar";

const tools = [
  "Answer writer",
  "Question predictor",
  "Study planner",
  "Topic explainer",
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
              <div
                key={tool}
                className="rounded-2xl border border-zinc-800 p-6 transition-colors hover:border-blue-500"
              >
                <h2 className="text-xl font-semibold">{tool}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
