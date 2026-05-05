import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/content";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border h-[60px]"
          : "bg-transparent border-b border-transparent h-[var(--header-h)]"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group relative">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 600, 
              damping: 20,
              delay: 0.1 
            }}
            onAnimationComplete={() => setShowText(true)}
            className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary transition-transform group-hover:scale-105 z-10"
          >
            <Zap className="h-5 w-5 fill-primary" />
          </motion.div>
          
          <AnimatePresence>
            {showText && (
              <motion.span 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="font-display text-base sm:text-lg font-bold tracking-tight animate-shine"
              >
                Marcus <span className="text-primary font-medium">Electric</span>
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="link-underline px-3 py-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {SITE.phone}
          </a>
          <Button asChild size="sm">
            <a href="#contact">Get Estimate</a>
          </Button>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-surface-2 transition-colors relative z-50"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Background Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-background/40 backdrop-blur-md z-40 md:hidden"
            />
            
            {/* Mobile Menu Content */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg relative z-50"
            >
              <nav className="container mx-auto flex flex-col py-3">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-base font-medium text-foreground-muted hover:text-foreground transition-colors"
                  >
                    {n.label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 pb-2">
                  <Button asChild variant="outline" size="sm">
                    <a href={SITE.phoneHref}>{SITE.phone}</a>
                  </Button>
                  <Button asChild size="sm">
                    <a href="#contact" onClick={() => setOpen(false)}>Get Estimate</a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
