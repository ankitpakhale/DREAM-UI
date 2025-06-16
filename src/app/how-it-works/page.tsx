"use client";

import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import CTASection from "@/components/shared/CTASection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  CheckCircle,
  TrendingUp,
  Settings,
  Shield,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const HowItWorks = () => {
  const [goalInput, setGoalInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [samplePlan, setSamplePlan] = useState<any>(null);

  const handleGenerateSample = async () => {
    if (!goalInput.trim()) return;

    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setSamplePlan({
        goal: goalInput,
        duration: "30 days",
        daily_tasks: [
          { day: 1, task: "Define your writing schedule", completed: false },
          { day: 2, task: "Create your workspace", completed: false },
          { day: 3, task: "Write 500 words", completed: false },
        ],
        milestones: [
          { week: 1, milestone: "Complete outline" },
          { week: 2, milestone: "Write first chapter" },
        ],
      });
      setIsGenerating(false);
    }, 2000);
  };

  const steps = [
    {
      number: "1",
      title: "Define Your Dream",
      description: "Tell us your goal through our web UI or API",
      icon: Target,
      points: [
        "Free-form text input or structured form",
        "Optional parameters: timeframe, preferred routines, intensity level",
      ],
    },
    {
      number: "2",
      title: "Receive Your Plan",
      description: "Get your customized roadmap in seconds",
      icon: CheckCircle,
      points: [
        "Day-by-day tasks, habit prompts & progress nudges",
        "Built-in validation ensures every step is clear and actionable",
      ],
    },
    {
      number: "3",
      title: "Track & Optimize",
      description: "Log progress and watch your plan evolve",
      icon: TrendingUp,
      points: [
        "Real-time habit analytics",
        "Automated plan refinement",
        "Alerts for missed milestones & catch-up suggestions",
      ],
    },
  ];

  const techFeatures = [
    {
      title: "RouteManager",
      description: "Auto-registers new plan endpoints",
      icon: Settings,
    },
    {
      title: "PydanticOutputParser",
      description: "Validates AI outputs against your schema",
      icon: Shield,
    },
    {
      title: "Retry Mechanism",
      description: "Guarantees delivery even under API errors",
      icon: RotateCcw,
    },
  ];

  const faqs = [
    {
      question: "How long does plan generation take?",
      answer: "Most plans are ready in under 5 seconds.",
    },
    {
      question: "Can I customize the schedule?",
      answer:
        "Absolutely—specify days off, preferred workout times, reading slots, and more.",
    },
    {
      question: "What if I fall behind?",
      answer:
        "DREAM detects missed tasks and rebalances your upcoming milestones automatically.",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        subtitle="How It Works"
        title="Transform Goals into Action in 3 Simple Steps"
        description="From setting your dream to tracking progress, DREAM's AI-engine handles every step so you can focus on winning."
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
            A Clear Path, Powered by AI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You already know what you want—DREAM figures out how to get you
            there. In under five minutes, our engine generates a fully
            personalized, day-by-day roadmap. Then, as you log progress, it
            dynamically refines your plan to keep you on track.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? "md:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <span className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center h-64">
                      <step.icon className="w-32 h-32 text-blue-500/30" />
                    </div>
                    <div className="text-center text-sm text-muted-foreground mt-4">
                      {step.number === "1" && "Sample: Create New Plan form"}
                      {step.number === "2" &&
                        "Example: Generated plan JSON response"}
                      {step.number === "3" &&
                        "Mock: Progress tracking dashboard"}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Deep Dive */}
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
          <div className="grid md:grid-cols-3 gap-8">
            {techFeatures.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="flex-col">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              See It in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Paste your goal below and click "Generate" to get a sample plan
              instantly—no signup required.
            </p>
          </div>
          <Card className="bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Your Goal
                  </label>
                  <Textarea
                    placeholder="e.g., Write a novel, Run a 5K, Launch a podcast..."
                    value={goalInput}
                    onChange={(e) => setGoalInput(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <Button
                  onClick={handleGenerateSample}
                  disabled={!goalInput.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  size="lg"
                >
                  {isGenerating ? "Generating..." : "Generate Sample Plan"}
                </Button>

                {samplePlan && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Generated Plan:</h3>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <pre className="text-sm overflow-x-auto whitespace-pre-wrap text-muted-foreground">
                          {JSON.stringify(samplePlan, null, 2)}
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent text-center mb-12">
            Questions About How It Works
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <AlertCircle className="w-5 h-5 text-primary mr-2" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground ml-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Turn Ambition into Achievement?"
        description="Sign up now and generate your first roadmap in minutes."
        primaryCta={{
          text: "Get Started Free",
          onClick: () => (window.location.href = "/pricing"),
        }}
      />
    </PageLayout>
  );
};

export default HowItWorks;
