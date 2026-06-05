import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border border-on-primary/15 bg-primary px-8 py-3 font-label-md text-label-md uppercase tracking-[0.18em] text-on-primary shadow-[0_4px_18px_rgba(177,148,195,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(177,148,195,0.45)] active:translate-y-0 active:shadow-[0_3px_12px_rgba(177,148,195,0.3)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-[0_4px_18px_rgba(177,148,195,0.35)]";

type PrimaryActionButtonProps = {
  children: ReactNode;
  className?: string;
};

export function PrimaryActionButton({
  children,
  className = "",
  ...props
}: PrimaryActionButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`${baseClassName} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export function PrimaryActionLink({
  children,
  className = "",
  ...props
}: PrimaryActionButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${baseClassName} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
