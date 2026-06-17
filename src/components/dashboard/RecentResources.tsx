interface Resource {
  id: string;
  title: string;
  description: string | null;
  resource_type: string;
}

interface RecentResourcesProps {
  resources?: Resource[];
}

export default function RecentResources({
  resources = [],
}: RecentResourcesProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-zinc-200">
      <h2 className="text-xl font-semibold mb-4 text-black">
        Recent Resources
      </h2>

      {resources.length === 0 ? (
        <p className="text-zinc-500">
          No resources found.
        </p>
      ) : (
        <div className="space-y-3">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="border rounded-xl p-3"
            >
              <h3 className="font-medium text-black">
                {resource.title}
              </h3>

              <p className="text-sm text-zinc-500">
                {resource.resource_type}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}