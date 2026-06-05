import { Reveal } from "@/components/ui/Reveal";
import { heroContent } from "../content";
import { HeroCopy } from "../shared/HeroCopy";
import { HeroImage } from "../shared/HeroImage";

export function HeroMobile() {
  const { image } = heroContent;

  return (
    <div className="relative h-full min-h-0 w-full">
      <Reveal
        activeOnMount
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex flex-col items-start justify-end"
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
        className="relative z-20 flex min-h-0 w-full min-w-0 flex-col justify-start px-gutter-sm pt-4 pb-[min(56vh,380px)] sm:px-gutter-md sm:pt-5 sm:pb-[min(60vh,420px)]"
      >
        <HeroCopy variant="mobile" />
      </Reveal>
    </div>
  );
}
