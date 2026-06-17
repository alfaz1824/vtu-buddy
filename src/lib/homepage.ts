import { supabase } from "@/lib/supabase";

export async function getHomepageStats() {
  const { count: resources } = await supabase
    .from("resources")
    .select("*", { count: "exact", head: true });

  const { data: subjectsData } = await supabase
    .from("resources")
    .select("subject");

  const uniqueSubjects = new Set(
    subjectsData?.map((item) => item.subject)
  );

  const { data: branchData } = await supabase
    .from("resources")
    .select("branch");

  const uniqueBranches = new Set(
    branchData?.map((item) => item.branch)
  );

  const { data: downloadsData } = await supabase
    .from("resources")
    .select("downloads");

  const downloads =
    downloadsData?.reduce(
      (sum, item) => sum + (item.downloads || 0),
      0
    ) || 0;

  return {
    resources: resources || 0,
    subjects: uniqueSubjects.size,
    branches: uniqueBranches.size,
    downloads,
  };
}