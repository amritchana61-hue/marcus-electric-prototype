import { Check, Home, Building2, TreePine } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

const ICONS = [Home, Building2, TreePine];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">What we do</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Electrical work, done properly.
            </h2>
          </div>
        </Reveal>

        <motion.div 
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article 
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8, 
                      delay: i * 0.15,
                      ease: [0.21, 0.47, 0.32, 0.98] 
                    }
                  }
                }}
                whileInView={{ 
                  translateY: -5,
                  transition: { delay: (i * 0.15) + 0.5, duration: 0.4 }
                }}
                className="group relative rounded-xl border border-border bg-surface-2 transition-all duration-700 overflow-hidden h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Header Section: Branding */}
                  <div className="flex items-center gap-4 p-6 border-b border-border/50 bg-background/20">
                    <motion.div
                      whileInView={{ 
                        color: "hsl(var(--primary))",
                        filter: "drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))"
                      }}
                      viewport={{ once: true }}
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-border bg-background"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                      {s.title}
                    </h3>
                  </div>

                  {/* Body Section: Details */}
                  <div className="flex-1 p-6">
                    <ul className="space-y-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-center gap-3 text-sm text-foreground-muted">
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          <span className="leading-tight">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtle active state glow */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 to-transparent"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
