import Image from "next/image";
import { HERO_BG } from "../constants";

type HeroImageProps = {
  src: string;
  alt: string;
  sizes: string;
  containerClassName: string;
  showRightFade?: boolean;
  showBottomFade?: boolean;
};

export function HeroImage({
  src,
  alt,
  sizes,
  containerClassName,
  showRightFade = false,
  showBottomFade = true,
}: HeroImageProps) {
  return (
    <div className={containerClassName}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        className="object-contain object-left-bottom drop-shadow-[0_20px_48px_rgba(43,27,58,0.38)] drop-shadow-[0_8px_22px_rgba(43,27,58,0.24)] drop-shadow-[0_2px_10px_rgba(43,27,58,0.16)]"
      />
      {showBottomFade && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[18%] bg-gradient-to-t from-[#CCC8CF] via-[#CCC8CF]/80 to-transparent sm:h-[15%]"
          aria-hidden
        />
      )}
      {showRightFade && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[26%] lg:w-[30%]"
          style={{
            backgroundImage: `linear-gradient(to left, ${HERO_BG} 0%, ${HERO_BG}b3 35%, ${HERO_BG}66 55%, transparent 100%)`,
          }}
          aria-hidden
        />
      )}
    </div>
  );
}
