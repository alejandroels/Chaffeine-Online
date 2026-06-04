type ChaffeineWordmarkProps = {
  variant: "mobile" | "web";
};

const WORDMARK_MAIN = "#5a4570";
const WORDMARK_ACCENT = "#4d6345";

export function ChaffeineWordmark({ variant }: ChaffeineWordmarkProps) {
  const isMobile = variant === "mobile";

  const tagClass = isMobile
    ? "text-[0.75rem] tracking-[0.28em] sm:text-[0.85rem]"
    : "text-[0.85rem] tracking-[0.32em] lg:text-base xl:text-lg";

  const mainClass = isMobile
    ? "text-[clamp(2.35rem,11vw,3.35rem)]"
    : "text-[clamp(3rem,5.5vw,5.25rem)]";

  return (
    <div
      className={
        isMobile
          ? "inline-grid w-full max-w-full grid-cols-[auto_auto] gap-x-2.5 font-label-md uppercase leading-[0.88] sm:gap-x-3"
          : "inline-grid grid-cols-[auto_auto] gap-x-3 font-label-md uppercase leading-[0.88] lg:gap-x-4 xl:gap-x-5"
      }
      aria-label="Chaffeine Coffee Online"
    >
      <span
        className={`col-span-2 mb-1 font-medium ${tagClass}`}
        style={{ color: WORDMARK_ACCENT }}
      >
        COFFEE
      </span>
      <span
        className={`font-semibold ${mainClass}`}
        style={{ color: WORDMARK_MAIN }}
      >
        CHA
      </span>
      <span
        className={`self-start pt-1 font-semibold ${tagClass}`}
        style={{ color: WORDMARK_ACCENT }}
      >
        ONLINE
      </span>
      <span
        className={`-mt-1 font-semibold ${mainClass}`}
        style={{ color: WORDMARK_MAIN }}
      >
        FFEINE
      </span>
    </div>
  );
}
