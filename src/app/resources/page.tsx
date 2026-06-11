import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceFilters from "@/components/resources/ResourceFilters";

type Props = {
  searchParams: Promise<{
    scheme?: string;
    branch?: string;
    semester?: string;
    subject?: string;
  }>;
};

export default async function ResourcesPage({
  searchParams,
}: Props) {


  const params = await searchParams;

let query = supabase
  .from("resources")
  .select("*")
  .order("created_at", { ascending: false });

if (params.scheme) {
  query = query.eq("scheme", params.scheme);
}

if (params.branch) {
  query = query.eq("branch", params.branch);
}

if (params.semester) {
  query = query.eq(
    "semester",
    Number(params.semester)
  );
}

if (params.subject) {
  query = query.eq("subject", params.subject);
}

const { data: resources, error } = await query;

if (error) {
  console.error(error);
}
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
            {resources?.map((resource) => (
  <ResourceCard
    key={resource.id}
    id={resource.id}
    title={resource.title}
    subject={resource.subject}
    semester={String(resource.semester)}
    fileUrl={resource.file_url}
  />
))}
          </div>

        </div>
      </main>
    </>
  );
}