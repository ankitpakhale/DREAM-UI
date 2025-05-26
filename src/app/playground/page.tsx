"use client";

import { Send, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useCallback } from "react";
import fetchData from "@/api/fetcher";
import { API_ENDPOINTS } from "@/constants/apiEndpoints";
import { useDream } from "@/contexts/DreamContext";
import { useRouter } from "next/navigation";
import { storeDream } from "@/utils/storage";

interface BackendResponse<T = any> {
  status: boolean;
  payload: T;
  message: string;
  status_code: number;
}

type QuestionSet = {
  [category: string]: string[];
};

const QUESTION_SETS: QuestionSet = {
  career_questions: [
    "career_fulfilling_career",
    "career_definition_of_success",
    "career_money_no_object",
    "career_irreplaceable_skills",
    "career_role_models",
    "career_work_environment",
    "career_work_team_individually",
    "career_ideal_work_life_balance",
    "career_work_from_anywhere",
    "career_impactful_project",
  ],
  finance_questions: [
    "finance_financial_freedom",
    "finance_passive_income_needed",
    "finance_relationship_with_money",
    "finance_one_important_financial_decision",
    "finance_managing_spending",
    "finance_short_term_financial_goals",
    "finance_investment_choice",
    "finance_dream_budget",
    "finance_tracking_finances",
    "finance_impact_of_financial_freedom",
  ],
  relationships_questions: [
    "relationships_qualities_in_relationships",
    "relationships_prioritizing_relationships",
    "relationships_balancing_career_and_relationships",
    "relationships_ideal_partner_dynamic",
    "relationships_conflict_resolution",
    "relationships_legacy_in_relationships",
    "relationships_role_of_friendships",
    "relationships_contributing_to_others",
    "relationships_boundaries_for_healthy_relationships",
    "relationships_ideal_circle_of_people",
  ],
};

// Dummy data for testing
const DUMMY_VALUES: Record<string, string> = {
  career_fulfilling_career:
    "A fulfilling career is one where I build, scale, and lead businesses that solve real problems, generate massive wealth, and create long-term impact. Fulfillment comes from influence, innovation, and legacy.",
  career_definition_of_success:
    "Success means achieving billionaire status by building ventures that disrupt industries, empower others, and leave a global legacy. It's about freedom, ownership, and significance.",
  career_money_no_object:
    "If money were no object, I would still build and invest in businesses, mentor founders, and launch initiatives that move the world forward. Creation and growth are core to who I am.",
  career_irreplaceable_skills:
    "Strategic thinking, high-stakes decision-making, leadership under pressure, capital allocation, and the ability to build and scale systems quickly.",
  career_role_models:
    "Elon Musk for vision and bold execution, Jeff Bezos for operational excellence, Warren Buffett for investment strategy, Oprah for influence and platform-building, and Naval Ravikant for clarity of thought and leverage.",
  career_work_environment:
    "Fast-paced, high-impact, and high-autonomy. Surrounded by elite performers who are all-in on building something legendary.",
  career_work_team_individually:
    "I operate best leading high-performance teams, but I also need focused solo time for vision planning, strategy, and execution without distraction.",
  career_ideal_work_life_balance:
    "Balance means aligning work with mission. Health, relationships, and self-mastery are maintained to fuel sustained high performance.",
  career_work_from_anywhere:
    "Yes. Freedom to work from anywhere enables global deal-making, access to the best opportunities, and an unbounded lifestyle.",
  career_impactful_project:
    "Creating a platform that democratizes investing in high-growth ventures—giving people access to wealth-building opportunities typically reserved for elite investors.",
  finance_financial_freedom:
    "Having complete autonomy over time and choices, with enough assets and cash flow to fund any venture, support loved ones, and live life on my terms.",
  finance_passive_income_needed:
    "$5M+ annually in passive income across diversified sources like real estate, equity, and royalties to maintain billionaire trajectory and reinvest aggressively.",
  finance_relationship_with_money:
    "Money is power and leverage. It’s a tool to create, grow, and contribute. I view it strategically—not emotionally.",
  finance_one_important_financial_decision:
    "Choosing to reinvest early earnings into scalable assets instead of spending on status. Capital compounding creates exponential advantage.",
  finance_managing_spending:
    "I track and control spending like a business—prioritizing ROI, cutting waste, and allocating toward investments and personal growth.",
  finance_short_term_financial_goals:
    "Build $10M liquid net worth, establish recurring cash flow, and scale a high-margin venture with compounding revenue.",
  finance_investment_choice:
    "High-growth startups, commercial real estate, and private equity. I focus on asymmetric returns with capital protection.",
  finance_dream_budget:
    "A budget that allows unlimited investment in high-return opportunities, elite advisors, optimized health, and personal development—no limits.",
  finance_tracking_finances:
    "I use automated dashboards, KPIs, and financial reports. Every dollar is tracked and either grows, protects, or builds leverage.",
  finance_impact_of_financial_freedom:
    "It enables me to focus 100% on visionary projects, support others financially, and build systems that make wealth inevitable for myself and others.",
  relationships_qualities_in_relationships:
    "Loyalty, ambition, emotional intelligence, mutual respect, and alignment on long-term vision and growth.",
  relationships_prioritizing_relationships:
    "I prioritize relationships that elevate me and where I can give back. Time is spent intentionally on high-value, mutual-growth connections.",
  relationships_balancing_career_and_relationships:
    "Balance is architected—quality time, transparency, and clear boundaries. Relationships are a foundation, not a distraction.",
  relationships_ideal_partner_dynamic:
    "A powerful, emotionally grounded partner with shared values, complementary strengths, and a vision for co-building legacy.",
  relationships_conflict_resolution:
    "Direct, rational, and respectful. I approach conflict with solutions, not ego. Growth over blame.",
  relationships_legacy_in_relationships:
    "To be remembered as someone who uplifted others, created generational opportunities, and modeled strength, vision, and heart.",
  relationships_role_of_friendships:
    "My friends are my inner circle—strategic allies, truth-tellers, and collaborators. I keep a tight, driven tribe.",
  relationships_contributing_to_others:
    "Through mentorship, investment, and building platforms that help others succeed at scale—empowering others is part of the mission.",
  relationships_boundaries_for_healthy_relationships:
    "Clear boundaries around time, energy, and focus. No tolerance for toxicity, drama, or small-mindedness.",
  relationships_ideal_circle_of_people:
    "Visionaries, builders, investors, creators. People who challenge me, push limits, and are aligned on growth, wealth, and impact.",
};

// Schema using Zod
const allFields = Object.values(QUESTION_SETS).flat();
const schema = z.object(
  Object.fromEntries(
    allFields.map((field) => [field, z.string().min(1, "Required")])
  )
);

type FormSchema = z.infer<typeof schema>;

function formatLabel(key: string): string {
  return key
    .split("_")
    .slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Playground() {
  const router = useRouter();

  const { setDreamData, setError, setResponseMessage } = useDream();

  const [isTesting, setIsTesting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  // Reset form values when testing toggle changes
  useEffect(() => {
    if (isTesting) {
      reset(DUMMY_VALUES as FormSchema);
    } else {
      reset({} as FormSchema);
    }
  }, [isTesting, reset]);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = useCallback(
    async (data: FormSchema) => {
      try {
        // 1. set loading state
        setIsLoading(true);
        await sleep(3000);

        // 2. build form data from input
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value.toString());
        });

        // 3. send form data to backend
        const response = await fetchData<BackendResponse>(
          API_ENDPOINTS.DREAM_FINDER,
          formData
        );

        // 4. store response
        setDreamData(response);

        // 5. store entire response in localStorage
        storeDream(response);
        router.push("/dream");

      } catch (err: unknown) {
        // handle error
        console.error("unexpected error:", err);
        // if (err instanceof Error) {
        //   // optional: display error message
        //   setError(err.message);
        // }
        // TODO:: perform cleanup
      } finally {
        // unset loading state
        setIsLoading(false);
      }
    },
    [] // no external deps
  );

  return (
    <div className="h-full py-10 px-4 sm:px-30">
      {/* Testing Toggle */}
      <div className="flex justify-end mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={isTesting}
            onChange={() => setIsTesting(!isTesting)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-sm">Testing Mode</span>
        </label>
      </div>

      {/* Page Header */}
      <div className="header">
        <h2 className="text-2xl sm:text-5xl text-center font-bold">
          Welcome to Dream Playground
        </h2>
      </div>

      {/* Main Card */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          bg-neutral-100
          dark:bg-neutral-900
          shadow 
          my-10 
          py-10 
          px-5 
          rounded 
          h-auto 
          w-full
        "
      >
        {/* Disclaimer */}
        <div className="card-header mb-10">
          <div className="bg-red-200 dark:bg-red-800 py-2 px-1 rounded">
            <h2 className="text-red-800 dark:text-red-200">
              ⚠️ <span className="font-bold">Disclaimer:</span> All routines,
              plans, and suggestions provided by the DREAM platform are entirely
              <span className="font-bold"> AI-generated</span>. These
              recommendations are based on the information you provide &
              patterns recognized by the AI, not by human professionals.
            </h2>
          </div>
        </div>

        {/* Questions */}
        <div className="card-body my-10">
          {Object.entries(QUESTION_SETS).map(([sectionKey, questions]) => (
            <div key={sectionKey} className="mb-10">
              <h2 className="text-xl font-semibold capitalize my-5">
                {sectionKey.replace("_", " ").replace("questions", "").trim()}
              </h2>

              {questions.map((qKey) => (
                <div key={qKey} className="relative my-5 z-0">
                  <input
                    type="text"
                    id={qKey}
                    {...register(qKey)}
                    placeholder=" "
                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 ${
                      errors[qKey] ? "border-red-500" : "border-gray-300"
                    } appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#51bed6] focus:outline-none focus:ring-0 focus:border-[#51bed6] peer`}
                  />
                  <label
                    htmlFor={qKey}
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#51bed6] peer-focus:dark:text-[#51bed6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {formatLabel(qKey)}
                  </label>
                  {errors[qKey] && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors[qKey]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Submit */}
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
            py-2 
            px-3 
            rounded 
            active:scale-95 
            flex 
            gap-2
            text-white
            dark:text-black
            "
          >
            {isLoading ? (
              <Loader className="animate-spin w-6 h-6 text-gray-500" />
            ) : (
              <Send />
            )}
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
