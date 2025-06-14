
import { Button } from "@/components/ui/button";

const PricingHero = () => {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Pricing Plans
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Flexible plans to power your journey—from individual goal-setters to enterprise partners.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 transform hover:scale-105 transition-all duration-200">
          Start Free Trial
        </Button>
      </div>
    </section>
  );
};

export default PricingHero;
