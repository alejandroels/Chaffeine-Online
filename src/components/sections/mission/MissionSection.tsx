import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { missionContent } from "./content";

export function MissionSection() {
  const { id, eyebrow, title, paragraphs, stats, image } = missionContent;

  return (
    <section
      id={id}
      aria-label={title}
      className="bg-on-surface py-stack-lg text-surface"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-gutter-lg px-gutter-lg lg:grid-cols-2">
        <Reveal>
          <span className="mb-6 block font-label-md text-label-md uppercase tracking-widest text-primary-container">
            {eyebrow}
          </span>
          <h2 className="mb-8 font-display-lg text-display-lg">{title}</h2>
          <div className="max-w-lg space-y-6">
            <p className="font-body-lg text-body-lg text-surface-container">
              {paragraphs[0]}
            </p>
            <p className="font-body-md text-body-md text-secondary-fixed">
              {paragraphs[1]}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="mb-2 font-headline-lg text-[40px] text-primary-container">
                  {stat.value}
                </p>
                <p className="font-label-md text-label-md uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative" delay={200}>
          <div className="aspect-square border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="h-full w-full object-cover brightness-75 grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
