import { isSupabaseConfigured } from "@/lib/supabase/is-configured";
import { createClient } from "@/lib/supabase/server";

export interface PublishedEvent {
  id: string;
  title: string;
  eventDate: string | null;
  eventTime: string | null;
  location: string | null;
  description: string | null;
  category: string | null;
  topic: string | null;
  isSignature: boolean;
}

/** Published events only — this is what every public page is allowed to show. */
export async function getPublishedEvents(): Promise<PublishedEvent[]> {
  if (!isSupabaseConfigured()) return [];

  const supabase = await createClient();
  const { data } = await supabase
    .from("events")
    .select("id,title,event_date,event_time,location,description,category,topic,is_signature")
    .eq("published", true)
    .order("event_date", { ascending: true, nullsFirst: false });

  return (data ?? []).map((e) => ({
    id: e.id,
    title: e.title,
    eventDate: e.event_date,
    eventTime: e.event_time,
    location: e.location,
    description: e.description,
    category: e.category,
    topic: e.topic,
    isSignature: e.is_signature,
  }));
}
