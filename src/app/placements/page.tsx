import Navbar from "@/components/layout/Navbar";

const tracks = [
  "DSA practice",
  "Aptitude prep",
  "Interview questions",
  "Resume checklist",
];

export default function PlacementsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold tracking-tight">Placement Hub</h1>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Prepare for campus placements with focused tracks for coding,
            aptitude, interviews, and resumes.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {tracks.map((track) => (
              <div
                key={track}
                className="rounded-2xl border border-zinc-800 p-6 transition-colors hover:border-blue-500"
              >
                <h2 className="text-xl font-semibold">{track}</h2>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
