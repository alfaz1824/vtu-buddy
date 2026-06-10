import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-28 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-6 text-sm">
          <Sparkles className="h-4 w-4" />
          AI Powered VTU Learning Platform
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Study Smarter.
          <br />
          Score Higher with
          <span className="text-blue-500"> VTU Buddy</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
          Notes, Question Papers, AI Answer Writer,
          Study Planner and Placement Resources —
          all in one platform built for VTU students.
        </p>

        <div className="mt-10 max-w-2xl mx-auto flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search subject, topic or question..."
              className="pl-10 h-12"
            />
          </div>

          <Button size="lg">
            Search
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button size="lg">
            Browse Resources
          </Button>

          <Button
  size="lg"
  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
>
  Try AI Assistant
</Button>
        </div>

      </div>
    </section>
  );
}