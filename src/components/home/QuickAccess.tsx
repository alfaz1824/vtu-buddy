"use client";

import {
  BookOpen,
  FileText,
  Brain,
  Calculator,
  Briefcase,
} from "lucide-react";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "Notes",
    icon: BookOpen,
    description: "Module-wise VTU notes",
    href: "/resources",
  },
  {
    title: "Question Papers",
    icon: FileText,
    description: "Previous year papers",
    href: "/question-papers",
  },
  {
    title: "AI Assistant",
    icon: Brain,
    description: "Exam-oriented answers",
    href: "/ai-tools",
  },
  {
    title: "CGPA Calculator",
    icon: Calculator,
    description: "Track your performance",
    href: "/cgpa-calculator",
  },

];

export default function QuickAccess() {
  const router = useRouter();

  return (
   <section className="py-20">
  <div className="max-w-7xl mx-auto px-6">

{/* Section Header */}
<div className="text-center mb-10">
  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
    Everything You Need
  </h2>

  <p className="text-zinc-400 mt-8 max-w-2xl mx-auto">
    Notes, Question Papers, AI Tools, Placement Preparation and
    Academic Utilities — all in one place.
  </p>
</div>

{/* Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
  {items.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        onClick={() => router.push(item.href)}
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-zinc-800
          bg-gradient-to-b
          from-zinc-900
          to-black
          p-6
          cursor-pointer
          group
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-blue-500
          hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
        "
      >
        {/* Glow Effect */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            bg-gradient-to-br
            from-blue-500/10
            via-transparent
            to-cyan-500/10
          "
        />

        {/* Icon */}
        <div
          className="
            relative
            z-10
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            mb-5
            shadow-lg
          "
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        {/* Title */}
        <h3
          className="
            relative
            z-10
            text-xl
            font-bold
            text-white
            mb-2
          "
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="
            relative
            z-10
            text-sm
            text-zinc-400
            leading-relaxed
          "
        >
          {item.description}
        </p>

        {/* Explore Text */}
        <div
          className="
            relative
            z-10
            mt-5
            text-blue-400
            text-sm
            font-medium
            opacity-0
            group-hover:opacity-100
            transition-all
          "
        >
          Explore →
        </div>
      </div>
    );
  })}
</div>


  </div>
</section>

  );
}