import { LOGO_PURPLE } from "../constants";

type ChaffeineWordmarkProps = {
  variant: "mobile" | "web";
};

export function ChaffeineWordmark({ variant }: ChaffeineWordmarkProps) {
  const isMobile = variant === "mobile";

  const tagClass = isMobile
    ? "text-[0.65rem] tracking-[0.14em] sm:text-[0.75rem] sm:tracking-[0.18em]"
    : "text-[0.85rem] tracking-[0.26em] lg:text-base xl:text-lg";

  const mainClass = isMobile
    ? "text-[clamp(1.85rem,9.5vw,2.85rem)] sm:text-[clamp(2.35rem,11vw,3.35rem)]"
    : "text-[clamp(3rem,5.5vw,5.25rem)]";

  return (
    <div
      className={
        isMobile
          ? "inline-grid w-full max-w-full grid-cols-[auto_auto] gap-x-1.5 font-label-md uppercase leading-[0.88] sm:gap-x-2.5"
          : "inline-grid grid-cols-[auto_auto] gap-x-1.5 font-label-md uppercase leading-[0.88] lg:gap-x-2 xl:gap-x-2.5"
      }
      aria-label="Chaffeine Coffee Online"
    >
      <span
        className={`col-span-2 mb-1 font-medium ${tagClass}`}
        style={{ color: LOGO_PURPLE }}
      >
        COFFEE
      </span>
      <span
        className={`font-semibold ${mainClass}`}
        style={{ color: LOGO_PURPLE }}
      >
        CHA
      </span>
      <span
        className={`self-start pt-0.5 font-semibold ${tagClass} ${
          isMobile ? "-ml-2 sm:-ml-3" : "-ml-2 lg:-ml-3 xl:-ml-4"
        }`}
        style={{ color: LOGO_PURPLE }}
      >
        ONLINE
      </span>
      <span
        className={`-mt-1 font-semibold ${mainClass}`}
        style={{ color: LOGO_PURPLE }}
      >
        FFEINE
      </span>
    </div>
  );
}
