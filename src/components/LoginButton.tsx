"use client";

import { supabase } from "@/lib/supabase";

export default function LoginButton() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      Login with Google
    </button>
  );
}