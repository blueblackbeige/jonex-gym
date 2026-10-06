import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonex Gym | Built for the Work",
  description: "Jonex Gym memberships, cardio access, personal training, and youth offers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
