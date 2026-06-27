"use client";

import { useEffect, useRef } from "react";

const products = [
  { name: "Flax Breeze Shirt", price: "$189", img: "/img/1.jpg" },
  { name: "Cottonspun Dress", price: "$249", img: "/img/2.jpg" },
  { name: "Woolhaven Coat", price: "$420", img: "/img/5.jpg" },
  { name: "Linen Drift Pants", price: "$210", img: "/img/4.jpg" },
  { name: "Hemp Weaver Jacket", price: "$340", img: "/img/3.jpg" },
  { name: "Organic Cotton Tee", price: "$89", img: "/img/6.jpg" },
  { name: "Merino Wool Sweater", price: "$275", img: "/img/7.jpg" },
  { name: "Silk Touch Scarf", price: "$145", img: "/img/8.jpg" },
  { name: "Bamboo Fiber Wrap", price: "$165", img: "/img/9.jpg" },
];

export default function ProductsPage() {
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
          Our Products
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-text)]">
          Every piece is crafted with intention — from natural fibers sourced
          with care, shaped by artisans who honor the materials and the hands
          that weave them.
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="group flex flex-col">
              <div
                className="aspect-[0.8] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${product.img})` }}
              />
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-alt text-lg uppercase text-[var(--color-title)]">
                  {product.name}
                </h3>
                <span className="font-cap text-sm text-[var(--color-link)]">
                  {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
