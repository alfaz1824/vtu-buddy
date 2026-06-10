export default function Stats() {
  const stats = [
    {
      value: "10K+",
      label: "Students",
    },
    {
      value: "500+",
      label: "Resources",
    },
    {
      value: "100+",
      label: "Subjects",
    },
    {
      value: "95%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="py-20 border-y">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold text-blue-500">
                {stat.value}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}