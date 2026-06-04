import { HEADER_HEIGHT } from "@/components/layout/Header";
import { HERO_BG } from "./constants";
import { HeroMobile } from "./mobile/HeroMobile";
import { HeroBackground } from "./shared/HeroBackground";
import { HeroWeb } from "./web/HeroWeb";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="relative min-h-0 overflow-hidden"
      style={{
        backgroundColor: HERO_BG,
        height: `calc(100dvh - ${HEADER_HEIGHT})`,
      }}
    >
      <HeroBackground />
      <div className="relative z-10 h-full min-h-0 md:hidden">
        <HeroMobile />
      </div>
      <div className="relative z-10 hidden h-full min-h-0 md:block">
        <HeroWeb />
      </div>
    </section>
  );
}
