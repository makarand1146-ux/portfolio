import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  variant = "secondary",
  icon,
  external = false,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal";

  const variants = {
    primary: "bg-ink-text text-paper hover:bg-ink-text/85 dark:bg-paper-text dark:text-ink dark:hover:bg-paper-text/85",
    secondary:
      "border border-line-light text-ink-text hover:border-ink-text/40 dark:border-line-dark dark:text-paper-text dark:hover:border-paper-text/40",
    ghost: "text-ink-text-muted hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text",
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {icon}
    </Link>
  );
}
