import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonex Gym | Earn Your Next Rep",
  description: "A dedicated training floor for strength, cardio, conditioning, and personal coaching.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
