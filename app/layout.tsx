import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explore Creatures | Pet Travel",
  description: "Fast pet relocation quotes and support."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
