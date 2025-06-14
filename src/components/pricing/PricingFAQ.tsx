
import { HelpCircle } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Can I switch plans mid-month?",
      answer: "Yes—upgrades take effect immediately; downgrades apply at next billing cycle."
    },
    {
      question: "Is there a commitment?",
      answer: "All monthly plans are pay-as-you-go. Annual commitments receive a 15% discount."
    },
    {
      question: "Do you offer nonprofit or educational discounts?",
      answer: "Yes—please contact sales@dream-engine.ai to discuss eligibility and terms."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Credit card (Visa, MasterCard, AmEx) and ACH transfers for Enterprise."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="font-medium text-left text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <HelpCircle className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4 pt-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-b-lg shadow-sm border-x border-b border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
