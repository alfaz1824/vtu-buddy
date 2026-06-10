"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Question Papers",
    href: "/question-papers",
  },
  {
    label: "AI Tools",
    href: "/ai-tools",
  },
  {
    label: "Placement Hub",
    href: "/placement",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          VTU Buddy
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-semibold transition-colors duration-200",
                  isActive
                    ? "text-blue-600"
                    : "text-foreground hover:text-blue-600"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Login Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 shadow-sm">
          Login with Google
        </button>
      </div>
    </header>
  );
}