import Image from "next/image";
import Link from "next/link";
import { CartHeaderButton } from "@/components/cart/CartHeaderButton";
import { navLinks } from "@/lib/navigation";

/** Altura del navbar para calc(100dvh - var) en el hero */
export const HEADER_HEIGHT = "4.5rem";

export function Header() {
  return (
    <header className="w-full border-b border-white/15 bg-[#907C75]">
      <nav className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-gutter-lg">
        <Link
          href="#hero"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
        >
          <span className="relative block h-12 w-12 shrink-0 md:h-14 md:w-14">
            <Image
              src="/logo.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 48px, 56px"
              aria-hidden
              className="object-contain"
            />
          </span>
          <span className="font-headline-md text-headline-md leading-none tracking-tighter text-white">
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
                  ? "border-b-2 border-white pb-1 text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <CartHeaderButton />
      </nav>
    </header>
  );
}
