export default function RecentResources() {
  const resources = [
    "Data Structures Notes",
    "DBMS Important Questions",
    "OS Notes",
  ];

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">

      <h2 className="text-xl font-bold text-black mb-5">
        Recent Resources
      </h2>

      <ul className="space-y-4">
        {resources.map((resource) => (
          <li
            key={resource}
            className="border-b border-zinc-100 pb-3 text-zinc-700"
          >
            {resource}
          </li>
        ))}
      </ul>

    </div>
  );
}