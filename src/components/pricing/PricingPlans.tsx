import PricingCard from "./PricingCard";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/mo",
      description: "Perfect for solo users experimenting with habit building",
      features: [
        { name: "500 API calls/month", included: true },
        { name: "Basic AI-generated plans", included: true },
        { name: "Habit tracking", included: true },
        { name: "Email support", included: true },
        { name: "Dynamic routing", included: false },
        { name: "Validation layer", included: false },
        { name: "Custom branding", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/mo",
      description: "Ideal for small teams, coaches, and growing startups",
      features: [
        { name: "2,500 API calls/month", included: true },
        { name: "Advanced AI-generated plans", included: true },
        { name: "Habit tracking", included: true },
        { name: "Priority email & chat", included: true },
        { name: "Dynamic routing", included: true },
        { name: "Validation layer", included: true },
        { name: "Custom branding", included: false },
        { name: "Custom integrations", included: "Add-on" },
      ],
      cta: "Upgrade Now",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations and platform integrators",
      features: [
        { name: "Unlimited API calls", included: true },
        { name: "Premium AI models", included: true },
        { name: "Advanced analytics", included: true },
        { name: "24/7 SLA & CSM", included: true },
        { name: "Dynamic routing", included: true },
        { name: "Full validation", included: true },
        { name: "Custom branding", included: true },
        { name: "Custom integrations", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-indigo-400/5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Transparent pricing that scales with your ambitions
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
