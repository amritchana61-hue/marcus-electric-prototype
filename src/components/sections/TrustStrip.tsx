import { ShieldCheck, BadgeCheck, Clock, Hammer } from "lucide-react";
import { TRUST } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const ICONS = [ShieldCheck, BadgeCheck, Clock, Hammer];

export const TrustStrip = () => {
  return (
    <section aria-label="Credentials" className="border-y border-border surface-1">
      <div className="container py-6 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5">
        {TRUST.map((t, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={t.label} delay={i * 80}>
              <div className="group flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border bg-surface-2 text-foreground transition-all group-hover:border-border-hover group-hover:text-primary">
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-foreground leading-tight">{t.label}</div>
                  <div className="text-xs text-foreground-subtle truncate">{t.sub}</div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
