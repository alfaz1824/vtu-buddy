export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-4">
          Admin Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Upload notes, question papers and study resources.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="border border-zinc-800 rounded-2xl p-6">
            Upload Notes
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            Upload PYQs
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            Upload Important Questions
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            Upload Lab Files
          </div>

        </div>

      </div>
    </main>
  );
}