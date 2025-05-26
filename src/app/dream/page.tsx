"use client";

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

// Helpers
const isPrimitive = (value: any): value is string | number | boolean =>
  ["string", "number", "boolean"].includes(typeof value);
const isLeafNode = (obj: Record<string, any>): boolean =>
  Object.values(obj).every((val) => isPrimitive(val));

// Icon map
const iconMap: Record<string, FC<any>> = {
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
  const { dreamData, setDreamData, userDetails, responseMessage, error } =
    useDream();

  useEffect(() => {
    console.log("🚀 context dreamData:", dreamData);
    if (!dreamData) {
      const saved = loadDream();
      console.log("🚀 localStorage dreamResponse:", saved);
      if (saved) {
        setDreamData(saved);
        return; // hydrated, don’t redirect
      }
    }

    if ((!dreamData && !loadDream()) || error) {
      console.info("🔄 No dreamData anywhere—redirecting…");
      router.push("/playground");
    }
  }, [dreamData, error, router, setDreamData]);

  // Only nested payload, filter out id
  const { id, ...payload } = dreamData?.payload?.payload || {};
  if (!payload) return null;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderNode = (key: string, value: any): ReactNode => {
    const Icon = iconMap[key];
    if (isPrimitive(value)) {
      return (
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon className="w-5 h-5 text-primary" />}
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
                {LeafIcon && (
                  <LeafIcon className="w-6 h-6 text-secondary mt-1" />
                )}
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
                  {NestedIcon && (
                    <NestedIcon className="w-5 h-5 text-primary" />
                  )}
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
    <div className="h-full py-8 px-5 sm:px-30 space-y-8">
      {/* Header Card */}
      <Card className="p-6 bg-primary/10">
        <CardTitle className="text-2xl font-semibold flex items-center gap-2">
          <Activity className="w-6 h-6 text-primary" />
          Hello, {userDetails?.name || "User"}!
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">{responseMessage}</p>
      </Card>

      {/* Body Nodes */}
      <div className="grid grid-cols-1 gap-6">
        {Object.entries(payload).map(([section, content]) => {
          const Icon = iconMap[section];
          const isOpen = expanded[section] ?? false;
          return (
            <Card key={section} className="border hover:shadow-lg transition">
              <CardHeader className="flex items-center gap-3 p-4">
                {Icon && <Icon className="w-6 h-6 text-primary" />}
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
                      <span>{isOpen ? "Hide Details" : "View Details"}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </AccordionTrigger>
                    {isOpen && (
                      <AccordionContent className="mt-2">
                        {renderNode(section, content)}
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
        <button
          type="submit"
          className="
            bg-green-400 
            hover:bg-green-600 
            border 
            border-green-500 
            hover:border-green-700 
            font-bold 
            transition-all 
            w-60
            py-2 
            px-3 
            rounded 
            active:scale-95 
            flex 
            gap-2
          text-gray-100 
          dark:text-gray-900
          "
          onClick={() => analyzeAnotherDream()}
        >
          <RefreshCcw className="w-6 h-6 text-gray-100 dark:text-gray-900" />
          Analyze Another Dream
        </button>
      </div>
    </div>
  );
};

export default Dream;
