import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_BG } from "./constants";
import { galleryContent } from "./content";

function GalleryImage({
  src,
  alt,
  width,
  height,
  contain,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  contain?: boolean;
}) {
  if (contain) {
    return (
      <div className="flex w-full min-h-[240px] items-center justify-center p-4 sm:min-h-[300px] sm:p-6 lg:min-h-[360px]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto max-h-[min(360px,50vh)] w-full object-contain transition-transform duration-700 hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[5/6] w-full overflow-hidden bg-surface-container sm:aspect-[4/5]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  );
}

export function GallerySection() {
  const { id, title, description, images, quote } = galleryContent;
  const [firstImage, secondImage, thirdImage] = images;

  return (
    <section
      id={id}
      aria-label={title}
      className="w-full overflow-hidden py-stack-lg lg:py-28"
      style={{ backgroundColor: GALLERY_BG }}
    >
      <div className="mx-auto max-w-7xl px-gutter-lg">
        <Reveal className="mb-12 flex flex-col items-end justify-between gap-stack-sm md:mb-16 md:flex-row lg:mb-20">
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg md:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h2>
            <p className="max-w-xl font-body-md text-body-md text-secondary md:text-lg">
              {description}
            </p>
          </div>
          <div className="mx-8 mb-4 hidden h-px flex-grow bg-outline-variant/40 md:block" />
        </Reveal>

        <div className="grid grid-cols-12 items-start gap-10 lg:gap-14 xl:gap-16">
          <div className="col-span-12 flex flex-col gap-10 sm:gap-12 lg:col-span-6 xl:col-span-5">
            <Reveal>
              <GalleryImage
                src={firstImage.src}
                alt={firstImage.alt}
                width={firstImage.width}
                height={firstImage.height}
                contain
              />
            </Reveal>

            <Reveal delay={secondImage.delay}>
              <GalleryImage
                src={secondImage.src}
                alt={secondImage.alt}
                width={secondImage.width}
                height={secondImage.height}
                contain
              />
            </Reveal>

            <Reveal delay={thirdImage.delay}>
              <GalleryImage
                src={thirdImage.src}
                alt={thirdImage.alt}
                width={thirdImage.width}
                height={thirdImage.height}
                contain
              />
            </Reveal>

          </div>

          <Reveal
            className="col-span-12 flex items-center justify-center py-8 lg:col-span-6 lg:col-start-8 lg:py-16 xl:col-span-7 xl:col-start-6"
            delay={quote.delay}
          >
            <div className="max-w-xl text-center lg:text-left">
              <p className="mb-6 font-display-lg text-[2rem] leading-tight italic sm:text-[2.5rem] lg:text-[3rem]">
                &ldquo;{quote.text}&rdquo;
              </p>
              <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
                — {quote.author}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
