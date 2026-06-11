type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResourceDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  // Dummy Data
  const resource = {
    id,
    title: "Data Structures Notes",
    subject: "Data Structures",
    semester: "3",
    uploadedDate: "10 June 2026",
    fileUrl:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          {resource.title}
        </h1>

        <p className="text-muted-foreground mt-2">
          {resource.subject} • Semester {resource.semester}
        </p>

        <p className="text-sm text-muted-foreground mt-1">
          Uploaded on {resource.uploadedDate}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8">

        <a
          href={resource.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Download PDF
        </a>

        <button className="border px-4 py-2 rounded-lg">
          Bookmark
        </button>

      </div>

      {/* PDF Viewer */}
      <div className="border rounded-xl overflow-hidden shadow-sm">

        <iframe
          src={resource.fileUrl}
          className="w-full h-[900px]"
          title="PDF Viewer"
        />

      </div>

    </main>
  );
}