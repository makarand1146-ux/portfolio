import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line-light dark:border-line-dark">
      <Container className="flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-ink-text-muted dark:text-paper-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built from scratch, not a template.
        </p>
        <div className="flex gap-6">
          <Link
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-text-muted transition-colors hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text"
          >
            GitHub
          </Link>
          <Link
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-ink-text-muted transition-colors hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text"
          >
            LinkedIn
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="text-xs text-ink-text-muted transition-colors hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
}
