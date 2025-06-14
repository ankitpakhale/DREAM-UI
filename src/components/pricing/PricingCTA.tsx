
import { Button } from "@/components/ui/button";

const PricingCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Ready to Choose the Perfect Plan?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Start your free trial or speak to our team to find the best fit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Started (Starter)
          </Button>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Upgrade to Professional
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white transform hover:scale-105 transition-all duration-200"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
