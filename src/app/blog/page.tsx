"use client";

import { useEffect, useRef } from "react";

const posts = [
  {
    title: "The Art of Slow Fashion",
    excerpt:
      "Why taking time to craft each piece matters more than ever in a world of fast trends and disposable clothing.",
    date: "June 12, 2026",
    img: "/img/11.jpg",
  },
  {
    title: "From Flax to Fabric",
    excerpt:
      "A journey through our flax supply chain — from regenerative farms in Normandy to the loom in our Portland atelier.",
    date: "May 28, 2026",
    img: "/img/12.jpg",
  },
  {
    title: "Meet the Makers: Our Artisan Partners",
    excerpt:
      "Behind every Seraph Kamos garment is a community of skilled hands. We profile the people who bring our designs to life.",
    date: "May 10, 2026",
    img: "/img/13.jpg",
  },
  {
    title: "A Beginner's Guide to Natural Fibers",
    excerpt:
      "Linen, hemp, organic cotton, merino wool — what makes each fiber unique and how to care for them.",
    date: "April 22, 2026",
    img: "/img/9.jpg",
  },
  {
    title: "Behind the Scenes: Our Spring Collection",
    excerpt:
      "An intimate look at the design process behind our latest collection — from mood board to finished garment.",
    date: "April 5, 2026",
    img: "/img/8.jpg",
  },
  {
    title: "Why We Chose Portland",
    excerpt:
      "How the Pacific Northwest's culture of craftsmanship and sustainability shaped the soul of Seraph Kamos.",
    date: "March 18, 2026",
    img: "/img/7.jpg",
  },
];

export default function BlogPage() {
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
        <h1 className="font-alt mb-4 text-center text-[clamp(2rem,8vw,5rem)] uppercase text-[var(--color-title)]">
          Journal
        </h1>
        <p className="mx-auto mb-16 max-w-xl text-center text-sm leading-relaxed text-[var(--color-text)]">
          Thoughts on craftsmanship, sustainability, and the stories behind the
          garments we make.
        </p>
        <div className="mx-auto grid max-w-5xl gap-12">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group grid gap-6 md:grid-cols-[240px_1fr]"
            >
              <div
                className="aspect-[0.8] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ backgroundImage: `url(${post.img})` }}
              />
              <div className="flex flex-col justify-center">
                <span className="font-cap mb-2 text-xs text-[var(--color-link)]">
                  {post.date}
                </span>
                <h2 className="font-alt mb-3 text-xl uppercase text-[var(--color-title)]">
                  {post.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-text)]">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="font-cap self-start text-xs uppercase tracking-wider text-[var(--color-link)] no-underline hover:text-[var(--color-link-hover)]"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
