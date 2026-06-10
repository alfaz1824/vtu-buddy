import Navbar from "@/components/layout/Navbar";

const resources = [
  "Module notes",
  "Lab manuals",
  "Important questions",
  "Reference books",
  "Exam checklists",
  "Study planners",
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold tracking-tight">Resource Hub</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Find semester-ready VTU materials collected into quick, focused
            study sections.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div
                key={resource}
                className="rounded-2xl border border-zinc-800 p-6 transition-colors hover:border-blue-500"
              >
                <h2 className="text-xl font-semibold">{resource}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
