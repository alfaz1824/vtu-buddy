import Link from "next/link";
import {
  BookOpen,
  FileText,
  Code,
  Briefcase,
} from "lucide-react";

const actions = [
  {
    title: "Notes",
    icon: BookOpen,
    href: "/resources",
  },
  {
    title: "PYQs",
    icon: FileText,
    href: "/resources",
  },
  {
    title: "Lab Programs",
    icon: Code,
    href: "/resources",
  },
  {
    title: "Placement Prep",
    icon: Briefcase,
    href: "/placement",
  },
];

export default function QuickAccess() {
  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold text-black mb-5">
        Everything You Need
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                bg-white
                border
                border-zinc-200
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-lg
                hover:border-blue-300
                transition-all
              "
            >
              <Icon className="h-8 w-8 text-blue-600 mb-4" />

              <h3 className="font-semibold text-black">
                {action.title}
              </h3>

              <p className="text-sm text-zinc-500 mt-2">
                Open instantly
              </p>
            </Link>
          );
        })}
      </div>

    </div>
  );
}