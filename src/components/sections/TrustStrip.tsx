import { ShieldCheck, BadgeCheck, Clock, Hammer, Star, MapPin, Zap } from "lucide-react";
import { TRUST } from "@/lib/content";
import { motion } from "framer-motion";

const ICONS = [ShieldCheck, BadgeCheck, Clock, MapPin, Star, Zap, Hammer];

export const TrustStrip = () => {
  return (
    <section aria-label="Credentials" className="border-y border-border surface-1">
      <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
        {TRUST.map((t, i) => {
          const Icon = ICONS[i] || ShieldCheck;
          return (
            <div 
              key={t.label} 
              className="flex flex-col items-center text-center gap-3"
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0],
                  color: ["#ffffff", "#FACC15", "#FACC15", "#FACC15", "#FACC15", "#ffffff"],
                  scale: [1, 1.1, 1.1, 1.1, 1.1, 1]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: TRUST.length * 1.5,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
                className="shrink-0"
              >
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </motion.div>
              <div className="min-w-0">
                <div className="text-sm md:text-base font-bold text-foreground leading-tight">{t.label}</div>
                <div className="text-[10px] md:text-xs text-foreground-muted mt-1">{t.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
