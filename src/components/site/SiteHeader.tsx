"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button, IconButton, NavBar } from "@/components/ui";
import { cx } from "@/lib/cx";
import { createClient } from "@/lib/supabase/client";
import type { SiteUser } from "@/lib/types";
import styles from "./SiteHeader.module.css";

const NAV = ["Home", "Events", "Workshops"];

const PATH_BY_ID: Record<string, string> = {
  Home: "/",
  Events: "/events",
  Workshops: "/workshops",
  Join: "/join",
  Login: "/login",
  Claim: "/claim",
  Account: "/account",
  Admin: "/admin",
};

function activeIdForPath(pathname: string): string {
  if (pathname.startsWith("/events")) return "Events";
  if (pathname.startsWith("/workshops")) return "Workshops";
  return "Home";
}

export interface SiteHeaderProps {
  user?: SiteUser | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = activeIdForPath(pathname);

  const navigate = (id: string) => {
    setMobileOpen(false);
    router.push(PATH_BY_ID[id] ?? "/");
  };

  const handleLogout = async () => {
    setMobileOpen(false);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const signedInActions = (
    <div className={styles.actions}>
      {user?.officer ? (
        <Button variant="ghost" size="sm" onClick={() => navigate("Admin")}>
          Admin
        </Button>
      ) : null}
      <Button variant="ghost" size="sm" onClick={handleLogout}>
        Log out
      </Button>
      <Button size="sm" onClick={() => navigate("Account")}>
        My account
      </Button>
    </div>
  );

  const signedOutActions = (
    <div className={styles.actions}>
      <Button variant="ghost" size="sm" onClick={() => navigate("Login")}>
        Log in
      </Button>
      <Button size="sm" onClick={() => navigate("Join")}>
        Join the club
      </Button>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.stripe}>
        <div className={styles.stripeGreen} />
        <div className={styles.stripeYellow} />
      </div>
      <div className={styles.container}>
        <div className={styles.desktopNav}>
          <NavBar
            brand="Southern Business Club"
            links={NAV}
            active={active}
            onNavigate={navigate}
            action={user ? signedInActions : signedOutActions}
            style={{ padding: "18px 32px", background: "transparent", borderBottom: "none" }}
          />
        </div>
        <IconButton
          icon={mobileOpen ? "x" : "menu"}
          label={mobileOpen ? "Close menu" : "Open menu"}
          variant="ghost"
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((v) => !v)}
          style={{ position: "absolute", top: 18, right: 20 }}
        />
        <div className={cx(styles.mobilePanel, mobileOpen && styles.mobilePanelOpen)}>
          <div className={styles.mobileLinks}>
            {NAV.map((id) => (
              <button
                key={id}
                type="button"
                className={cx(styles.mobileLink, id === active && styles.mobileLinkActive)}
                onClick={() => navigate(id)}
              >
                {id}
              </button>
            ))}
          </div>
          <div className={styles.mobileActions}>
            {user ? (
              <>
                {user.officer ? (
                  <Button variant="outline" full onClick={() => navigate("Admin")}>
                    Admin
                  </Button>
                ) : null}
                <Button full onClick={() => navigate("Account")}>
                  My account
                </Button>
                <Button variant="ghost" full onClick={handleLogout}>
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button full onClick={() => navigate("Join")}>
                  Join the club
                </Button>
                <Button variant="outline" full onClick={() => navigate("Login")}>
                  Log in
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
