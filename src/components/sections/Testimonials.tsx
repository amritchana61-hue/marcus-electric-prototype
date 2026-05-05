import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Reviews</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              What Toronto homeowners say.
            </h2>
          </div>
        </Reveal>

        <div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-xl border bg-surface-2 p-6 flex flex-col cursor-pointer transition-all duration-300 h-full",
                  active === i
                    ? "border-primary/60 glow-primary -translate-y-1"
                    : "border-border hover:border-border-hover",
                )}
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 text-foreground text-pretty leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground-subtle">{t.location}</div>
                  <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-foreground-muted">
                    {t.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                active === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-border-hover",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
