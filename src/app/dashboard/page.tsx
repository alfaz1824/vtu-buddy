import Navbar from "@/components/layout/Navbar";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentResources from "@/components/dashboard/RecentResources";
import BookmarksPreview from "@/components/dashboard/BookmarksPreview";
import QuickAccess from "@/components/home/QuickAccess";
import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const [
    { count: resourceCount },
    { count: bookmarkCount },
    { count: viewCount },
  ] = await Promise.all([
    supabase
      .from("resources")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("bookmarks")
      .select("*", {
        count: "exact",
        head: true,
      }),

    supabase
      .from("resource_views")
      .select("*", {
        count: "exact",
        head: true,
      }),
  ]);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="🔍 Search notes, PYQs, lab programs..."
            className="
              w-full
              rounded-2xl
              border
              border-zinc-300
              bg-white
              text-black
              p-4
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
              transition-all
            "
          />
        </div>

        {/* Stats Cards */}
        <StatsCards
          resources={resourceCount || 0}
          bookmarks={bookmarkCount || 0}
          downloads={0}
          viewed={viewCount || 0}
        />

        {/* Quick Access */}
        <div className="mt-10">
          <QuickAccess />
        </div>

        {/* Recent Resources + Bookmarks */}
        <div className="grid lg:grid-cols-2 gap-6 mt-10">
          <RecentResources />
          <BookmarksPreview />
        </div>
      </main>
    </>
  );
}