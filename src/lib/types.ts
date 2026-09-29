export interface SiteUser {
  name: string;
  initials: string;
  /** Officer title, e.g. "Treasurer" — null/undefined for a regular member. */
  officer?: string | null;
}
