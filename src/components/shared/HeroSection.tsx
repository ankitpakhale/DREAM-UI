"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  children?: ReactNode;
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children,
  className,
}: HeroSectionProps) => {
  return (
    <section
      className={cn(
        "py-20 px-4 text-center relative overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0"></div>
      <div className="max-w-4xl mx-auto relative">
        {subtitle && (
          <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4 animate-fade-in">
            {subtitle}
          </p>
        )}
        {/* <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-teal-500 to-cyan-300 dark:from-cyan-300 dark:via-teal-600 dark:to-orange-400 bg-clip-text text-transparent mb-6 animate-fade-in [animation-delay:200ms]">
          {title}
        </h1> */}
        <h1
          className="
    /* Light mode gradient text (orange → teal → cyan) */
    bg-clip-text text-transparent
    bg-gradient-to-r from-orange-400 via-teal-500 to-cyan-300

    /* Dark mode gradient text (fuchsia → lime → sky) */
    dark:bg-clip-text dark:text-transparent
    dark:bg-gradient-to-r dark:from-fuchsia-400 dark:via-lime-400 dark:to-sky-400

    /* Font styling */
    text-5xl md:text-6xl font-bold

    /* Optional spacing */
    my-4
  "
        >
          {title}
        </h1>
        {description && (
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            {description}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
            {primaryCta && (
              <Button size="md" variant="primary" onClick={primaryCta.onClick}>
                <Link href={`/${primaryCta.href}`}>{primaryCta.text}</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="md"
                variant="outline"
                onClick={secondaryCta.onClick}
              >
                <Link href={`/${secondaryCta.href}`}>{secondaryCta.text}</Link>
              </Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
