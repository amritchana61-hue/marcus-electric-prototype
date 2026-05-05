import { PORTFOLIO } from "@/lib/content";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const isMobile = useIsMobile();

  return (
    <section id="portfolio" className="py-20 md:py-28 surface-1 border-y border-border overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16 mx-auto">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Recent work</span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Work we stand behind.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p) => (
            <motion.article
              key={p.title}
              initial={{
                opacity: 0.6,
                y: 0,
                borderColor: "rgba(255,255,255,0.1)",
                scale: 0.98,
              }}
              whileInView={
                isMobile
                  ? {
                      opacity: 1,
                      y: -12,
                      scale: 1,
                      borderColor: "hsl(var(--primary))",
                      boxShadow: "none",
                    }
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      borderColor: "rgba(255,255,255,0.1)",
                      boxShadow: "none",
                    }
              }
              whileHover={
                !isMobile
                  ? {
                      y: -12,
                      borderColor: "hsl(var(--primary))",
                      boxShadow: "0 30px 60px -12px rgba(250, 204, 21, 0.25)",
                    }
                  : {}
              }
              viewport={{ margin: "-25% 0px -25% 0px" }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-2xl border bg-surface-2 transition-colors duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute top-6 left-6 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-background shadow-2xl">
                    {p.tag}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-[28%] sm:h-[32%] bg-gradient-to-t from-black/90 via-black/30 to-transparent backdrop-blur-[1px] flex flex-col justify-end p-5 sm:p-8">
                  <h3 className="font-display text-base sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-[10px] sm:text-sm font-medium text-white/60">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    {p.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:hidden">
          <Button asChild size="default" className="px-6">
            <Link to="/portfolio">
              View More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-16 hidden lg:flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="h-14 px-8 text-base">
              <Link to="/portfolio">
                View More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
