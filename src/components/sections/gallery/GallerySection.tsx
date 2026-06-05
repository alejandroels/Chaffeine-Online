import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { GALLERY_BG } from "./constants";
import { galleryContent } from "./content";

type Align = "left" | "center" | "right";

function alignClass(align: Align) {
  return align === "left"
    ? "justify-start"
    : align === "right"
      ? "justify-end"
      : "justify-center";
}

type ProductImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  align?: Align;
};

const IMAGE_SHADOW =
  "drop-shadow-[0_20px_48px_rgba(43,27,58,0.32)] drop-shadow-[0_8px_22px_rgba(43,27,58,0.2)] drop-shadow-[0_2px_10px_rgba(43,27,58,0.14)]";

function GalleryProductImage({
  src,
  alt,
  width,
  height,
  align = "center",
}: ProductImageProps) {
  return (
    <div
      className={`flex w-full min-h-[220px] items-center p-4 sm:min-h-[280px] sm:p-6 lg:min-h-[320px] ${alignClass(align)}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto max-h-[min(380px,55vh)] w-full max-w-2xl object-contain transition-transform duration-700 hover:scale-[1.02] ${IMAGE_SHADOW}`}
      />
    </div>
  );
}

type PosterProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  viewHref: string;
  align?: Align;
};

function GalleryPoster({
  src,
  alt,
  width,
  height,
  viewHref,
  align = "left",
}: PosterProps) {
  const itemsClass = align === "right" ? "items-end" : "items-start";

  return (
    <div className={`flex w-full flex-col gap-5 p-4 sm:p-6 ${itemsClass}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-full max-w-xl object-contain object-center ${IMAGE_SHADOW}`}
      />
      <a
        href={viewHref}
        className="inline-flex bg-primary px-8 py-2.5 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-opacity duration-300 hover:opacity-85"
      >
        Ver
      </a>
    </div>
  );
}

export function GallerySection() {
  const { id, title, description, posters, images, quote } = galleryContent;
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

        <div className="flex flex-col gap-12 sm:gap-14 lg:gap-20">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <Reveal from="right">
              <GalleryPoster
                src={posters.smoothies.src}
                alt={posters.smoothies.alt}
                width={posters.smoothies.width}
                height={posters.smoothies.height}
                viewHref={posters.smoothies.viewHref}
                align="left"
              />
            </Reveal>
            <Reveal from="right" delay={80}>
              <GalleryProductImage
                src={firstImage.src}
                alt={firstImage.alt}
                width={firstImage.width}
                height={firstImage.height}
                align="right"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <Reveal from="left" delay={secondImage.delay}>
              <GalleryProductImage
                src={secondImage.src}
                alt={secondImage.alt}
                width={secondImage.width}
                height={secondImage.height}
                align="left"
              />
            </Reveal>
            <Reveal from="right" delay={(secondImage.delay ?? 0) + 80}>
              <GalleryPoster
                src={posters.detox.src}
                alt={posters.detox.alt}
                width={posters.detox.width}
                height={posters.detox.height}
                viewHref={posters.detox.viewHref}
                align="right"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
            <Reveal from="left" delay={thirdImage.delay}>
              <GalleryPoster
                src={posters.ensaladas.src}
                alt={posters.ensaladas.alt}
                width={posters.ensaladas.width}
                height={posters.ensaladas.height}
                viewHref={posters.ensaladas.viewHref}
                align="left"
              />
            </Reveal>
            <Reveal from="right" delay={(thirdImage.delay ?? 0) + 80}>
              <GalleryProductImage
                src={thirdImage.src}
                alt={thirdImage.alt}
                width={thirdImage.width}
                height={thirdImage.height}
                align="right"
              />
            </Reveal>
          </div>

          <Reveal
            className="flex items-center justify-center py-4 lg:py-8"
            delay={quote.delay}
            from="right"
          >
            <div className="max-w-2xl text-center">
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
