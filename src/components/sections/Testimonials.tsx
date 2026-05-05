import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import avatarOne from "@/assets/about-marcus.jpg";
import avatarTwo from "@/assets/hero-team.jpg";
import avatarThree from "@/assets/portfolio-residential.jpg";

const AVATARS = [avatarOne, avatarTwo, avatarThree];

const TestimonialCard = ({
  testimonial,
  avatar,
  active,
  onClick,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  avatar: string;
  active: boolean;
  onClick: () => void;
}) => (
  <figure
    onClick={onClick}
    className={cn(
      "rounded-xl border bg-surface-2 p-6 flex flex-col cursor-pointer transition-all duration-300 h-full",
      active ? "border-border -translate-y-1" : "border-border hover:border-border-hover",
    )}
  >
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, k) => (
        <Star key={k} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <blockquote className="mt-4 text-foreground text-pretty leading-relaxed">
      &ldquo;{testimonial.quote}&rdquo;
    </blockquote>
    <figcaption className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-5">
      <div>
        <div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
        <div className="text-xs text-foreground-subtle">{testimonial.location}</div>
        <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-foreground-muted">
          {testimonial.tag}
        </span>
      </div>
      <img
        src={avatar}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-12 w-12 shrink-0 rounded-full border border-border bg-background object-cover md:h-14 md:w-14"
      />
    </figcaption>
  </figure>
);

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
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left lg:mx-auto lg:text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Reviews</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              What Toronto homeowners say
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 overflow-hidden md:hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="w-full shrink-0 px-0.5">
                <TestimonialCard
                  testimonial={t}
                  avatar={AVATARS[i % AVATARS.length]}
                  active={active === i}
                  onClick={() => setActive(i)}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-12 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <TestimonialCard
                testimonial={t}
                avatar={AVATARS[i % AVATARS.length]}
                active={active === i}
                onClick={() => setActive(i)}
              />
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
