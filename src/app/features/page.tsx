"use client";

import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Settings,
  Shield,
  Cloud,
  ArrowUp,
  ArrowDown,
  Users,
  Dumbbell,
  Building,
  CheckCircle,
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Content Generation",
      description:
        "GroqAI crafts fully personalized routines, habit checklists & milestone plans—no manual scripting required.",
      points: [
        "Saves hours of manual planning",
        "Adapts as you log progress",
        "Delivers scientifically backed techniques",
      ],
    },
    {
      icon: Settings,
      title: "Dynamic Route Management",
      description:
        "Auto-discovers and registers every endpoint in your codebase, so you never write boilerplate again.",
      points: [
        "Zero boilerplate",
        "Instant onboarding of new features",
        "Consistent route conventions",
      ],
    },
    {
      icon: Shield,
      title: "Robust Validation Layer",
      description:
        "Pydantic parsers and custom rules enforce structure, consistency & quality on every response.",
      points: [
        "Eliminates malformed outputs",
        "Centralized error handling",
        "Clear validation errors",
      ],
    },
    {
      icon: Cloud,
      title: "Real-Time Tracking & Analytics",
      description:
        "Monitor progress, completion rates, and success metrics with built-in logs and dashboards.",
      points: [
        "Instant visibility into engagement",
        "Data-driven plan adjustments",
        "Audit trails for compliance",
      ],
    },
    {
      icon: ArrowUp,
      title: "Scalable, Configurable Hosting",
      description:
        "Container-ready, environment-based configs support horizontal scaling and zero-downtime deploys.",
      points: [
        "Horizontal scaling in minutes",
        "CI/CD–friendly deployments",
        "Fine-grained config per environment",
      ],
    },
    {
      icon: ArrowDown,
      title: "Custom Logging & Retry Mechanism",
      description:
        "Built-in retries, exponential backoff & audit logs make external calls rock-solid and fully traceable.",
      points: [
        "Near-100% uptime for critical operations",
        "Detailed audit logs for debugging",
        "Configurable retry policies per endpoint",
      ],
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "Content Creators",
      description:
        "Auto-generate writing schedules, track daily word counts, and hit publishing milestones.",
    },
    {
      icon: Dumbbell,
      title: "Fitness Enthusiasts",
      description:
        "Build adaptive workout plans that scale as you get stronger.",
    },
    {
      icon: Building,
      title: "Corporate Teams",
      description:
        "Integrate habit-building into your L&D platform with a single API call.",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Powerful Features"
        title="Deeply Powerful, Painstakingly Simple"
        description="Explore the core capabilities that make DREAM the go-to engine for AI-driven life planning."
        primaryCta={{
          text: "Get Started for Free",
          href: "pricing",
        }}
        secondaryCta={{
          text: "Contact Sales",
          href: "contact",
        }}
      />

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6">
            Why DREAM?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From seamless API integration to adaptive habit-tracking, DREAM
            brings together every tool you need to go from goal-setting to
            goal-getting—without wasted effort or guesswork.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <FeatureGrid
        title="Core Features"
        subtitle="Everything you need to transform goals into reality"
        features={coreFeatures}
        columns={3}
      />

      {/* Technical Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              Under the Hood
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              DREAM-Core's dynamic route manager, Pydantic validators, and
              custom retry logic all work together to ensure your plans are
              generated reliably, validated thoroughly, and served at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Content Generation
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI engine ingests your goals and spits out a day-by-day
                blueprint—complete with habit checklists, milestone markers, and
                motivational prompts.
              </p>
              <div className="space-y-3">
                {[
                  "Saves hours of manual planning",
                  "Adapts as you log progress",
                  "Delivers scientifically backed habit-change techniques",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardHeader className="flex-col">
                <CardTitle className="text-sm">Sample JSON Response</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs text-muted-foreground overflow-x-auto">
                  {`{
  "plan": {
    "day_1": {
      "tasks": ["Write 500 words", "Review outline"],
      "habits": ["Morning writing routine"]
    }
  }
}`}
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              Real-World Applications
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="flex-col">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg w-fit mx-auto mb-4">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Tap into DREAM's Full Potential?"
        description="Sign up now and explore every feature—risk free for 14 days."
        primaryCta={{
          text: "Start 14-Day Free Trial",
          href: "pricing",
        }}
        secondaryCta={{
          text: "View Pricing Comparison",
          href: "pricing",
        }}
      />
    </PageLayout>
  );
};

export default Features;
