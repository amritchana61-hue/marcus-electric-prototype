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
                Work we stand behind.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <motion.article 
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                borderColor: "hsl(var(--primary))",
                translateY: -8,
                boxShadow: "0 25px 50px -12px rgba(250, 204, 21, 0.2)"
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-2 transition-all duration-500"
            >
              <div className="aspect-[4/5] lg:aspect-[4/3] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Category Badge (Top-Left) */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-background shadow-xl">
                    {p.tag}
                  </span>
                </div>

                {/* Smoky Bottom Glassmorphism Overlay */}
                <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent backdrop-blur-[2px]">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/70">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
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
