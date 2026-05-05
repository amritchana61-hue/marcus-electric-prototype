import { ShieldCheck, BadgeCheck, Clock, Hammer, Star, MapPin, Zap } from "lucide-react";
import { TRUST } from "@/lib/content";
import { motion } from "framer-motion";

const ICONS = [ShieldCheck, BadgeCheck, Clock, MapPin, Star, Zap, Hammer];

export const TrustStrip = () => {
  return (
    <section aria-label="Credentials" className="border-y border-border surface-1 overflow-hidden">
      <div className="container px-0 md:px-6">
        <motion.div 
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-6 gap-8 px-6 md:justify-center"
          initial="initial"
          animate="animate"
        >
          {TRUST.map((t, i) => {
            const Icon = ICONS[i] || ShieldCheck;
            return (
              <motion.div 
                key={t.label} 
                className="flex-shrink-0 snap-center flex items-center gap-4 min-w-[140px] md:min-w-0"
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
                  <Icon className="h-6 w-6" />
                </motion.div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-foreground leading-tight whitespace-nowrap">{t.label}</div>
                  <div className="text-[10px] text-foreground-muted whitespace-nowrap">{t.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
