import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "One Element Scroll | Codrops",
  description:
    "A simple concept of animating one element across different waypoints on scroll using GSAP Flip and ScrollTrigger.",
  keywords: ["scroll animation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/klj1rev.css" />
      </head>
      <body className="loading">{children}</body>
    </html>
  );
}
