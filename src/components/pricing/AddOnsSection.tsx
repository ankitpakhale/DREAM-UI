
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AddOnsSection = () => {
  const addOns = [
    {
      title: "Additional API Calls",
      description: "$0.002 per call beyond plan limit (Starter & Professional only)"
    },
    {
      title: "Dedicated SDK Development", 
      description: "From $5,000 one-time fee for custom language or framework"
    },
    {
      title: "On-Premise Hosting",
      description: "Available for Professional and Enterprise—contact us for details"
    },
    {
      title: "Staff Training Workshops",
      description: "$1,500 per half-day, delivered virtually or on-site"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          Add-Ons & Overages
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {addOns.map((addOn, index) => (
            <Card 
              key={index} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  {addOn.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {addOn.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
