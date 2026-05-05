import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export const About = () => {
  const [isBelowDesktop, setIsBelowDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 1023px)");
    const onChange = () => setIsBelowDesktop(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <motion.div
            className="relative"
            initial={{ boxShadow: "none" }}
            whileInView={
              isBelowDesktop
                ? { boxShadow: "0 30px 60px -12px rgba(250, 204, 21, 0.25)" }
                : {}
            }
            whileHover={
              !isBelowDesktop
                ? { boxShadow: "0 30px 60px -12px rgba(250, 204, 21, 0.25)" }
                : {}
            }
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border lg:aspect-auto">
              <img
                src="/contact-electrician.png"
                alt="Marcus working in an electrical panel"
                width={1536}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <div className="absolute -bottom-6 right-4 md:right-8 surface-2 border border-border rounded-xl px-5 py-4 sm:px-6 sm:py-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary leading-none">
                <CountUp end={12} />
                <span className="text-foreground">yrs</span>
              </div>
              <div className="mt-1 text-xs text-foreground-subtle">Serving Toronto since 2014</div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Meet Marcus</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              One electrician. One standard.
            </h2>
            <p className="mt-5 text-foreground-muted text-pretty">
              I started Marcus Electric to bring back clear pricing, clean work, and a real person on the other end of
              the phone.
            </p>

            <figure className="mt-8 rounded-xl border-l-2 border-border bg-surface-1 p-5">
              <Quote className="h-5 w-5 text-primary" />
              <blockquote className="mt-2 font-display text-lg sm:text-xl text-foreground italic">
                &ldquo;If I wouldn&apos;t put it in my own home, I won&apos;t put it in yours.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-foreground-subtle">
                Marcus Thompson &middot; Master Electrician, ESA Licensed
              </figcaption>
            </figure>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="border-l border-border pl-4">
                <div className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="mt-1 text-xs text-foreground-subtle">Projects done</div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  <CountUp end={4.9} decimals={1} />
                  <span className="text-primary">&#9733;</span>
                </div>
                <div className="mt-1 text-xs text-foreground-subtle">Google rating</div>
              </div>
              <div className="border-l border-border pl-4">
                <div className="font-display text-xl sm:text-2xl font-bold text-foreground">
                  <CountUp end={30} /> min
                </div>
                <div className="mt-1 text-xs text-foreground-subtle">Response time</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
