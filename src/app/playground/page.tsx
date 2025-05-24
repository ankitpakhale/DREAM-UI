"use client";

import { useState } from "react";
import { Send } from "lucide-react";

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

function formatLabel(key: string): string {
  return key
    .split("_")
    .slice(1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Playground() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="h-full py-10 px-4 sm:px-30">
      {/* Page header */}
      <div className="header">
        <h2 className="text-2xl sm:text-5xl text-center font-bold">
          Welcome to Dream Playground
        </h2>
      </div>

      {/* main center card */}
      <div className="bg-gray-100 border border-gray-300 shadow my-10 py-10 px-5 rounded h-auto w-full">
        <div className="card-header mb-10">
          <div className="bg-red-200 py-2 px-1 rounded">
            <h2 className="text-red-800">
              ⚠️ <span className="font-bold">Disclaimer:</span> All routines,
              plans, and suggestions provided by the DREAM platform are entirely
              <span className="font-bold"> AI-generated</span>. These
              recommendations are based on the information you provide &
              patterns recognized by the AI, not by human professionals.
            </h2>
          </div>
        </div>

        {/* Card Body */}
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
                    value={formData[qKey] || ""}
                    onChange={(e) => handleChange(qKey, e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#51bed6] focus:outline-none focus:ring-0 focus:border-[#51bed6] peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor={qKey}
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#51bed6] peer-focus:dark:text-[#51bed6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {formatLabel(qKey)}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="card-footer mt-10 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-green-400 hover:bg-green-600 border border-green-500 hover:border-green-700 font-bold transition-all py-2 px-3 rounded active:scale-95 flex gap-2"
          >
            <Send />
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Playground;
