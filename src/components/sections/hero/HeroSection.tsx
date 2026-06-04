import { HEADER_HEIGHT } from "@/components/layout/Header";
import { HERO_BG } from "./constants";
import { HeroMobile } from "./mobile/HeroMobile";
import { HeroWeb } from "./web/HeroWeb";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Inicio"
      className="min-h-0 overflow-hidden"
      style={{
        backgroundColor: HERO_BG,
        height: `calc(100dvh - ${HEADER_HEIGHT})`,
      }}
    >
      <div className="h-full min-h-0 md:hidden">
        <HeroMobile />
      </div>
      <div className="hidden h-full min-h-0 md:block">
        <HeroWeb />
      </div>
    </section>
  );
}
