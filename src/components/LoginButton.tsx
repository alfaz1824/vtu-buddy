"use client";

import { supabase } from "@/lib/supabase";

export default function LoginButton() {
  const handleLogin = async () => {

    console.log(
      "SUPABASE URL =",
      process.env.NEXT_PUBLIC_SUPABASE_URL
    );

    const { data, error } =
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000",
        },
      });

    console.log("DATA =", data);
    console.log("ERROR =", error);

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