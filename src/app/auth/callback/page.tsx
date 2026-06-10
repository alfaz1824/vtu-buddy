"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { saveUserProfile } from "@/lib/profile";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    async function finishLogin() {
      const url = new URL(window.location.href);
      const code = url.searchParams.get("code");

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          console.error("Failed to finish Google login:", error.message);
          router.replace("/");
          return;
        }
      }

      const { data, error } = await supabase.auth.getUser();

      if (error) {
        console.error("Failed to get Google user:", error.message);
        router.replace("/");
        return;
      }

      if (data.user) {
        await saveUserProfile(data.user);
      }

      router.replace("/");
    }

    finishLogin();
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <p>Signing you in...</p>
    </main>
  );
}
