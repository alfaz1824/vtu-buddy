"use client";

import { useEffect } from "react";
import { type AuthChangeEvent, type Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { saveUserProfile } from "@/lib/profile";

const syncedUserIds = new Set<string>();

function saveProfileOnce(session: Session) {
  if (syncedUserIds.has(session.user.id)) {
    return;
  }

  syncedUserIds.add(session.user.id);
  saveUserProfile(session.user);
}

function syncProfile(event: AuthChangeEvent, session: Session | null) {
  if (
    (event === "INITIAL_SESSION" ||
      event === "SIGNED_IN" ||
      event === "TOKEN_REFRESHED") &&
    session?.user
  ) {
    setTimeout(() => {
      saveProfileOnce(session);
    }, 0);
  }
}

export default function AuthSync() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error("Failed to get auth session:", error.message);
        return;
      }

      if (data.session?.user) {
        saveProfileOnce(data.session);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(syncProfile);

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
