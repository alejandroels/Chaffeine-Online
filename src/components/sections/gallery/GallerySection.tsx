import type { ReactNode } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { LOGO_PURPLE } from "@/components/sections/hero/constants";
import { GALLERY_BG, GALLERY_CIRCLE_THEMES, type GalleryCircleTheme } from "./constants";
import { galleryContent } from "./content";

type Align = "left" | "center" | "right";

const IMAGE_SHADOW =
  "drop-shadow-[0_28px_56px_rgba(43,27,58,0.45)] drop-shadow-[0_14px_32px_rgba(43,27,58,0.3)] drop-shadow-[0_4px_14px_rgba(43,27,58,0.22)]";

type GalleryBackdropProps = {
  align: Align;
  circleTheme: GalleryCircleTheme;
  children: ReactNode;
  footer?: ReactNode;
};

function GalleryBackdrop({ align, circleTheme, children, footer }: GalleryBackdropProps) {
  const inwardClass =
    align === "left"
      ? "ml-auto mr-[6%] sm:mr-[10%]"
      : align === "right"
        ? "mr-auto ml-[6%] sm:ml-[10%]"
        : "mx-auto";

  const imageOffsetClass =
    align === "left"
      ? "translate-x-[8%] sm:translate-x-[12%]"
      : align === "right"
        ? "-translate-x-[8%] sm:-translate-x-[12%]"
        : "";

  return (
    <div className="relative flex w-full min-h-[180px] items-center justify-center overflow-visible p-2 sm:min-h-[210px] sm:p-3 lg:min-h-[240px]">
      <div className={`relative w-full max-w-2xl overflow-visible ${inwardClass}`}>
        <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
          <div
            className="absolute left-1/2 top-1/2 h-[min(300px,68vw)] w-[min(300px,68vw)] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[min(360px,44vw)] sm:w-[min(360px,44vw)]"
            style={{ backgroundColor: `${circleTheme.main}38` }}
          />
          <div
            className="absolute left-[46%] top-[58%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-32 sm:w-32"
            style={{ backgroundColor: `${circleTheme.accent}55` }}
          />
          <div
            className="absolute left-[56%] top-[36%] hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full sm:block sm:h-24 sm:w-24"
            style={{ backgroundColor: `${circleTheme.subtle}70` }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center overflow-visible px-2 py-3 sm:px-3 sm:py-4">
          <div className={`transition-transform duration-700 ${imageOffsetClass}`}>{children}</div>
          {footer ? <div className="mt-1">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}

function GalleryViewButton({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex bg-primary px-8 py-2.5 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-opacity duration-300 hover:opacity-85 ${className}`.trim()}
    >
      Ver
    </a>
  );
}

type ProductImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  align?: Align;
  circleTheme: GalleryCircleTheme;
  viewHref?: string;
};

function GalleryProductImage({
  src,
  alt,
  width,
  height,
  align = "center",
  circleTheme,
  viewHref,
}: ProductImageProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <GalleryBackdrop
        align={align}
        circleTheme={circleTheme}
        footer={viewHref ? <GalleryViewButton href={viewHref} /> : null}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`mx-auto h-auto max-h-[min(380px,55vh)] w-full object-contain transition-transform duration-700 hover:scale-[1.02] ${IMAGE_SHADOW}`}
        />
      </GalleryBackdrop>
    </div>
  );
}

type PosterProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  align?: Align;
  maxWidthClass?: string;
};

function GalleryPoster({
  src,
  alt,
  width,
  height,
  align = "left",
  maxWidthClass = "max-w-xl",
}: PosterProps) {
  const itemsClass = align === "right" ? "items-end" : "items-start";

  return (
    <div className={`flex w-full flex-col p-3 sm:p-4 ${itemsClass}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`h-auto w-full ${maxWidthClass} object-contain object-center ${IMAGE_SHADOW}`}
      />
    </div>
  );
}

export function GallerySection() {
  const { id, title, posters, images, quote } = galleryContent;
  const [firstImage, secondImage, thirdImage] = images;

  return (
    <section
      id={id}
      aria-label={title}
      className="w-full overflow-x-clip py-stack-lg lg:py-28"
      style={{ backgroundColor: GALLERY_BG }}
    >
      <div className="mx-auto max-w-7xl px-gutter-lg">
        <Reveal className="mb-6 flex flex-col items-end justify-between gap-stack-sm md:mb-8 md:flex-row lg:mb-10">
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg md:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h2>
          </div>
          <div className="mx-8 mb-4 hidden h-px flex-grow bg-outline-variant/40 md:block" />
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
          <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
            <Reveal from="right">
              <GalleryPoster
                src={posters.smoothies.src}
                alt={posters.smoothies.alt}
                width={posters.smoothies.width}
                height={posters.smoothies.height}
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
                circleTheme={GALLERY_CIRCLE_THEMES.smoothies}
                viewHref={posters.smoothies.viewHref}
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
            <Reveal
              from="right"
              className="md:col-start-2 md:row-start-1"
            >
              <GalleryPoster
                src={posters.detox.src}
                alt={posters.detox.alt}
                width={posters.detox.width}
                height={posters.detox.height}
                maxWidthClass={posters.detox.maxWidthClass}
                align="right"
              />
            </Reveal>
            <Reveal
              from="left"
              delay={secondImage.delay}
              className="md:col-start-1 md:row-start-1"
            >
              <GalleryProductImage
                src={secondImage.src}
                alt={secondImage.alt}
                width={secondImage.width}
                height={secondImage.height}
                align="left"
                circleTheme={GALLERY_CIRCLE_THEMES.detox}
                viewHref={posters.detox.viewHref}
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-2 md:gap-4 lg:gap-5">
            <Reveal from="left" delay={thirdImage.delay}>
              <GalleryPoster
                src={posters.ensaladas.src}
                alt={posters.ensaladas.alt}
                width={posters.ensaladas.width}
                height={posters.ensaladas.height}
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
                circleTheme={GALLERY_CIRCLE_THEMES.ensaladas}
                viewHref={posters.ensaladas.viewHref}
              />
            </Reveal>
          </div>

          <Reveal
            className="flex items-center justify-center py-6 lg:py-10"
            delay={quote.delay}
            from="right"
          >
            <div className="max-w-4xl px-4 text-center">
              <p
                className="font-display-lg text-[1.875rem] leading-[1.15] tracking-tight sm:text-[2.5rem] lg:text-[3.25rem]"
                style={{ color: LOGO_PURPLE }}
              >
                {quote.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
