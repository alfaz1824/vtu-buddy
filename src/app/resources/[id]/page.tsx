import { supabase } from "@/lib/supabase";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResourceDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: resource, error } = await supabase
    .from("resources")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !resource) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">
          Resource Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="w-full px-8 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          {resource.title}
        </h1>

        <p className="text-muted-foreground mt-2">
          {resource.subject} • Semester {resource.semester}
        </p>

        <p className="text-sm text-muted-foreground mt-1">
          Uploaded on{" "}
          {new Date(resource.created_at).toLocaleDateString()}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">

        <a
          href={resource.file_url}
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
      <div className="w-full border border-zinc-800 rounded-xl overflow-hidden shadow-lg">

        <iframe
          src={resource.file_url}
        className="w-full h-[calc(100vh-180px)]"
          title={resource.title}
        />

      </div>

    </main>
  );
}