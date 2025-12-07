import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Heart, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art machines and free weights for every workout.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your fitness journey.",
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Comprehensive programs for physical and mental wellness.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Thousands of success stories and transformed lives.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="gym-section bg-gym-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            MORE THAN A <span className="text-gradient">GYM</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're a community of fitness enthusiasts committed to helping you achieve
            your goals with personalized attention and cutting-edge facilities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_hsla(24,100%,50%,0.15)]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
