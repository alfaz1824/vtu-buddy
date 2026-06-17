import {
  BookOpen,
  Bookmark,
  Download,
  Eye,
} from "lucide-react";

interface StatsCardsProps {
  resources: number;
  bookmarks: number;
  downloads: number;
  viewed: number;
}

export default function StatsCards({
  resources,
  bookmarks,
  downloads,
  viewed,
}: StatsCardsProps) {
  const stats = [
    {
      title: "Resources",
      value: resources,
      icon: BookOpen,
    },
    {
      title: "Bookmarks",
      value: bookmarks,
      icon: Bookmark,
    },
    {
      title: "Downloads",
      value: downloads,
      icon: Download,
    },
    {
      title: "Viewed",
      value: viewed,
      icon: Eye,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              bg-white
              border
              border-zinc-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-md
              hover:border-blue-300
              transition-all
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-zinc-500 text-sm">
                  {stat.title}
                </p>

                <h3 className="text-4xl font-bold mt-2 text-black">
                  {stat.value}
                </h3>
              </div>

              <Icon className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        );
      })}
    </div>
  );
}