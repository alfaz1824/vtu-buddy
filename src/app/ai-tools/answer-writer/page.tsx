import Navbar from "@/components/layout/Navbar";

const tips = [
  "Start with a direct definition or thesis.",
  "Break the answer into clear points with examples.",
  "End with a short exam-friendly conclusion.",
];

export default function AnswerWriterPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h1 className="text-2xl font-bold">Answer Writer</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Create structured, exam-oriented answers for VTU questions.
            </p>

            <div className="mt-8 space-y-3">
              {tips.map((tip) => (
                <p
                  key={tip}
                  className="rounded-xl border border-zinc-800 bg-black px-4 py-3 text-sm text-zinc-300"
                >
                  {tip}
                </p>
              ))}
            </div>
          </aside>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <form className="grid gap-5">
              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-zinc-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Example: DBMS, OS, CN"
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="question"
                  className="text-sm font-medium text-zinc-300"
                >
                  Question
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={8}
                  placeholder="Paste or type the exam question here..."
                  className="mt-2 w-full resize-y rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-blue-500"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="marks"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Marks
                  </label>
                  <select
                    id="marks"
                    name="marks"
                    defaultValue="10"
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-blue-500"
                  >
                    <option value="5">5 marks</option>
                    <option value="10">10 marks</option>
                    <option value="15">15 marks</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="style"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Style
                  </label>
                  <select
                    id="style"
                    name="style"
                    defaultValue="exam"
                    className="mt-2 w-full rounded-xl border border-zinc-800 bg-black px-4 py-3 text-white outline-none transition-colors focus:border-blue-500"
                  >
                    <option value="exam">Exam answer</option>
                    <option value="brief">Brief notes</option>
                    <option value="detailed">Detailed explanation</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                className="mt-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Generate Answer
              </button>
            </form>
          </section>
        </section>
      </main>
    </>
  );
}
