type Resource = {
  id: string;
  title: string;
  subject: string;
  semester: string;
};

type Props = {
  resources: Resource[];
  selectedSubject: string;
};

export default function ResourceList({
  resources,
  selectedSubject,
}: Props) {
  const filteredResources =
    resources.filter(
      (resource) =>
        resource.subject === selectedSubject
    );

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-black mb-6">
        Resources for {selectedSubject}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="rounded-2xl border border-zinc-300 bg-white p-5"
          >
            <h4 className="font-bold text-black">
              {resource.title}
            </h4>

            <p className="text-zinc-600 mt-2">
              Semester {resource.semester}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}