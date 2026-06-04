import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { galleryContent } from "./content";

export function GallerySection() {
  const { id, images, quote } = galleryContent;
  const [firstImage, secondImage, thirdImage] = images;

  return (
    <section
      id={id}
      aria-label="Galería"
      className="mx-auto max-w-7xl overflow-hidden px-gutter-lg py-stack-lg"
    >
      <div className="grid grid-cols-12 items-start gap-8">
        <Reveal className="col-span-12 md:col-span-5">
          <div className="aspect-[0.87] overflow-hidden bg-surface-container">
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              width={firstImage.width}
              height={firstImage.height}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {firstImage.caption && (
            <div className="mt-8">
              <h4 className="mb-2 font-label-md text-label-md uppercase tracking-widest">
                {firstImage.caption.title}
              </h4>
              <p className="font-body-md text-body-md text-secondary">
                {firstImage.caption.description}
              </p>
            </div>
          )}
        </Reveal>

        <Reveal
          className="col-span-12 md:col-span-7 md:mt-32"
          delay={secondImage.delay}
        >
          <div className="ml-auto aspect-[0.81] max-w-lg overflow-hidden bg-surface-container">
            <Image
              src={secondImage.src}
              alt={secondImage.alt}
              width={secondImage.width}
              height={secondImage.height}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal
          className="col-span-12 md:col-span-6 md:-mt-24"
          delay={thirdImage.delay}
        >
          <div className="aspect-[0.84] max-w-md overflow-hidden bg-surface-container">
            <Image
              src={thirdImage.src}
              alt={thirdImage.alt}
              width={thirdImage.width}
              height={thirdImage.height}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>

        <Reveal
          className="col-span-12 flex items-center justify-center p-12 md:col-span-6"
          delay={quote.delay}
        >
          <div className="text-center">
            <p className="mb-6 font-display-lg text-[48px] leading-tight italic">
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
              — {quote.author}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
