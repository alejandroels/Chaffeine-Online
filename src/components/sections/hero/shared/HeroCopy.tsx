import Image from "next/image";
import { heroContent } from "../content";
import { ChaffeineWordmark } from "./ChaffeineWordmark";

type HeroCopyProps = {
  variant: "mobile" | "web";
};

export function HeroCopy({ variant }: HeroCopyProps) {
  const { eyebrow, title, description, secondaryCta } = heroContent;
  const isMobile = variant === "mobile";

  return (
    <div
      className={
        isMobile
          ? "flex w-full min-w-0 flex-1 flex-col"
          : "flex h-full w-full min-w-0 flex-1 flex-col justify-center"
      }
    >
      <span
        className={
          isMobile
            ? "mb-3 block text-base font-medium uppercase tracking-[0.3em] text-primary sm:mb-4 sm:text-lg"
            : "mb-6 block text-lg font-medium uppercase tracking-[0.35em] text-primary lg:mb-8 lg:text-xl xl:text-2xl"
        }
      >
        {eyebrow}
      </span>

      <div
        className={
          isMobile
            ? "mb-4 flex w-full min-w-0 items-center gap-5 sm:mb-5 sm:gap-6"
            : "mb-10 flex w-full min-w-0 items-center gap-8 lg:mb-12 lg:gap-10 xl:gap-12"
        }
      >
        <span
          className={
            isMobile
              ? "relative block h-28 w-28 shrink-0 sm:h-32 sm:w-32"
              : "relative block h-36 w-36 shrink-0 lg:h-44 lg:w-44 xl:h-52 xl:w-52"
          }
        >
          <Image
            src="/logo.png"
            alt=""
            fill
            priority
            sizes={
              isMobile
                ? "(max-width: 640px) 112px, 128px"
                : "(max-width: 1280px) 176px, 208px"
            }
            aria-hidden
            className="object-contain"
          />
        </span>
        <div className="min-w-0 flex-1">
          <ChaffeineWordmark variant={variant} />
          <h1 className="sr-only">{title}</h1>
        </div>
      </div>

      <p
        className={
          isMobile
            ? "mb-5 w-full max-w-none text-lg leading-relaxed text-on-surface-variant sm:mb-6 sm:text-xl"
            : "mb-10 w-full max-w-none text-2xl leading-relaxed text-on-surface-variant lg:mb-12 lg:text-[1.75rem] xl:text-3xl"
        }
      >
        {description}
      </p>

      <a
        href={secondaryCta.href}
        className={
          isMobile
            ? "w-fit border-b border-on-surface py-1 text-base font-semibold uppercase tracking-widest text-on-surface transition-all hover:border-primary hover:text-primary sm:text-lg"
            : "w-fit border-b-2 border-on-surface py-1 text-lg font-semibold uppercase tracking-widest text-on-surface transition-all hover:border-primary hover:text-primary lg:text-xl"
        }
      >
        {secondaryCta.label}
      </a>
    </div>
  );
}
