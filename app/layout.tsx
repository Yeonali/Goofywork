import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Goofywork | AI Student Planner",
  description: "AI-powered student study planner dashboard"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
