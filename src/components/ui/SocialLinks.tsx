import Image from "next/image";
import { socialLinks } from "@/lib/social";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  showHeading?: boolean;
  headingClassName?: string;
};

export function SocialLinks({
  className = "",
  iconClassName = "",
  showHeading = true,
  headingClassName = "",
}: SocialLinksProps) {
  return (
    <div
      className={`flex w-full max-w-full flex-col items-center gap-5 px-gutter-sm sm:gap-6 sm:px-0 ${className}`.trim()}
    >
      {showHeading ? (
        <p
          className={`text-center font-label-md text-label-md uppercase tracking-widest text-primary ${headingClassName}`.trim()}
        >
          Síguenos en
        </p>
      ) : null}

      <div className="grid w-full max-w-md grid-cols-3 gap-3 sm:max-w-lg sm:gap-5 md:max-w-xl">
        {socialLinks.map(({ href, label, network, iconSrc }) => (
          <a
            key={network}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group flex min-w-0 flex-col items-center gap-2 text-center transition-transform duration-300 hover:scale-105 sm:gap-2.5 ${iconClassName}`.trim()}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center sm:h-14 sm:w-14">
              <Image
                src={iconSrc}
                alt=""
                width={56}
                height={56}
                aria-hidden
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-label-sm text-[0.7rem] uppercase tracking-widest text-on-tertiary-fixed-variant transition-colors group-hover:text-primary sm:text-label-sm">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
