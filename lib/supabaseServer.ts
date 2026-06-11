import { createClient } from "@supabase/supabase-js";

// Create a server-side Supabase client lazily to avoid requiring env vars at import time.
export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string | undefined;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

  if (!url || !key) {
    // Return a stub that throws when used so importing this module doesn't crash the build.
    return {
      auth: {
        getUser: async () => ({ data: null, error: new Error("SUPABASE_SERVICE_ROLE_KEY not set") }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: async () => ({ data: null, error: new Error("SUPABASE_SERVICE_ROLE_KEY not set") }),
          }),
        }),
      }),
    };
  }

  return createClient(url, key);
}
