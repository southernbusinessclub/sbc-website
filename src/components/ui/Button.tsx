import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconAfter?: IconName;
  full?: boolean;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    icon,
    iconAfter,
    full = false,
    className,
    ...rest
  } = props;

  const iconSize = size === "lg" ? 19 : 17;
  const classes = cx(styles.button, styles[variant], styles[size], full && styles.full, className);

  const content = (
    <>
      {icon ? <Icon name={icon} size={iconSize} /> : null}
      {children}
      {iconAfter ? <Icon name={iconAfter} size={iconSize} /> : null}
    </>
  );

  if (props.as === "a") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as: _as, href, ...anchorRest } = rest as ButtonAsAnchor;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...(anchorRest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as: _as, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button className={classes} {...(buttonRest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
