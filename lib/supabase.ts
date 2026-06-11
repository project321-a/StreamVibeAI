import { createClient } from "@supabase/supabase-js";

// createClient only in browser context
export const supabase = typeof window !== "undefined"
  ? createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    )
  : null as unknown as ReturnType<typeof createClient>;