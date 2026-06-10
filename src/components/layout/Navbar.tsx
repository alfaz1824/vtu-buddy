import Link from "next/link";
import LoginButton from "@/components/LoginButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-black tracking-tight"
        >
          VTU Buddy
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-black font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            href="/resources"
            className="text-black font-medium hover:text-blue-600 transition-colors"
          >
            Resources
          </Link>

          <Link
            href="/question-papers"
            className="text-black font-medium hover:text-blue-600 transition-colors"
          >
            Question Papers
          </Link>

          <Link
            href="/ai-tools"
            className="text-black font-medium hover:text-blue-600 transition-colors"
          >
            AI Tools
          </Link>

          <Link
            href="/placements"
            className="text-black font-medium hover:text-blue-600 transition-colors"
          >
            Placement Hub
          </Link>
        </nav>

        {/* Login Button */}
        <div className="flex items-center">
          <LoginButton />
        </div>

      </div>
    </header>
  );
}