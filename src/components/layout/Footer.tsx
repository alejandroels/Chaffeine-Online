import { SocialLinks } from "@/components/ui/SocialLinks";
import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="w-full overflow-x-clip border-t border-outline-variant bg-surface-container-lowest py-stack-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-stack-md px-gutter-sm sm:px-gutter-md lg:gap-stack-sm lg:px-gutter-lg">
        <div className="font-headline-md text-headline-md text-on-surface">
          Chaffeine
        </div>

        <div className="w-full border-y border-outline-variant/30 py-stack-sm sm:py-stack-md">
          <SocialLinks className="mx-auto w-full max-w-2xl" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body-md text-body-md text-on-tertiary-fixed-variant transition-all duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-center font-body-md text-body-md text-on-tertiary-fixed-variant opacity-70">
          © 2024 Chaffeine Online Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
