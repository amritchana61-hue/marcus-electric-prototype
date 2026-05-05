import { PORTFOLIO } from "@/lib/content";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 surface-1 border-y border-border">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">Recent work</span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
                A few jobs we&apos;re proud of.
              </h2>
            </div>
            <a href="#contact" className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors group">
              Request a similar project{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative overflow-hidden rounded-xl border border-border bg-surface-2 transition-all duration-300 hover:border-border-hover hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-3 left-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      View project <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-background/80 backdrop-blur border border-border px-2.5 py-1 text-xs font-medium text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-pulse-soft" />
                    {p.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-foreground-subtle">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
