import type { Metadata } from "next";
import Frame from "@/components/Frame";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seraph Kamos — One Element Scroll",
  description:
    "A simple concept of animating one element across different waypoints on scroll using GSAP Flip and ScrollTrigger.",
  keywords: ["scroll animation"],
  icons: [{ rel: "icon", url: "/sephra-kamos.jpg" }],
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
      <body className="loading" suppressHydrationWarning>
        <Frame />
        {children}
        <Footer />
      </body>
    </html>
  );
}
