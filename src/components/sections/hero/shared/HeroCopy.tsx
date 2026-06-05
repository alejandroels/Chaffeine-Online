import Image from "next/image";
import { LOGO_PURPLE } from "../constants";
import { heroContent } from "../content";
import { ChaffeineWordmark } from "./ChaffeineWordmark";

type HeroCopyProps = {
  variant: "mobile" | "web";
};

export function HeroCopy({ variant }: HeroCopyProps) {
  const { eyebrow, title, description } = heroContent;
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
            ? "mb-4 block text-base font-medium uppercase leading-snug tracking-[0.22em] sm:mb-5 sm:text-lg sm:tracking-[0.26em]"
            : "mb-6 block text-lg font-medium uppercase tracking-[0.35em] lg:mb-8 lg:text-xl xl:text-2xl"
        }
        style={{ color: LOGO_PURPLE }}
      >
        {eyebrow}
      </span>

      <div
        className={
          isMobile
            ? "mb-5 flex w-full min-w-0 items-center gap-5 sm:mb-6 sm:gap-6"
            : "mb-10 flex w-full min-w-0 items-center gap-4 lg:mb-12 lg:gap-5 xl:gap-6"
        }
      >
        <span
          className={
            isMobile
              ? "relative block h-36 w-36 shrink-0 sm:h-40 sm:w-40"
              : "relative block h-36 w-36 shrink-0 lg:h-44 lg:w-44 xl:h-52 xl:w-52"
          }
        >
          <Image
            src="/logo.webp"
            alt=""
            fill
            priority
            sizes={
              isMobile
                ? "(max-width: 640px) 144px, 160px"
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
            ? "mb-5 ml-auto w-[88%] max-w-none text-right text-lg leading-relaxed text-on-surface-variant sm:mb-6 sm:w-[85%] sm:text-xl"
            : "mb-10 w-full max-w-none text-2xl leading-relaxed text-on-surface-variant lg:mb-12 lg:text-[1.75rem] xl:text-3xl"
        }
      >
        {description}
      </p>
    </div>
  );
}
