import { Reveal } from "@/components/ui/Reveal";
import { specialtiesContent } from "./content";
import { SpecialtyCard } from "./SpecialtyCard";

export function SpecialtiesSection() {
  const { id, title, description, items } = specialtiesContent;

  return (
    <section id={id} aria-label={title} className="bg-surface-container-low py-stack-lg">
      <div className="mx-auto max-w-7xl px-gutter-lg">
        <Reveal className="mb-16 flex flex-col items-end justify-between gap-stack-sm md:flex-row">
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg">{title}</h2>
            <p className="max-w-md font-body-md text-body-md text-secondary">
              {description}
            </p>
          </div>
          <div className="mx-8 mb-4 hidden h-px flex-grow bg-outline-variant md:block" />
        </Reveal>

        <div
          className="grid grid-cols-1 gap-gutter-sm sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-gutter-md"
        >
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={item.delay}
              from="up"
              className="lg:w-[300px]"
            >
              <SpecialtyCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
