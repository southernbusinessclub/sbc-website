import type { Metadata } from "next";
import { Big_Shoulders, Karla } from "next/font/google";
import "./globals.css";

// Google Fonts merged "Big Shoulders Display" into the single variable "Big Shoulders"
// family (with an optical-size axis); this is the closest next/font export to the
// reference design's display face.
const bigShouldersDisplay = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Southern Business Club",
  description: "The business club at Southern Adventist University. Collegedale, Tennessee.",
  icons: {
    icon: "/bc-icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bigShouldersDisplay.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
