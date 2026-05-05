import { ShieldCheck, BadgeCheck, Clock, Hammer, Star, MapPin, Zap } from "lucide-react";
import { TRUST } from "@/lib/content";
import { motion } from "framer-motion";

const ICONS = [ShieldCheck, BadgeCheck, Clock, MapPin, Star, Zap, Hammer];

export const TrustStrip = () => {
  return (
    <section aria-label="Credentials" className="border-y border-border surface-1">
      <div className="container py-8 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
        {TRUST.map((t, i) => {
          const Icon = ICONS[i] || ShieldCheck;
          return (
            <motion.div 
              key={t.label} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`flex flex-col items-center text-center gap-4 px-4 group relative ${
                i !== TRUST.length - 1 ? "lg:border-r lg:border-border/40" : ""
              }`}
            >
              <motion.div
                whileInView={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  color: ["#ffffff", "#FACC15", "#FACC15", "#FACC15", "#FACC15", "#ffffff"],
                  scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
                  filter: [
                    "drop-shadow(0 0 0px rgba(250, 204, 21, 0))",
                    "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))",
                    "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))",
                    "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))",
                    "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))",
                    "drop-shadow(0 0 0px rgba(250, 204, 21, 0))"
                  ]
                }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: TRUST.length * 1.5,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                className="shrink-0 group-hover:scale-110 transition-transform duration-300"
              >
                <Icon className="h-6 w-6 md:h-8 md:w-8" />
              </motion.div>
              <div className="min-w-0">
                <div className="text-sm md:text-base lg:text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  {t.label}
                </div>
                <div className="text-[10px] md:text-xs lg:text-sm text-foreground-muted mt-1.5 uppercase tracking-wider font-medium">
                  {t.sub}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
