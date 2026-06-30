"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data";

const headlineWords = profile.headline.split(" ");

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-16 md:pt-28 md:pb-20">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest2 text-signal"
        >
          {profile.name} · IIT Ropar · Mechanical Engineering
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.12] tracking-tightest text-ink-text dark:text-paper-text md:text-5xl lg:text-6xl"
        >
          {headlineWords.map((w, i) => (
            <motion.span key={`${w}-${i}`} variants={word} className="mr-[0.28em] inline-block">
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-text-muted dark:text-paper-text-muted md:text-lg"
        >
          {profile.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button href={profile.resumeUrl} variant="primary" icon={<ArrowUpRight size={15} />}>
            Download Résumé
          </Button>
          <Button href={profile.githubUrl} external icon={<Github size={15} />}>
            GitHub
          </Button>
          <Button href={profile.linkedinUrl} external icon={<Linkedin size={15} />}>
            LinkedIn
          </Button>
          <Button href="#contact" variant="ghost">
            Get in touch →
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
