import { supabase } from "@/lib/supabase";
import Navbar from "@/components/layout/Navbar";
import ResourceCard from "@/components/resources/ResourceCard";
import ResourceNavigator from "@/components/resources/ResourceNavigator";

export default async function ResourcesPage() {

  const { data: resources, error } = await supabase
    .from("resources")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
  console.log("MESSAGE:", error.message);
  console.log("DETAILS:", error.details);
  console.log("HINT:", error.hint);
  console.log("FULL:", error);
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
          
        </div>
      </main>
    </>
  );
}