import { Quote } from "lucide-react";
import aboutImg from "@/assets/about-marcus.jpg";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={aboutImg}
                alt="Marcus working in an electrical panel"
                width={1024}
                height={1280}
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
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Meet Marcus</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              One electrician. One standard.
            </h2>
            <p className="mt-5 text-foreground-muted text-pretty">
              I started Marcus Electric to bring back what I felt was missing from the trade — clear pricing, clean
              work, and a real person on the other end of the phone. Every job is done by me or a tradesperson I&apos;ve
              personally trained.
            </p>

            <figure className="mt-8 rounded-xl border-l-2 border-primary bg-surface-1 p-5">
              <Quote className="h-5 w-5 text-primary" />
              <blockquote className="mt-2 font-display text-lg sm:text-xl text-foreground italic">
                &ldquo;If I wouldn&apos;t put it in my own home, I won&apos;t put it in yours.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-foreground-subtle">
                Marcus Thompson · Master Electrician, ESA Licensed
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
                  <span className="text-primary">★</span>
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
