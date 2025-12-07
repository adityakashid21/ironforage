import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Fitness Street", "New York, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@ironforge.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 5AM - 11PM", "Sat-Sun: 6AM - 10PM"],
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="gym-section bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              START YOUR <span className="text-gradient">JOURNEY</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Ready to transform? Fill out the form and our team will reach out within 24 hours.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <textarea
                placeholder="Tell us about your fitness goals..."
                rows={4}
                className="w-full px-4 py-4 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
              />
              <Button variant="hero" size="xl" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg mb-2">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
