import { type User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

let hasWarnedAboutMissingProfilesTable = false;
let hasWarnedAboutInvalidProfileConflict = false;

function isMissingProfilesTableError(message: string) {
  const normalizedMessage = message.toLowerCase();

  return (
    (normalizedMessage.includes("public.profiles") &&
      normalizedMessage.includes("schema cache")) ||
    normalizedMessage.includes("could not find the table") ||
    normalizedMessage.includes("relation \"public.profiles\" does not exist")
  );
}

function isInvalidProfileConflictError(message: string) {
  const normalizedMessage = message.toLowerCase();

  return (
    normalizedMessage.includes("on conflict") ||
    normalizedMessage.includes("unique or exclusion constraint") ||
    normalizedMessage.includes("could not find a unique")
  );
}

export async function saveUserProfile(user: User) {
  const { error } = await supabase.from("profiles").upsert(
    {
      id: user.id,
      email: user.email,
      full_name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null,
      avatar_url: user.user_metadata?.avatar_url ?? user.user_metadata?.picture ?? null,
    },
    { onConflict: "id" }
  );

  if (!error) {
    console.info("Saved user profile:", user.email);
    return true;
  }

  if (isMissingProfilesTableError(error.message)) {
    if (!hasWarnedAboutMissingProfilesTable) {
      console.warn(
        "Supabase table public.profiles is missing. Run supabase/migrations/001_create_profiles.sql in your Supabase SQL Editor."
      );
      hasWarnedAboutMissingProfilesTable = true;
    }
    return false;
  }

  if (isInvalidProfileConflictError(error.message)) {
    if (!hasWarnedAboutInvalidProfileConflict) {
      console.warn(
        "Supabase profile upsert needs public.profiles.id to be a primary key or unique constraint. Run supabase/migrations/001_create_profiles.sql in your Supabase SQL Editor."
      );
      hasWarnedAboutInvalidProfileConflict = true;
    }
    return false;
  }

  console.error("Failed to save user profile:", error.message);
  return false;
}
