"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const accentBorder: Record<Project["accent"], string> = {
  signal: "group-hover:border-signal/50",
  amber: "group-hover:border-amber/50",
  neutral: "group-hover:border-ink-text/30 dark:group-hover:border-paper-text/30",
};

const accentDot: Record<Project["accent"], string> = {
  signal: "bg-signal",
  amber: "bg-amber",
  neutral: "bg-ink-text-muted dark:bg-paper-text-muted",
};

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border border-line-light bg-paper-raised p-7 transition-all duration-300",
        "dark:border-line-dark dark:bg-ink-raised",
        accentBorder[project.accent]
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className={cn("h-1.5 w-1.5 rounded-full", accentDot[project.accent])} />
          <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink-text-muted dark:text-paper-text-muted">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source on GitHub`}
            className="text-ink-text-muted transition-colors hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text"
          >
            <Github size={18} strokeWidth={1.75} />
          </Link>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="text-ink-text-muted transition-colors hover:text-ink-text dark:text-paper-text-muted dark:hover:text-paper-text"
            >
              <ArrowUpRight size={18} strokeWidth={1.75} />
            </Link>
          ) : null}
        </div>
      </div>

      <h3 className="mt-5 font-display text-xl font-medium tracking-tightest text-ink-text dark:text-paper-text">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-text-muted dark:text-paper-text-muted">
        {project.summary}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-4 self-start font-mono text-xs text-signal underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
      >
        {expanded ? "Hide details" : "View details"}
      </button>

      {expanded ? (
        <div className="mt-5 border-t border-line-light pt-5 dark:border-line-dark">
          <p className="text-sm leading-relaxed text-ink-text-muted dark:text-paper-text-muted">
            {project.description}
          </p>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-widest2 text-ink-text-muted dark:text-paper-text-muted">
            Key outcomes
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-2.5 text-sm leading-relaxed text-ink-text-muted dark:text-paper-text-muted"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-text-muted/60 dark:bg-paper-text-muted/60" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap gap-2 border-t border-line-light pt-5 dark:border-line-dark">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
