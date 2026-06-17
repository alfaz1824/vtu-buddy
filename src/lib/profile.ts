import { type User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

function isMissingProfilesTableError(message: string) {
  const normalizedMessage = message.toLowerCase();

  return (
    (normalizedMessage.includes("public.profiles") &&
      normalizedMessage.includes("schema cache")) ||
    normalizedMessage.includes("could not find the table") ||
    normalizedMessage.includes('relation "public.profiles" does not exist')
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
  const { data, error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: user.id,
        email: user.email,
        full_name:
          user.user_metadata?.full_name ??
          user.user_metadata?.name ??
          null,
        avatar_url:
          user.user_metadata?.avatar_url ??
          user.user_metadata?.picture ??
          null,
      },
      {
        onConflict: "id",
      }
    )
    .select();

  if (!error) {
    console.info("✅ Saved user profile:", user.email);
    console.info("Returned data:", data);
    return true;
  }

  // FULL DEBUG OUTPUT
  console.error("====================================");
  console.error("PROFILE UPSERT FAILED");
  console.error("====================================");
  console.error("Full error object:", error);
  console.error("Error code:", error.code);
  console.error("Error message:", error.message);
  console.error("Error details:", error.details);
  console.error("Error hint:", error.hint);
  console.error("====================================");

  if (isMissingProfilesTableError(error.message)) {
    console.warn(
      "Supabase table public.profiles is missing. Run supabase/migrations/001_create_profiles.sql in your Supabase SQL Editor."
    );
    return false;
  }

  if (isInvalidProfileConflictError(error.message)) {
    console.warn(
      "Supabase profile upsert needs public.profiles.id to be a primary key or unique constraint. Run supabase/migrations/001_create_profiles.sql in your Supabase SQL Editor."
    );
    return false;
  }

  console.error("Failed to save user profile:", error.message);
  return false;
}