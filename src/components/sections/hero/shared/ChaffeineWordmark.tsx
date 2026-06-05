import { LOGO_PURPLE } from "../constants";

type ChaffeineWordmarkProps = {
  variant: "mobile" | "web";
};

export function ChaffeineWordmark({ variant }: ChaffeineWordmarkProps) {
  const isMobile = variant === "mobile";

  const tagClass = isMobile
    ? "text-[0.9rem] tracking-[0.24em] sm:text-[1rem]"
    : "text-[0.85rem] tracking-[0.26em] lg:text-base xl:text-lg";

  const mainClass = isMobile
    ? "text-[clamp(2.85rem,13.5vw,4.1rem)]"
    : "text-[clamp(3rem,5.5vw,5.25rem)]";

  return (
    <div
      className={
        isMobile
          ? "inline-grid w-full max-w-full grid-cols-[auto_auto] gap-x-2.5 font-label-md uppercase leading-[0.88] sm:gap-x-3"
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
        className={`self-start pt-1 font-semibold ${tagClass} ${
          isMobile ? "-ml-1 sm:-ml-1.5" : "-ml-1.5 lg:-ml-2 xl:-ml-2.5"
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
