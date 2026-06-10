"use client";

import { useEffect, useState } from "react";
import { type User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

export default function LoginButton() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Failed to get session:", error.message);
      }

      setUser(data.session?.user ?? null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Failed to sign out:", error.message);
    }
  };

  if (isLoading) {
    return (
      <button
        disabled
        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
      >
        Checking login...
      </button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="max-w-40 truncate text-sm font-medium text-black">
          {user.email}
        </span>
        <button
          onClick={handleLogout}
          className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
    >
      Login with Google
    </button>
  );
}
