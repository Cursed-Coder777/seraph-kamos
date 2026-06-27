"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export default function Frame() {
  const pathname = usePathname();

  return (
    <div className="frame font-cap">
      <h3 className="frame__title">
        <Link href="/">Seraph Kamos</Link>
      </h3>
      <div className="frame-wrap">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-white no-underline"
                : "text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
