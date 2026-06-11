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
      <h2 className="text-2xl font-bold mb-5">
        Quick Access
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="
                border
                border-zinc-800
                bg-zinc-900
                rounded-2xl
                p-6
                hover:border-blue-500/50
                transition-all
              "
            >
              <Icon className="h-8 w-8 text-blue-500 mb-4" />

              <h3 className="font-semibold">
                {action.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}