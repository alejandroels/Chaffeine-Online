import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { Reveal } from "@/components/ui/Reveal";
import { specialtiesContent } from "./content";

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

        <div className="grid grid-cols-1 gap-gutter-sm md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Reveal
              key={item.name}
              delay={item.delay}
              className="flex flex-col justify-between border border-outline-variant bg-surface p-inset-container transition-colors duration-300 hover:border-primary"
            >
              <div>
                <MaterialIcon
                  name={item.icon}
                  className="mb-6 text-primary"
                  size={32}
                />
                <h3 className="mb-2 font-headline-md text-headline-md">
                  {item.name}
                </h3>
                <p className="mb-8 font-body-md text-body-md text-secondary">
                  {item.description}
                </p>
              </div>
              <div className="flex items-baseline justify-between border-t border-outline-variant/30 pt-4">
                <span className="font-label-md text-label-md text-primary">
                  {item.price}
                </span>
                <button
                  type="button"
                  className="text-on-surface transition-colors hover:text-primary"
                  aria-label={`Añadir ${item.name}`}
                >
                  <MaterialIcon name="add" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
