"use client";

import { useEffect, useRef } from "react";

export default function ContactPage() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    document.documentElement.classList.remove("no-js");
    document.body.classList.remove("loading");
  }, []);

  return (
    <main>
      <section className="min-h-screen px-6 pt-32 pb-20 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-alt mb-4 text-center text-[clamp(2rem,8vw,5rem)] uppercase text-[var(--color-title)]">
            Get in Touch
          </h1>
          <p className="mx-auto mb-16 max-w-xl text-center text-sm leading-relaxed text-[var(--color-text)]">
            Whether you have a question about our materials, want to visit our
            atelier, or simply want to say hello — we&apos;d love to hear from
            you.
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="font-cap mb-2 block text-xs text-[var(--color-title)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-[color-mix(in_srgb,var(--color-link),transparent_70%)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--color-text),transparent_60%)] focus:border-[var(--color-link)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-cap mb-2 block text-xs text-[var(--color-title)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-[color-mix(in_srgb,var(--color-link),transparent_70%)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--color-text),transparent_60%)] focus:border-[var(--color-link)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-cap mb-2 block text-xs text-[var(--color-title)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full resize-none border border-[color-mix(in_srgb,var(--color-link),transparent_70%)] bg-transparent px-4 py-3 text-sm text-[var(--color-text)] outline-none placeholder:text-[color-mix(in_srgb,var(--color-text),transparent_60%)] focus:border-[var(--color-link)]"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="font-cap self-start border border-[var(--color-link)] px-8 py-3 text-xs uppercase tracking-wider text-[var(--color-link)] transition-colors hover:bg-[var(--color-link)] hover:text-white"
              >
                Send Message
              </button>
            </form>

            <div className="flex flex-col justify-center gap-8 text-sm text-[var(--color-text)]">
              <div>
                <h3 className="font-alt mb-2 text-lg uppercase text-[var(--color-title)]">
                  Visit Us
                </h3>
                <p className="leading-relaxed">
                  42 Weaver Street
                  <br />
                  Portland, OR 97201
                  <br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="font-alt mb-2 text-lg uppercase text-[var(--color-title)]">
                  Contact
                </h3>
                <p className="leading-relaxed">
                  hello@seraphkamos.com
                  <br />
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="font-alt mb-2 text-lg uppercase text-[var(--color-title)]">
                  Atelier Hours
                </h3>
                <p className="leading-relaxed">
                  Monday — Friday: 10am – 6pm
                  <br />
                  Saturday: 11am – 4pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
