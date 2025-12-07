import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for beginners",
    features: [
      "Access to gym floor",
      "Basic equipment usage",
      "Locker room access",
      "1 fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 59,
    description: "Most popular choice",
    features: [
      "Everything in Starter",
      "Unlimited group classes",
      "Personal training session/month",
      "Nutrition consultation",
      "Sauna & steam room",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 99,
    description: "For the dedicated athlete",
    features: [
      "Everything in Pro",
      "4 PT sessions/month",
      "Priority class booking",
      "Guest passes",
      "Exclusive workshops",
      "Recovery zone access",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="gym-section bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Membership Plans
          </p>
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            CHOOSE YOUR <span className="text-gradient">PLAN</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Flexible options designed to fit your lifestyle and fitness goals.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary shadow-[0_0_40px_hsla(24,100%,50%,0.2)]"
                  : "border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className={`p-8 bg-card ${plan.popular ? "pt-14" : ""}`}>
                <h3 className="text-2xl font-display mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-display text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
