import Image from "next/image";
import { heroContent } from "../content";

type HeroCopyProps = {
  variant: "mobile" | "web";
};

export function HeroCopy({ variant }: HeroCopyProps) {
  const { eyebrow, title, description, secondaryCta } = heroContent;
  const isMobile = variant === "mobile";

  return (
    <div
      className={
        isMobile ? "w-full max-w-lg" : "w-full max-w-2xl"
      }
    >
      <span
        className={
          isMobile
            ? "mb-2 block text-sm font-medium uppercase tracking-widest text-primary sm:mb-3 sm:text-base"
            : "mb-5 block text-base font-medium uppercase tracking-widest text-primary lg:mb-6 lg:text-lg"
        }
      >
        {eyebrow}
      </span>

      <div
        className={
          isMobile
            ? "mb-3 flex items-center gap-4 sm:mb-4 sm:gap-5"
            : "mb-8 flex items-center gap-6 lg:mb-10 lg:gap-8"
        }
      >
        <span
          className={
            isMobile
              ? "relative block h-24 w-24 shrink-0 sm:h-28 sm:w-28"
              : "relative block h-32 w-32 shrink-0 lg:h-40 lg:w-40"
          }
        >
          <Image
            src="/logo.png"
            alt=""
            fill
            priority
            sizes={
              isMobile
                ? "(max-width: 640px) 96px, 112px"
                : "(max-width: 1024px) 128px, 160px"
            }
            aria-hidden
            className="object-contain"
          />
        </span>
        <h1
          className={
            isMobile
              ? "font-display-lg text-[2rem] leading-[1.05] text-on-surface sm:text-[2.5rem]"
              : "font-display-lg text-[3.25rem] leading-[1.05] text-on-surface lg:text-[4rem]"
          }
        >
          {title}
        </h1>
      </div>

      <p
        className={
          isMobile
            ? "mb-5 max-w-md text-base leading-relaxed text-on-surface-variant sm:mb-6 sm:text-lg"
            : "mb-10 max-w-lg text-xl leading-relaxed text-on-surface-variant lg:mb-12 lg:text-[1.35rem]"
        }
      >
        {description}
      </p>

      <a
        href={secondaryCta.href}
        className={
          isMobile
            ? "w-fit border-b border-on-surface py-1 text-sm font-semibold uppercase tracking-widest text-on-surface transition-all hover:border-primary hover:text-primary sm:text-base"
            : "w-fit border-b-2 border-on-surface py-1 text-base font-semibold uppercase tracking-widest text-on-surface transition-all hover:border-primary hover:text-primary lg:text-lg"
        }
      >
        {secondaryCta.label}
      </a>
    </div>
  );
}
