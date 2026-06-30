import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-light bg-paper/80 backdrop-blur-md dark:border-line-dark dark:bg-ink/80">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="#top"
            className="font-mono text-sm font-medium tracking-wide text-ink-text dark:text-paper-text"
          >
            {profile.initials}
            <span className="text-ink-text-muted dark:text-paper-text-muted">/dhepe</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-text-muted transition-colors hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href={profile.resumeUrl}
              className="hidden text-sm font-medium text-signal hover:underline underline-offset-4 sm:inline"
            >
              Résumé
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
