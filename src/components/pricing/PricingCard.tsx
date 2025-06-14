import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

interface Feature {
  name: string;
  included: boolean | string;
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  cta: string;
  popular: boolean;
  index: number;
}

const PricingCard = ({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
  index,
}: PricingCardProps) => {
  return (
    <Card
      className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 relative border-2 transform hover:scale-105 animate-fade-in ${
        popular
          ? "border-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/25 dark:shadow-blue-400/25"
          : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
      }`}
      style={{
        animationDelay: `${index * 200}ms`,
        background: popular
          ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
          : undefined,
      }}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-pulse">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          {name}
        </CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-gray-600 dark:text-gray-400">{period}</span>
        </div>
        <CardDescription className="mt-4 text-gray-600 dark:text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 mb-8">
          {features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center gap-3 animate-fade-in"
              style={{
                animationDelay: `${index * 200 + featureIndex * 100}ms`,
              }}
            >
              {feature.included === true ? (
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : feature.included === "Add-on" ? (
                <Badge
                  variant="outline"
                  className="text-xs border-blue-300 text-blue-600 dark:border-blue-600 dark:text-blue-400"
                >
                  Add-on
                </Badge>
              ) : (
                <X className="h-5 w-5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
              )}
              <span
                className={`text-sm ${
                  feature.included
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
        <Button
          variant={popular ? "default" : "outline"}
          className={`w-full transition-all duration-300 ${
            popular
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
              : "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600"
          }`}
          onClick={() =>
            alert(
              "The payment feature is coming soon and will be available shortly."
            )
          }
        >
          {cta}
        </Button>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
          14-day free trial
        </p>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
