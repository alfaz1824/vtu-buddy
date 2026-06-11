import QuickActions from "@/components/dashboard/QuickActions";
import RecentResources from "@/components/dashboard/RecentResources";
import BookmarksPreview from "@/components/dashboard/BookmarksPreview";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickAccess from "@/components/home/QuickAccess";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          Welcome Back, Alfu 👋
        </h1>

        <p className="text-lg text-zinc-500 mt-3">
          Continue your VTU preparation journey.
        </p>

        {/* Search */}
        <div className="mt-8">
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
              placeholder:text-zinc-400
              p-4
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/20
              transition-all
            "
          />
        </div>

      </div>

      {/* Stats */}
      <StatsCards />

      {/* Quick Access */}
      <div className="mt-10">
        <QuickAccess />
      </div>

      {/* Resources + Bookmarks */}
      <div className="grid lg:grid-cols-2 gap-6 mt-10">
        <RecentResources />
        <BookmarksPreview />
      </div>

    </main>
  );
}