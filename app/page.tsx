import { supabase } from "@/lib/supabase";

export default async function Page() {
  const { data, error } = await supabase.auth.getSession();

  return (
    <div>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </div>
  );
}