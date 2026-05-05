import { Check, Home, Building2, TreePine, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const ICONS = [Home, Building2, TreePine];

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">What we do</span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
              Electrical work, done properly.
            </h2>
            <p className="mt-4 text-foreground-muted text-pretty">
              Three focused services. Every job ESA-compliant, fully documented, and warrantied.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 100}>
                <article className="group relative rounded-xl border border-border bg-surface-2 p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] h-full">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-md border border-border bg-background text-foreground transition-all duration-300 group-hover:text-primary group-hover:border-primary/40 group-hover:shadow-[inset_0_0_18px_hsl(var(--primary)/0.25)]">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-foreground-subtle transition-all duration-300 group-hover:text-primary group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="font-display mt-6 text-xl sm:text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground-muted">{s.blurb}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-foreground-muted">
                        <Check className="h-4 w-4 text-foreground-subtle transition-colors group-hover:text-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
