import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-[90] border-t border-[color-mix(in_srgb,var(--color-link),transparent_80%)] bg-[var(--color-bg)] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-alt mb-4 text-2xl uppercase text-[var(--color-title)]">
            Seraph Kamos
          </h3>
          <p className="text-sm leading-relaxed text-[var(--color-text)]">
            Crafting connections between earth, human hands, and the moments
            that matter. Every piece carries a story rooted in sustainability
            and timeless design.
          </p>
        </div>

        <div>
          <h4 className="font-alt mb-4 text-sm uppercase tracking-widest text-[var(--color-title)]">
            Navigate
          </h4>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]">
              Home
            </Link>
            <Link href="/products" className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]">
              Products
            </Link>
            <Link href="/about" className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]">
              About
            </Link>
            <Link href="/contact" className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]">
              Contact
            </Link>
            <Link href="/blog" className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]">
              Blog
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="font-alt mb-4 text-sm uppercase tracking-widest text-[var(--color-title)]">
            Connect
          </h4>
          <div className="flex flex-col gap-2 text-sm text-[var(--color-text)]">
            <span>hello@seraphkamos.com</span>
            <span>+1 (555) 123-4567</span>
            <div className="mt-2 flex gap-4">
              <a
href="https://x.com"
                className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="font-alt mx-auto mt-16 max-w-6xl border-t border-[color-mix(in_srgb,var(--color-link),transparent_80%)] pt-8 text-center text-xs uppercase tracking-wider text-[var(--color-text)]">
        <p>&copy; {new Date().getFullYear()} Seraph Kamos. All rights reserved.</p>
        <p className="mt-1">
          Made with care by{" "}
          <a
            href="https://x.com/codrops"
            className="text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]"
          >
            Codrops
          </a>
        </p>
      </div>
    </footer>
  );
}
