import {
  BookOpen,
  Bookmark,
  Download,
  Eye,
} from "lucide-react";

export default function StatsCards() {
  const stats = [
  {
    title: "Resources",
    value: "1248",
    icon: BookOpen,
  },
  {
    title: "Bookmarks",
    value: "12",
    icon: Bookmark,
  },
  {
    title: "Downloads",
    value: "56",
    icon: Download,
  },
  {
    title: "Viewed",
    value: "8",
    icon: Eye,
  },
];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
  key={stat.title}
  className="
    rounded-2xl
    border
    border-zinc-800
    bg-zinc-900
    p-6
    hover:border-blue-500/50
    hover:shadow-lg
    transition-all
  "
>
            <div className="flex justify-between items-center">
              <div>
  <p className="text-zinc-400 text-sm">
    {stat.title}
  </p>

         <h3 className="text-4xl font-bold mt-2 text-white">
  {stat.value}
</h3>
</div>

              <Icon className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
}