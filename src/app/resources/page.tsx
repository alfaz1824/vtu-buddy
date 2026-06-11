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
console.error(error);
}

return (
<> <Navbar />

```
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

      {/* Resource Navigator */}
      <div className="mb-10">
        <ResourceNavigator />
      </div>

      {/* Resources */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Latest Resources
        </h2>

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

        {resources?.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No resources available.
          </div>
        )}
      </div>

    </div>
  </main>
</>
```

);
}
