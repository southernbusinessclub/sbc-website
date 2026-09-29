import * as React from 'react';

/**
 * Site header with wordmark, links and one action.
 * @startingPoint section="Club" subtitle="Site header with wordmark and links" viewport="700x90"
 */
export interface NavBarProps {
  /** Wordmark text — the club has no logo file, so the name is set in Big Shoulders. */
  brand?: string;
  /** A link with `children` renders a caret and a hover submenu. */
  links?: Array<string | { value: string; label: string; children?: Array<string | { value: string; label: string }> }>;
  active?: string;
  onNavigate?: (value: string) => void;
  /** Button label, or a custom node rendered at the right end. */
  action?: React.ReactNode;
  /** Blue bar with white type. */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export function NavBar(props: NavBarProps): JSX.Element;
