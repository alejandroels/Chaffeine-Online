import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { visitUsContent } from "./content";

export function VisitUsSection() {
  const { id, title, location, schedule, contact, map } = visitUsContent;

  const infoBlocks = [location, schedule, contact];

  return (
    <section id={id} aria-label={title} className="bg-surface py-stack-lg">
      <div className="mx-auto max-w-7xl px-gutter-lg">
        <div className="grid grid-cols-1 gap-gutter-lg lg:grid-cols-3">
          <Reveal className="col-span-1">
            <h2 className="mb-8 font-headline-lg text-headline-lg">{title}</h2>
            <div className="space-y-10">
              {infoBlocks.map((block) => (
                <div key={block.label}>
                  <h4 className="mb-4 font-label-md text-label-md uppercase tracking-widest text-primary">
                    {block.label}
                  </h4>
                  <p className="font-body-md text-body-md">
                    {block.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="col-span-1 lg:col-span-2" delay={200}>
            <div className="group relative min-h-[400px] overflow-hidden border border-outline-variant bg-surface-container-high">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 contrast-125 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                style={{ backgroundImage: `url('${map.image}')` }}
              />
              <div className="pointer-events-none absolute inset-0 bg-primary/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full bg-primary text-white shadow-2xl">
                  <MaterialIcon name="location_on" className="text-white" />
                </div>
              </div>
              <div className="absolute right-6 bottom-6 border border-outline-variant bg-surface p-4 shadow-sm">
                <p className="font-label-md text-label-md">{map.badge}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
