import { Reveal } from "@/components/ui/Reveal";
import { HERO_BG } from "../constants";
import { heroContent } from "../content";
import { HeroCopy } from "../shared/HeroCopy";
import { HeroImage } from "../shared/HeroImage";

export function HeroMobile() {
  const { image } = heroContent;

  return (
    <div className="relative h-full min-h-0 w-full">
      <Reveal
        activeOnMount
        className="absolute inset-0 flex min-h-0 flex-col justify-end items-start"
      >
        <HeroImage
          src={image.src}
          alt={image.alt}
          sizes="90vw"
          showBottomFade={false}
          containerClassName="relative h-[min(58vh,400px)] w-[90%] shrink-0 sm:h-[min(62vh,460px)]"
        />
      </Reveal>

      <Reveal
        activeOnMount
        className="relative z-10 flex min-h-0 flex-col justify-start px-gutter-sm pt-5 pb-3"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[52%]"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${HERO_BG} 0%, ${HERO_BG}ee 55%, ${HERO_BG}99 75%, transparent 100%)`,
          }}
          aria-hidden
        />
        <HeroCopy variant="mobile" />
      </Reveal>
    </div>
  );
}
