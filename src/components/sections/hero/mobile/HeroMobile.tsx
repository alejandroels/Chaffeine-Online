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
        className="relative flex min-h-0 w-full min-w-0 flex-col justify-start px-gutter-sm pt-5 pb-3 sm:px-gutter-md"
      >
        <HeroCopy variant="mobile" />
      </Reveal>
    </div>
  );
}
