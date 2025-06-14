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
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Users, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "AI-Driven Personal Roadmaps",
      description:
        "A fully managed service that transforms your ambitions into day-by-day blueprints.",
      badge: "Popular",
      points: [
        "Custom goal intake & parameter tuning",
        "AI generation via GroqAI with Pydantic validation",
        "Habit-tracking checklists and milestone markers",
        "Real-time plan refinement as you log progress",
      ],
    },
    {
      icon: Code,
      title: "Self-Serve API Access",
      description:
        "Direct, programmatic access to DREAM-Core's endpoints for your own apps and workflows.",
      points: [
        "REST endpoints: /dreamlife, /progress, /healthcheck",
        "Postman collection & code samples in Python, JavaScript, Ruby",
        "Dynamic route management via RouteManager",
        "Built-in logging, retry logic, and schema validation",
      ],
    },
    {
      icon: Users,
      title: "Custom Integrations & White-Labeling",
      description:
        "End-to-end integration support and branding customization for seamless platform integration.",
      points: [
        "API design review & SDK development (optional)",
        "Frontend customization: UI theming, embedding dashboards",
        "Dedicated integration engineer and SLA",
        "Training sessions & developer onboarding",
      ],
    },
    {
      icon: Zap,
      title: "Enterprise Success Package",
      description:
        "Premium offering with everything included plus advanced analytics and priority support.",
      badge: "Premium",
      points: [
        "Unlimited API calls",
        "Dedicated Customer Success Manager",
        "Tailored analytics dashboards & BI exports",
        "24/7 uptime monitoring and guaranteed SLAs",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Our Services"
        title="Expert Services to Power Your Journey"
        description="Whether you're an individual goal-setter or an enterprise partner, we have the perfect service for your needs."
        primaryCta={{
          text: "Get Started for Free",
          href: "pricing",
        }}
        secondaryCta={{
          text: "Contact Sales",
          href: "contact",
        }}
      />

      {/* Services Grid */}
      <FeatureGrid
        title="Choose Your Service Level"
        subtitle="From individual users to enterprise customers, we have solutions that scale with your needs."
        features={services}
        columns={2}
        className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
      />

      {/* Service Details Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              Service Highlights
            </h2>
            <p className="text-lg text-muted-foreground">
              What makes our services stand out from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Individual Goal-Setters
              </h3>
              <p className="text-muted-foreground mb-6">
                Perfect for personal development, fitness goals, and life
                milestones. Get started with our AI-driven personal roadmaps
                service.
              </p>
              <div className="space-y-3">
                {[
                  "Turnkey life-planning without coding",
                  "AI-powered goal breakdown",
                  "Progress tracking and optimization",
                  "Habit formation support",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="font-semibold mb-2">Set Your Goal</h4>
                  <p className="text-sm text-muted-foreground">
                    Tell us what you want to achieve
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0 md:order-1">
              <CardContent className="p-8">
                <div className="text-center">
                  <Code className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">API Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration with your existing systems
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="md:order-0">
              <h3 className="text-2xl font-bold mb-4">Developers & Teams</h3>
              <p className="text-muted-foreground mb-6">
                Build goal-setting features into your applications with our
                robust API and development tools.
              </p>
              <div className="space-y-3">
                {[
                  "RESTful API with comprehensive documentation",
                  "SDK support for multiple languages",
                  "Webhook integrations",
                  "Developer-friendly tools and samples",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Choose the service that fits your needs or speak to our team for a custom solution."
        primaryCta={{
          text: "View Pricing Plans",
          href: "pricing",
        }}
        secondaryCta={{
          text: "Contact Sales",
          href: "contact",
        }}
      />
    </PageLayout>
  );
};

export default Services;
