"use client";

import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";
import type { Specialty } from "./content";

const PRODUCT_SHADOW =
  "drop-shadow-[0_16px_36px_rgba(43,27,58,0.28)] drop-shadow-[0_6px_16px_rgba(43,27,58,0.18)]";

type SpecialtyCardProps = {
  item: Specialty;
};

export function SpecialtyCard({ item }: SpecialtyCardProps) {
  const { addItem } = useCart();
  const { id, name, description, price, cardDesign, image } = item;

  const handleRequest = () => {
    addItem({ id, name, description, price, image });
  };

  return (
    <article className="mx-auto flex w-full max-w-[300px] flex-col items-center gap-4">
      <div className="relative aspect-[280/400] w-full overflow-visible">
        <Image
          src={cardDesign}
          alt=""
          fill
          sizes="(max-width: 640px) 280px, 300px"
          aria-hidden
          className="object-contain"
        />

        <div className="absolute left-[8%] right-[8%] top-[9%] h-[52%] overflow-visible">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 220px, 240px"
            className={`translate-y-[5%] object-contain object-bottom ${PRODUCT_SHADOW}`}
          />
        </div>

        <div className="absolute bottom-[7%] left-[12%] right-[12%] flex flex-col items-center gap-1 text-center">
          <h3 className="font-headline-md text-headline-md leading-tight text-on-surface">
            {name}
          </h3>
          <p className="line-clamp-2 font-body-md text-[0.8rem] leading-snug text-on-surface-variant">
            {description}
          </p>
          <span className="mt-1 font-label-md text-label-md text-primary">
            {price}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleRequest}
        className="w-full max-w-[220px] bg-primary px-6 py-2.5 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-opacity duration-300 hover:opacity-85"
      >
        Solicitar
      </button>
    </article>
  );
}
