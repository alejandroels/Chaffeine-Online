"use client";

import Image from "next/image";
import { useCart } from "@/components/cart/CartProvider";
import { PrimaryActionButton } from "@/components/ui/PrimaryActionButton";
import type { Specialty } from "./content";

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
          <div className="relative h-full w-full">
            <div
              className="pointer-events-none absolute bottom-[1%] left-1/2 z-0 w-full -translate-x-1/2"
              aria-hidden
            >
              <div className="mx-auto h-[18px] w-[82%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(43,27,58,0.22)_0%,rgba(43,27,58,0.08)_52%,transparent_78%)] blur-[1px] sm:h-[20px]" />
              <div className="mx-auto -mt-2 h-[7px] w-[48%] rounded-[50%] bg-[rgba(43,27,58,0.38)] blur-[4px] sm:h-[8px]" />
            </div>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 220px, 240px"
              className="relative z-10 translate-y-[5%] object-contain object-bottom"
            />
          </div>
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

      <PrimaryActionButton
        onClick={handleRequest}
        className="w-full max-w-[220px]"
      >
        Solicitar
      </PrimaryActionButton>
    </article>
  );
}
