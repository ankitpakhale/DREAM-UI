import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta?: {
    text: string;
    onClick?: () => void;
    href?: string;
  };
  variant?: "default" | "gradient" | "muted";
  className?: string;
}

const CTASection = ({
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = "gradient",
  className,
}: CTASectionProps) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-blue-600 to-purple-600 text-white";
      case "muted":
        return "bg-muted/30";
      default:
        return "bg-white dark:bg-gray-900";
    }
  };

  return (
    <section className={cn("py-16 px-4", getBackgroundClasses(), className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">{title}</h2>
        <p
          className={cn(
            "text-lg mb-8 animate-fade-in [animation-delay:200ms]",
            variant === "gradient" ? "opacity-90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
          <Button
            size="lg"
            variant={variant === "gradient" ? "secondary" : "primary"}
            className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={primaryCta.onClick}
          >
            <Link href={`/${primaryCta.href}`}>{primaryCta.text}</Link>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className="transform hover:scale-105 transition-all duration-300"
              onClick={secondaryCta.onClick}
            >
              <Link href={`/${secondaryCta.href}`}>{secondaryCta.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
