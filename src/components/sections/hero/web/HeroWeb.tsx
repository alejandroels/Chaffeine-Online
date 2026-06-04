import { Reveal } from "@/components/ui/Reveal";
import { heroContent } from "../content";
import { HeroCopy } from "../shared/HeroCopy";
import { HeroImage } from "../shared/HeroImage";

export function HeroWeb() {
  const { image } = heroContent;

  return (
    <div className="flex h-full min-h-0 w-full items-stretch">
      <Reveal
        activeOnMount
        className="flex h-full shrink-0 flex-col justify-end items-start"
      >
        <HeroImage
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 1024px) 42vw, 46vw"
          showRightFade
          showBottomFade={false}
          containerClassName="relative h-full w-[min(40vw,520px)] shrink-0 md:w-[min(42vw,580px)] lg:w-[min(44vw,640px)]"
        />
      </Reveal>

      <Reveal
        activeOnMount
        className="flex min-w-0 flex-1 flex-col justify-center pl-6 md:pl-8 lg:pl-10 pr-gutter-md md:pr-gutter-lg"
      >
        <HeroCopy variant="web" />
      </Reveal>
    </div>
  );
}
