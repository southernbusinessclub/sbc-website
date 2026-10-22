export const CURRENT_SCHOOL_YEAR = "2026–27";

export const TREASURER = {
  name: "Sarah Chobotar",
  role: "Treasurer",
  email: "sarahchobotar@southern.edu",
};

// Lets Sarah filter club mail from her personal inbox — keep it identical on every dues email.
export const DUES_EMAIL_TAG = "[SBC Dues]";

export function mailtoHref(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function outlookWebComposeHref(email: string, subject: string, body: string): string {
  return `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
