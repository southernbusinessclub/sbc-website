import { Badge, Button, Card, IconButton, Tooltip, Icon, type IconName } from "@/components/ui";
import styles from "./workshops.module.css";

interface Program {
  icon: IconName;
  title: string;
  when: string;
  body: string;
  tone: "brand" | "accent";
}

const PROGRAMS: Program[] = [
  {
    icon: "camera",
    title: "Headshot studio",
    when: "Included with membership",
    body: "A photographer, a backdrop, and ten minutes each. You leave with a shot you can actually use.",
    tone: "brand",
  },
  {
    icon: "mic",
    title: "Mock interviews",
    when: "Included with membership",
    body: "Twenty minutes across the table from someone who will tell you the truth, and notes on the spot.",
    tone: "accent",
  },
  {
    icon: "users",
    title: "The member community",
    when: "Members only · Coming soon",
    body: "Access to a society of business-minded people on this campus — and the directory to reach them.",
    tone: "accent",
  },
];

const IDEAS = ["Resume clinic", "Alumni mentor matching", "Grad school panel", "Case night"];

export default function WorkshopsPage() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <div className="sbc-eyebrow">Professional development</div>
            <h1 className={styles.title}>
              Get hired,
              <br />
              not just involved
            </h1>
            <p className={styles.lede}>
              What membership actually gets you, beyond showing up. Everything here is included in the $10.
            </p>
          </div>
          <Card variant="poster" className={styles.heroCard}>
            <Badge tone="brand" icon="calendar-days">
              Coming up
            </Badge>
            <h3 className={styles.heroCardTitle}>Headshot sign-ups</h3>
            <p className={styles.heroCardBody}>
              Ruth McKee School of Business. Slots open once we set the date — members get first pick.
            </p>
            <Button disabled aria-disabled="true">
              Coming soon
            </Button>
          </Card>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.mainInner}>
          <div className={styles.programGrid}>
            {PROGRAMS.map((p) => (
              <Card key={p.title} className={styles.programCard}>
                <div className={styles.programHeader}>
                  <span className={p.tone === "accent" ? styles.programIconAccent : styles.programIconBrand}>
                    <Icon name={p.icon} size={22} />
                  </span>
                  <Tooltip label="Add to calendar">
                    <IconButton icon="calendar-plus" label="Add to calendar" variant="ghost" size="sm" />
                  </Tooltip>
                </div>
                <Badge tone="neutral">{p.when}</Badge>
                <h3 className={styles.programTitle}>{p.title}</h3>
                <p className={styles.programBody}>{p.body}</p>
              </Card>
            ))}
          </div>
          <div className={styles.ideasSection}>
            <div className="sbc-eyebrow" style={{ marginBottom: 10 }}>
              On the table
            </div>
            <h2 className={styles.ideasTitle}>Ideas we&apos;re chasing</h2>
            <p className={styles.ideasBody}>
              Not promises yet. If one of these is the reason you&apos;d join, tell an officer and we&apos;ll move it
              up the list.
            </p>
            <div className={styles.ideasRow}>
              {IDEAS.map((i) => (
                <Badge key={i} tone="neutral">
                  {i}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
