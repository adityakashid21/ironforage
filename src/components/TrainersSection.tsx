import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Twitter } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Steel",
    role: "Strength & Conditioning",
    image: trainer1,
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "Sofia Martinez",
    role: "HIIT & Cardio Specialist",
    image: trainer2,
    social: { instagram: "#", twitter: "#" },
  },
  {
    name: "James Connor",
    role: "CrossFit Coach",
    image: trainer3,
    social: { instagram: "#", twitter: "#" },
  },
];

export const TrainersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trainers" className="gym-section bg-gym-darker">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Meet The Team
          </p>
          <h2 className="text-4xl md:text-6xl font-display mb-6">
            EXPERT <span className="text-gradient">TRAINERS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our certified professionals are here to guide you every step of the way.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                </div>

                {/* Social Links - Appear on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={trainer.social.instagram}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-display">{trainer.name}</h3>
                  <p className="text-primary uppercase tracking-wide text-sm">
                    {trainer.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
