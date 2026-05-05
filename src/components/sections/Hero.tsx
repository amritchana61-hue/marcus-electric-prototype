import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";
import heroImage from "@/assets/hero-team.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Marcus Electric team in front of service van at a Toronto home"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
      </div>
      
      {/* Bottom-to-Top Overlay for Legibility (Stronger at base) */}
      <div className="absolute inset-0 bg-background/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

      <div className="container relative z-10 pt-28 pb-10 md:pb-0">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 backdrop-blur px-3 py-1 text-[10px] sm:text-xs font-medium text-foreground-muted"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="relative flex h-2 w-2"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </motion.span>
            Toronto · ESA Licensed since 2014
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mt-5 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-balance"
          >
            Toronto&apos;s most <span className="text-primary">trusted</span> electrician.
          </motion.h1>

          <div className="mt-8 flex flex-row gap-2 md:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1 md:flex-none"
            >
              <Button asChild size="lg" className="w-full h-11 md:h-14 px-3 md:px-8 text-xs md:text-base relative overflow-hidden group">
                <a href={SITE.phoneHref}>
                  <motion.span 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  />
                  <span className="ring-ripple inline-flex mr-2">
                    <Phone className="h-3 w-3 md:h-4 md:w-4" />
                  </span>
                  <span className="whitespace-nowrap hidden md:inline">Call {SITE.phone}</span>
                  <span className="whitespace-nowrap md:hidden">Call Now</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 md:flex-none"
            >
              <Button asChild size="lg" variant="outline" className="w-full h-11 md:h-14 px-3 md:px-8 text-xs md:text-base">
                <a href="#contact" className="whitespace-nowrap">
                  <span className="hidden md:inline">Get Free Estimate</span>
                  <span className="md:hidden">Estimate</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-foreground-subtle">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-foreground-subtle to-transparent animate-pulse-soft" />
      </div>
    </section>
  );
};
