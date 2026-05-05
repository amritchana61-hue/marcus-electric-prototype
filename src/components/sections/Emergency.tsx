import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const Emergency = () => {
  return (
    <section className="py-16 surface-1 border-y border-border">
      <div className="container">
        <Reveal>
          <div className="rounded-2xl border border-border bg-background p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10 animate-pulse-glow">
            <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emergency/15 text-emergency">
              <span className="absolute inset-0 rounded-xl bg-emergency/40 animate-pulse-ring" />
              <AlertTriangle className="relative h-6 w-6" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold tracking-widest uppercase text-emergency">24/7 Emergency</div>
              <h3 className="font-display mt-1 text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Power out? Sparking outlet? We&apos;re on the way.
              </h3>
              <p className="mt-2 text-sm text-foreground-muted max-w-xl">
                Our emergency team responds within 30 minutes across Toronto and the GTA — day or night.
              </p>
            </div>
            <Button asChild size="lg" variant="emergency" className="shrink-0 w-full md:w-auto">
              <a href={SITE.phoneHref}>
                <Phone className="h-4 w-4" />
                Call {SITE.phone}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
