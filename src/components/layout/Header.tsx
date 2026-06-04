import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/navigation";

/** Altura del navbar para calc(100dvh - var) en el hero */
export const HEADER_HEIGHT = "4.5rem";

export function Header() {
  return (
    <header className="w-full border-b border-primary-container bg-primary">
      <nav className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-gutter-lg">
        <Link
          href="#hero"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
        >
          <span className="relative block h-12 w-12 shrink-0 md:h-14 md:w-14">
            <Image
              src="/logo.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 48px, 56px"
              aria-hidden
              className="object-contain"
            />
          </span>
          <span className="font-headline-md text-headline-md leading-none tracking-tighter text-on-primary">
            Chaffeine
          </span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-label-md text-label-md uppercase tracking-widest transition-colors duration-300 ease-in-out ${
                "active" in link && link.active
                  ? "border-b-2 border-on-primary pb-1 text-on-primary"
                  : "text-on-primary/70 hover:text-on-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="bg-on-primary px-6 py-2 font-label-md text-label-md uppercase tracking-widest text-primary transition-opacity duration-300 ease-in-out hover:opacity-80"
        >
          Order Now
        </button>
      </nav>
    </header>
  );
}
