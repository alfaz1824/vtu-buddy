import { getHomepageStats } from "@/lib/homepage";

export default async function Stats() {
  const stats = await getHomepageStats();

  const statsList = [
    {
      label: "Resources",
      value: stats.resources,
    },
    {
      label: "Subjects",
      value: stats.subjects,
    },
    {
      label: "Branches",
      value: stats.branches,
    },
    {
      label: "Downloads",
      value: stats.downloads,
    },
  ];

  return (
    <section className="py-20 border-y">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {statsList.map((stat) => (
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