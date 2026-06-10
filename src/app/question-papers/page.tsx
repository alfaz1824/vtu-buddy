import Navbar from "@/components/layout/Navbar";

const paperTypes = [
  "Previous year papers",
  "Model papers",
  "Internal assessment papers",
  "Subject-wise paper sets",
];

export default function QuestionPapersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold tracking-tight">Question Papers</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Browse VTU paper collections by subject, semester, and exam type.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {paperTypes.map((type) => (
              <div
                key={type}
                className="rounded-2xl border border-zinc-800 p-6 transition-colors hover:border-blue-500"
              >
                <h2 className="text-xl font-semibold">{type}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
