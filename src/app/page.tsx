"use client";

import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Zap,
  Target,
  TrendingUp,
  Shield,
  Users,
  Building,
  Sparkles,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Planning",
      description:
        "Transform your goals into actionable day-by-day roadmaps using advanced AI technology.",
      badge: "Core Feature",
      points: [
        "Personalized habit recommendations",
        "Adaptive milestone tracking",
        "Real-time plan optimization",
      ],
    },
    {
      icon: Target,
      title: "Goal Achievement System",
      description:
        "Structured approach to reaching your objectives with built-in accountability.",
      points: [
        "Progress visualization",
        "Achievement celebrations",
        "Motivation insights",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description:
        "Deep insights into your progress patterns and optimization opportunities.",
      points: [
        "Performance metrics",
        "Success pattern analysis",
        "Improvement suggestions",
      ],
    },
  ];

  const useCases = [
    {
      icon: Users,
      title: "Individual Goal-Setters",
      description:
        "Perfect for personal development, fitness goals, and life milestones.",
    },
    {
      icon: Building,
      title: "Teams & Organizations",
      description:
        "Scale goal-setting across departments with collaborative features.",
    },
    {
      icon: Shield,
      title: "Coaches & Mentors",
      description:
        "Support clients with structured guidance and progress tracking.",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        className="h-120"
        subtitle="Welcome to DREAM"
        title="Transform Goals into Reality"
        description="The AI-powered platform that turns your ambitions into achievable, day-by-day action plans. Join thousands who've already transformed their lives."
        primaryCta={{
          text: "Get Started for Free",
          href: "pricing",
        }}
        secondaryCta={{
          text: "Contact Sales",
          href: "contact",
        }}
      />

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-muted-foreground">Goals Achieved</p>
            </div>
            <div className="animate-fade-in [animation-delay:200ms]">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="animate-fade-in [animation-delay:400ms]">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                30 Days
              </div>
              <p className="text-muted-foreground">Average to Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <FeatureGrid
        title="Powerful Features for Success"
        subtitle="Everything you need to turn your dreams into actionable plans and measurable results."
        features={features}
      />

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-muted-foreground">
              From goal to achievement in three easy steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Define Your Goal",
                description:
                  "Tell us what you want to achieve and your preferences",
              },
              {
                step: "2",
                title: "Get Your Plan",
                description:
                  "Receive a personalized, day-by-day roadmap to success",
              },
              {
                step: "3",
                title: "Track Progress",
                description:
                  "Follow your plan and watch your dreams become reality",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="flex-col">
                  <div className="flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ">
                    {item.step}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              Who Benefits from DREAM?
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

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl">
            <CardContent className="p-8">
              <Sparkles className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
              <blockquote className="text-xl italic text-muted-foreground mb-6">
                &quot;DREAM transformed how I approach my goals. Instead of vague
                resolutions, I now have clear, actionable steps that actually
                work.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  SA
                </div>
                <div className="text-left">
                  <p className="font-semibold">Sarah Anderson</p>
                  <p className="text-sm text-muted-foreground">Entrepreneur</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Life?"
        description="Join thousands of successful goal-achievers who use DREAM to turn their ambitions into reality."
        primaryCta={{
          text: "Start Free Trial",
          href: "pricing",
        }}
        secondaryCta={{
          text: "View Plans",
          href: "pricing",
        }}
      />
    </PageLayout>
  );
};

export default Home;
