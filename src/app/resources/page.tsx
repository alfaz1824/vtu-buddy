import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceNavigator from "@/components/resources/ResourceNavigator";

interface ResourcesPageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function ResourcesPage({
  searchParams,
}: ResourcesPageProps) {
  const params = await searchParams;

  const searchQuery = params.search?.trim() || "";

  let query = supabase
    .from("resources")
    .select("*");

  if (searchQuery) {
    query = query.or(
      `title.ilike.%${searchQuery}%,subject.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`
    );
  }

  const { data: resources, error } = await query.order(
    "created_at",
    {
      ascending: false,
    }
  );

  if (error) {
    console.error("Error fetching resources:", error);
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold">
              Resource Hub
            </h1>

            <p className="text-muted-foreground mt-3">
              Access VTU Notes, Previous Year Question Papers,
              Important Questions and Lab Programs in one place.
            </p>
          </div>

          {/* Navigator */}
          <div className="mb-12">
            <ResourceNavigator />
          </div>

          {/* Search Results */}
          {searchQuery && (
            <div className="mb-8">
              <p className="text-blue-500 text-lg">
                Showing results for:
                <span className="font-semibold">
                  {" "}&quot;{searchQuery}&quot;
                </span>
              </p>
            </div>
          )}

          {/* Empty State */}
          {resources?.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold">
                No Resources Found
              </h2>

              <p className="text-muted-foreground mt-3">
                Try searching with another keyword.
              </p>
            </div>
          )}

          {/* Resource Grid */}
          {resources && resources.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
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
          )}

        </div>
      </main>
    </>
  );
}
