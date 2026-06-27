"use client";

import { useEffect, useRef } from "react";

export default function AboutPage() {
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
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="font-alt mb-6 text-[clamp(2rem,8vw,5rem)] uppercase leading-[0.9] text-[var(--color-title)]">
              Our
              <br />
              Story
            </h1>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--color-text)]">
              <p>
                <strong>Seraph Kamos</strong> was born from a simple belief:
                fashion should honor both the people who make it and the planet
                we share. We started with a single loom and a commitment to
                transparency that has guided every decision since.
              </p>
              <p>
                Our materials are sourced from regenerative farms and ethical
                cooperatives. Every fiber — whether flax, organic cotton, or
                merino wool — is traceable to its origin. We work directly with
                artisans, paying fair wages and fostering traditions that might
                otherwise fade.
              </p>
              <p>
                We believe in slowness. In an industry built on speed, we choose
                to take our time — because a garment made with care lasts
                longer, feels better, and leaves a gentler footprint.
              </p>
            </div>
          </div>
          <div
            className="aspect-[0.8] w-full max-w-md justify-self-center bg-cover bg-center md:justify-self-end"
            style={{ backgroundImage: "url(/img/10.jpg)" }}
          />
        </div>
      </section>

      <section className="border-t border-[color-mix(in_srgb,var(--color-link),transparent_80%)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-alt mb-12 text-center text-[clamp(1.5rem,5vw,3rem)] uppercase text-[var(--color-title)]">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Sustainability", text: "Regenerative materials, zero-waste patterns, and carbon-neutral shipping from farm to doorstep." },
              { title: "Craftsmanship", text: "Generations of skill in every stitch — partnered with artisans who share our reverence for quality." },
              { title: "Transparency", text: "Every garment carries a QR code tracing its journey from field to finished piece." },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-alt mb-3 text-lg uppercase text-[var(--color-title)]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
