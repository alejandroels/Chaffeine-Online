import { footerLinks } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest py-stack-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-stack-sm px-gutter-lg md:flex-row">
        <div className="font-headline-md text-headline-md text-on-surface">
          Chaffeine
        </div>

        <div className="flex gap-8">
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

        <div className="font-body-md text-body-md text-on-tertiary-fixed-variant opacity-70">
          © 2024 Chaffeine Artisanal Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
