"use client";

import PageLayout from "@/components/shared/PageLayout";
import HeroSection from "@/components/shared/HeroSection";
import CTASection from "@/components/shared/CTASection";
import PricingPlans from "@/components/pricing/PricingPlans";
import AddOnsSection from "@/components/pricing/AddOnsSection";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import Footer from "@/components/footer";

const Pricing = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        subtitle="Pricing Plans"
        title="Flexible Plans to Power Your Journey"
        description="From individual goal-setters to enterprise partners—transparent pricing that scales with your ambitions."
        primaryCta={{
          text: "Contact Sales",
          href: "contact",
        }}
        // secondaryCta={{
        //   text: "Start Free Trial",
        //   href: "pricing",
        // }}
      />

      {/* Pricing Plans */}
      <PricingPlans />

      {/* Add-ons */}
      <AddOnsSection />

      {/* FAQ */}
      <PricingFAQ />

      {/* CTA Section */}
      <CTASection
        title="Ready to Choose the Perfect Plan?"
        description="Start your free trial or speak to our team to find the best fit for your needs."
        primaryCta={{
          text: "Start Free Trial",
          href: "pricing",
        }}
        secondaryCta={{
          text: "Contact Sales Team",
          href: "contact",
        }}
      />
    </PageLayout>
  );
};

export default Pricing;
