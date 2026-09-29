// Hand-written to match supabase/migrations/*.sql. Once a live project exists,
// regenerate with `supabase gen types typescript --linked` and replace this file.

export interface Database {
  public: {
    Tables: {
      members: {
        Row: {
          id: string;
          user_id: string | null;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          standing: string | null;
          major: string | null;
          member_since: string;
          officer_role: string | null;
          sms_opt_in: boolean;
          directory_opt_in: boolean;
          interests: string[];
          notes: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["members"]["Row"]> & {
          first_name: string;
          last_name: string;
          email: string;
          member_since: string;
        };
        Update: Partial<Database["public"]["Tables"]["members"]["Row"]>;
        Relationships: [];
      };
      dues: {
        Row: {
          id: string;
          member_id: string;
          school_year: string;
          paid: boolean;
          recorded_by: string | null;
          recorded_at: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["dues"]["Row"]> & {
          member_id: string;
          school_year: string;
        };
        Update: Partial<Database["public"]["Tables"]["dues"]["Row"]>;
        Relationships: [];
      };
      join_requests: {
        Row: {
          id: string;
          user_id: string | null;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          standing: string | null;
          major: string | null;
          interests: string[];
          sms_opt_in: boolean;
          directory_opt_in: boolean;
          notes: string | null;
          status: "pending" | "approved" | "declined";
          created_at: string;
          resolved_at: string | null;
          resolved_by: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["join_requests"]["Row"]> & {
          first_name: string;
          last_name: string;
          email: string;
        };
        Update: Partial<Database["public"]["Tables"]["join_requests"]["Row"]>;
        Relationships: [];
      };
      events: {
        Row: {
          id: string;
          title: string;
          event_date: string | null;
          event_time: string | null;
          location: string | null;
          description: string | null;
          category: string | null;
          topic: string | null;
          is_signature: boolean;
          published: boolean;
          member_value_usd: number | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["events"]["Row"]> & { title: string };
        Update: Partial<Database["public"]["Tables"]["events"]["Row"]>;
        Relationships: [];
      };
      rsvps: {
        Row: {
          id: string;
          event_id: string;
          member_id: string;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["rsvps"]["Row"]> & {
          event_id: string;
          member_id: string;
        };
        Update: Partial<Database["public"]["Tables"]["rsvps"]["Row"]>;
        Relationships: [];
      };
      event_feedback: {
        Row: {
          id: string;
          event_id: string;
          member_id: string;
          rating: number | null;
          comment: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["event_feedback"]["Row"]> & {
          event_id: string;
          member_id: string;
        };
        Update: Partial<Database["public"]["Tables"]["event_feedback"]["Row"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_officer: { Args: Record<string, never>; Returns: boolean };
      current_member_id: { Args: Record<string, never>; Returns: string | null };
      check_roster: {
        Args: { lookup_email: string; lookup_school_year: string };
        Returns: Array<{
          member_id: string;
          first_name: string;
          last_name: string;
          major: string | null;
          standing: string | null;
          member_since: string;
          dues_paid: boolean;
        }>;
      };
      claim_roster: {
        Args: { lookup_email: string };
        Returns: Database["public"]["Tables"]["members"]["Row"];
      };
      update_my_profile: {
        Args: {
          new_phone: string | null;
          new_sms_opt_in: boolean;
          new_directory_opt_in: boolean;
          new_notes: string | null;
        };
        Returns: Database["public"]["Tables"]["members"]["Row"];
      };
      approve_join_request: {
        Args: { request_id: string };
        Returns: Database["public"]["Tables"]["members"]["Row"];
      };
      decline_join_request: {
        Args: { request_id: string };
        Returns: undefined;
      };
    };
  };
}
