import Link from "next/link";
import { BrandIcon, Icon } from "@/components/ui";
import styles from "./SiteFooter.module.css";

const CLUB_LINKS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Workshops", href: "/workshops" },
  { label: "Join", href: "/join" },
  { label: "Log in", href: "/login" },
  { label: "Claim", href: "/claim" },
];

const VISIT_US = ["Southern Adventist University", "Collegedale, Tennessee", "businessclub@southern.edu"];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.wordmark}>
            Southern
            <br />
            Business Club
          </div>
          <p className={styles.tagline}>
            The business club at Southern Adventist University. Collegedale, Tennessee.
          </p>
          <div className={styles.social}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com/businessclubsau"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="instagram" size={19} />
            </a>
            <a
              className={styles.socialLink}
              href="https://www.linkedin.com/company/southern-business-club/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandIcon name="linkedin" size={19} />
            </a>
            <a className={styles.socialLink} href="mailto:businessclub@southern.edu" aria-label="Email us">
              <Icon name="mail" size={19} />
            </a>
          </div>
        </div>
        <div>
          <div className={styles.columnTitle}>Club</div>
          <div className={styles.columnLinks}>
            {CLUB_LINKS.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.columnTitle}>Visit us</div>
          <div className={styles.columnLinks}>
            {VISIT_US.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <span>Business, but fun</span>
        <span>School of Business</span>
      </div>
    </footer>
  );
}
