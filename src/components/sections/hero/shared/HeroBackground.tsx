import Image from "next/image";
import { HERO_BG } from "../constants";
import { heroContent } from "../content";

export function HeroBackground() {
  const { copyBackground } = heroContent;

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <Image
        src={copyBackground.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-50 md:opacity-[0.55] lg:opacity-60"
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, ${HERO_BG} 0%, ${HERO_BG}ee 22%, ${HERO_BG}cc 42%, ${HERO_BG}99 58%, ${HERO_BG}66 75%, ${HERO_BG}33 100%)`,
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `linear-gradient(100deg, ${HERO_BG} 0%, ${HERO_BG}f2 22%, ${HERO_BG}d9 40%, ${HERO_BG}b3 55%, ${HERO_BG}80 68%, ${HERO_BG}4d 80%, ${HERO_BG}26 92%, transparent 100%)`,
        }}
      />
    </div>
  );
}
