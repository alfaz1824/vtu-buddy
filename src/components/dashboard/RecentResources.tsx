export default function RecentResources() {
  const resources = [
    "Data Structures Notes",
    "DBMS Important Questions",
    "OS Notes",
  ];

  return (
    <div className="border rounded-xl p-6">

      <h2 className="text-xl font-bold mb-4">
        Recent Resources
      </h2>

      <ul className="space-y-3">
        {resources.map((resource) => (
          <li
            key={resource}
            className="border-b pb-2"
          >
            {resource}
          </li>
        ))}
      </ul>

    </div>
  );
}