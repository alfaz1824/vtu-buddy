import QuickActions from "@/components/dashboard/QuickActions";
import RecentResources from "@/components/dashboard/RecentResources";
import BookmarksPreview from "@/components/dashboard/BookmarksPreview";
import StatsCards from "@/components/dashboard/StatsCards";
import QuickAccess from "@/components/home/QuickAccess";

export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <div className="mb-10">
        <h1 className="text-5xl font-bold tracking-tight">
  Welcome Back, Alfu 👋
</h1>

<p className="text-lg text-muted-foreground mt-3">
  Continue your VTU preparation journey.
</p>

<div className="mt-6 mb-8">
  <input
    type="text"
    placeholder="🔍 Search notes, PYQs, lab programs..."
    className="
      w-full
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
      text-white
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
      
<StatsCards />

<QuickAccess />

<div className="grid lg:grid-cols-2 gap-6 mt-8"></div>


      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <RecentResources />
        <BookmarksPreview />
      </div>

    </main>
  );
}