import Navbar from "@/components/layout/Navbar";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceFilters from "@/components/resources/ResourceFilters";

export default function ResourcesPage() {
  const resources = [
    {
      id: "1",
      title: "Data Structures Notes",
      subject: "Data Structures",
      semester: "3",
      fileUrl: "#",
    },
    {
      id: "2",
      title: "Operating Systems Notes",
      subject: "Operating Systems",
      semester: "4",
      fileUrl: "#",
    },
    {
      id: "3",
      title: "DBMS Important Questions",
      subject: "DBMS",
      semester: "4",
      fileUrl: "#",
    },
    {
      id: "4",
      title: "Computer Networks PYQs",
      subject: "Computer Networks",
      semester: "5",
      fileUrl: "#",
    },
    {
      id: "5",
      title: "Machine Learning Lab Programs",
      subject: "Machine Learning",
      semester: "6",
      fileUrl: "#",
    },
    {
      id: "6",
      title: "Software Engineering Notes",
      subject: "Software Engineering",
      semester: "5",
      fileUrl: "#",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              Resource Hub
            </h1>

            <p className="text-muted-foreground mt-3">
              Access VTU Notes, Previous Year Question Papers,
              Important Questions and Lab Programs in one place.
            </p>
          </div>

          <ResourceFilters />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                id={resource.id}
                title={resource.title}
                subject={resource.subject}
                semester={resource.semester}
                fileUrl={resource.fileUrl}
              />
            ))}
          </div>

        </div>
      </main>
    </>
  );
}