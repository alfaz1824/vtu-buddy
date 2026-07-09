import { supabase } from "@/lib/supabase";

const fallbackStats = {
  resources: 0,
  subjects: 0,
  branches: 0,
  downloads: 0,
};

type HomepageStats = typeof fallbackStats;

function withTimeout<T>(
  promise: PromiseLike<T>,
  timeoutMs: number,
  fallback: T
) {
  return Promise.race([
    Promise.resolve(promise),
    new Promise<T>((resolve) => {
      setTimeout(() => resolve(fallback), timeoutMs);
    }),
  ]);
}

export async function getHomepageStats() {
  return withTimeout(loadHomepageStats(), 5000, fallbackStats);
}

async function loadHomepageStats(): Promise<HomepageStats> {
  const [
    { count: resources },
    { data: subjectsData },
    { data: branchData },
    { data: downloadsData },
  ] = await Promise.all([
    supabase
      .from("resources")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("resources")
      .select("subject"),
    supabase
      .from("resources")
      .select("branch"),
    supabase
      .from("resources")
      .select("downloads"),
  ]);

  const uniqueSubjects = new Set(
    subjectsData?.map((item) => item.subject)
  );

  const uniqueBranches = new Set(
    branchData?.map((item) => item.branch)
  );

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
