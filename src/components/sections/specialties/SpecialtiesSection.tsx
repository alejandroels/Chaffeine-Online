import { Reveal } from "@/components/ui/Reveal";
import { specialtiesContent } from "./content";
import { SpecialtyCard } from "./SpecialtyCard";

export function SpecialtiesSection() {
  const { id, title, items } = specialtiesContent;
  const isFiveCards = items.length === 5;

  return (
    <section
      id={id}
      aria-label={title}
      className="overflow-x-clip bg-surface-container-low py-stack-lg"
    >
      <div className="mx-auto max-w-7xl px-gutter-sm sm:px-gutter-md lg:px-gutter-lg">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-stack-sm sm:mb-12 md:mb-16 md:flex-row md:items-end">
          <div>
            <h2 className="mb-4 font-headline-lg text-headline-lg md:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h2>
          </div>
          <div className="mx-8 mb-4 hidden h-px flex-grow bg-outline-variant md:block" />
        </Reveal>

        <div className="grid grid-cols-1 gap-gutter-sm sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center lg:gap-gutter-md">
          {items.map((item, index) => (
            <Reveal
              key={item.id}
              delay={item.delay}
              from="up"
              className={`lg:w-[300px] ${
                isFiveCards && index === items.length - 1
                  ? "sm:col-span-2 sm:flex sm:justify-center"
                  : ""
              }`}
            >
              <SpecialtyCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
