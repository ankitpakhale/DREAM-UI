"use client";

import { SignedIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useDream } from "@/contexts/DreamContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FC, useEffect, ReactNode, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Hand,
  Activity,
  DollarSign,
  Users,
  Calendar,
  ShieldCheck,
  Zap,
  Sun,
  Coffee,
  Book,
  BarChart,
  Search,
  Brain,
  CalendarDays,
  Briefcase,
  Clock,
  Heart,
  MessageCircle,
  Star,
  FlipHorizontal2,
  RefreshCcw,
} from "lucide-react";
import { loadDream, removeDream } from "@/utils/storage";
import Button from "@/components/ui/button";
import AccessDenied from "@/components/AccessDenied";
import type { DreamData, DreamValue } from "@/utils/types";

// Helpers
const isPrimitive = (value: unknown): value is string | number | boolean =>
  ["string", "number", "boolean"].includes(typeof value);
const isLeafNode = (obj: Record<string, unknown>): boolean =>
  Object.values(obj).every((val) => isPrimitive(val));

// Icon map
const iconMap: Record<string, FC> = {
  routine: Activity,
  fear_and_motivation: ShieldCheck,
  daily_habit: Calendar,
  career: Briefcase,
  finance: DollarSign,
  relationships: Users,
  daily_routine: Zap,
  daily_steps: CalendarDays,
  weekly_steps: Calendar,
  monthly_steps: Star,
  morning_routine: Sun,
  deep_work: Coffee,
  team_engagement: Users,
  self_reflection: Book,
  financial_review: BarChart,
  investment_research: Search,
  wealth_mindset_practice: Brain,
  connection_time: Heart,
  self_reflection_on_relationships: Book,
  communication_practice: MessageCircle,
  strategy_review: Clock,
  team_development: Users,
  networking: Users,
  growth_focused_learning: Book,
  portfolio_review: BarChart,
  smart_spending: DollarSign,
  growth_oriented_networking: Users,
  financial_education: Book,
  intentional_date_quality_time: Heart,
  social_connections: Users,
  personal_growth_together: Users,
  team_bonding: Users,
  visionary_planning: Star,
  high_impact_project: Briefcase,
  industry_engagement: Users,
  mentorship: Users,
  mentorship_support: Users,
  family_partner_retreats: Heart,
  reflect_on_boundaries: ShieldCheck,
  celebrate_milestones: Star,
  investment_strategy_update: BarChart,
  set_financial_milestones: Star,
  philanthropy_focus: Heart,
  long_term_financial_vision: Star,
  exercise: Activity,
  mindfulness: Book,
  strategic_planning: Clock,
  power_blocks: Zap,
  team_collaboration: Users,
  breaks: Clock,
  reflection: Book,
  wind_down: Heart,
  prepare_for_tomorrow: Clock,
  fear_of_not_making_significant_impact: ShieldCheck,
  fear_of_burnout: ShieldCheck,
  doubt_about_achieving_financial_freedom: DollarSign,
  doubt_about_successfully_scaling_investment_portfolio: BarChart,
  final_motivation_to_push_through: Star,
  mindset_shift: Brain,
  motivation: Zap,
  perspective: Book,
  remember_your_why: Heart,
  believe_in_your_ability_to_adapt: ShieldCheck,
  morning_mindset_ritual: Sun,
  focused_learning: Book,
  daily_investment_tracking: BarChart,
  relationship_building: Users,
  daily_reflection_and_goal_review: FlipHorizontal2,
  the_big_picture: Star,
};

const Dream: FC = () => {
  const router = useRouter();

  // clerk user data
  const { user } = useUser();

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // useDream data
  const { dreamData, setDreamData, responseMessage, error } = useDream();

  useEffect(() => {
    if (!dreamData) {
      const saved = loadDream();
      if (saved) {
        setDreamData(saved as DreamData<DreamValue>);
        return; // hydrated, don’t redirect
      }
    }

    if ((!dreamData && !loadDream()) || error) {
      console.error("No dreamData found, redirecting to playground route");
      router.push("/playground");
    }
  }, [dreamData, error, router, setDreamData]);

  interface DreamPayload {
    id: string;
    [key: string]: unknown;
  }

  // Only nested payload, filter out id
  const payload = dreamData?.payload as DreamPayload | undefined;

  if (!payload) return null;

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderNode = (key: string, value: DreamValue): ReactNode => {
    const Icon = iconMap[key];
    if (isPrimitive(value)) {
      return (
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon />}
          <p className="text-sm">{String(value)}</p>
        </div>
      );
    }
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside ml-6 mb-2">
          {value.map((item, idx) => (
            <li key={idx}>{renderNode(key, item)}</li>
          ))}
        </ul>
      );
    }
    if (isLeafNode(value)) {
      return (
        <div className="flex flex-col gap-4">
          {Object.entries(value).map(([k, v]) => {
            const LeafIcon = iconMap[k];
            return (
              <div
                key={k}
                className="flex items-start gap-3 p-3 border rounded hover:bg-muted transition"
              >
                {LeafIcon && <LeafIcon />}
                <div>
                  <p className="font-medium capitalize">
                    {k.replace(/_/g, " ")}
                  </p>
                  <p className="text-sm text-muted-foreground">{String(v)}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <Accordion type="single" collapsible className="space-y-2 w-full">
        {Object.entries(value).map(([k, v]) => {
          const NestedIcon = iconMap[k];
          const isOpen = expanded[k] ?? false;
          return (
            <AccordionItem key={k} value={k}>
              <AccordionTrigger
                onClick={() => toggle(k)}
                className="flex justify-between w-full items-center p-2 bg-muted rounded hover:bg-muted/90 transition"
              >
                <div className="flex items-center gap-2">
                  {NestedIcon && <NestedIcon />}
                  <span className="capitalize font-medium">
                    {k.replace(/_/g, " ")}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </AccordionTrigger>
              {isOpen && (
                <AccordionContent className="pl-6">
                  {renderNode(k, v)}
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  };

  const analyzeAnotherDream = () => {
    removeDream();
    console.info("dreamData removed, redirecting to playground");
    router.push("/playground");
  };

  return (
    <>
      <SignedIn>
        <div className="h-full py-8 px-5 sm:px-30 space-y-8">
          {/* Header Card, Hello, User! */}
          <Card className="p-6 bg-primary/10">
            <CardTitle className="text-2xl font-semibold flex items-center gap-2">
              <Hand className="w-6 h-6 text-primary" />
              Hello, {user?.firstName || "User"}!
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {responseMessage}
            </p>
          </Card>

          {/* Body Nodes */}
          <div className="grid grid-cols-1 gap-6">
            {Object.entries(payload).map(([section, content]) => {
              const Icon = iconMap[section];
              const isOpen = expanded[section] ?? false;
              return (
                <Card
                  key={section}
                  className="border hover:shadow-lg transition"
                >
                  <CardHeader className="gap-3">
                    {Icon && <Icon />}
                    <CardTitle className="text-lg font-semibold capitalize">
                      {section.replace(/_/g, " ")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={section}>
                        <AccordionTrigger
                          onClick={() => toggle(section)}
                          className="flex justify-between w-full items-center p-2 bg-accent rounded hover:bg-accent/90 transition"
                        >
                          <span>
                            {isOpen ? "Hide Details" : "View Details"}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </AccordionTrigger>
                        {isOpen && (
                          <AccordionContent className="mt-2">
                            {renderNode(section, content as DreamValue)}
                          </AccordionContent>
                        )}
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Footer Card */}
          <div className="card-footer mt-10 flex justify-center">
            <Button
              size="md"
              variant="danger"
              onClick={() => analyzeAnotherDream()}
              className="gap-2"
            >
              <RefreshCcw className="w-6 h-6" />
              Analyze Another Dream
            </Button>
          </div>
        </div>
      </SignedIn>
      <AccessDenied componentName="Dream" />
    </>
  );
};

export default Dream;
