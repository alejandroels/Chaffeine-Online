import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { visitUsContent } from "./content";

export function VisitUsSection() {
  const { id, title, schedule, service, contact, logo } = visitUsContent;

  const infoBlocks = [schedule, service, contact];

  return (
    <section id={id} aria-label={title} className="bg-surface py-stack-lg">
      <div className="mx-auto max-w-7xl px-gutter-lg">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-gutter-lg">
          <Reveal>
            <h2 className="mb-8 font-headline-lg text-headline-lg">{title}</h2>
            <div className="grid max-w-3xl gap-10 sm:grid-cols-3">
              {infoBlocks.map((block) => (
                <div key={block.label}>
                  <h4 className="mb-4 font-label-md text-label-md uppercase tracking-widest text-primary">
                    {block.label}
                  </h4>
                  <p className="font-body-md text-body-md">
                    {block.lines.map((line) => (
                      <span key={line} className="block">
                        {"phone" in block ? (
                          <a
                            href={`tel:${block.phone}`}
                            className="transition-colors hover:text-primary"
                          >
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="mb-4 font-label-md text-label-md uppercase tracking-widest text-primary">
                Redes Sociales
              </h4>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal className="flex justify-center lg:justify-end" delay={200}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto w-full max-w-md object-contain lg:max-w-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
