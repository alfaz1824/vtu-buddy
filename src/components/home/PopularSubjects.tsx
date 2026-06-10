const subjects = [
  "Machine Learning",
  "Full Stack Development",
  "DBMS",
  "Computer Networks",
  "Operating Systems",
  "Data Structures",
];

export default function PopularSubjects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Popular Subjects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="rounded-2xl border p-6 hover:border-blue-500 transition-all"
            >
              <h3 className="font-semibold text-xl">
                {subject}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}