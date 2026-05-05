import { PORTFOLIO } from "@/lib/content";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 surface-1 border-y border-border overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Recent work</span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
                A few jobs we&apos;re proud of.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <motion.article 
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                borderColor: "hsl(var(--primary))",
                translateY: -8,
                boxShadow: "0 20px 40px -15px rgba(250, 204, 21, 0.15)"
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface-2 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge (Top-Left) */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background shadow-lg">
                    {p.tag}
                  </span>
                </div>

                {/* Bottom Glassmorphism Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-background/40 backdrop-blur-md border-t border-white/10 p-4">
                  <h3 className="font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-white/80">
                    <MapPin className="h-3 w-3 text-primary" /> {p.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
