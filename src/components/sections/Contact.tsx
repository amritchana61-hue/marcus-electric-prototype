import { useState } from "react";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 surface-1 border-t border-border">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Get in touch</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Free estimates. Honest answers.
          </h2>
          <p className="mt-4 text-foreground-muted text-pretty">
            Tell us about your project. Most quotes go out the same day.
          </p>

          <ul className="mt-10 space-y-4">
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background text-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground-subtle">Call</div>
                <a href={SITE.phoneHref} className="text-lg font-semibold text-foreground hover:text-primary">
                  {SITE.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background text-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground-subtle">Email</div>
                <a href={`mailto:${SITE.email}`} className="text-foreground hover:text-primary">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background text-foreground">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-foreground-subtle">Service area</div>
                <div className="text-foreground">{SITE.region}</div>
              </div>
            </li>
          </ul>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl border border-border bg-surface-2 p-6 md:p-8 transition-colors hover:border-border-hover"
        >
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-4 text-2xl font-bold">Got it.</h3>
              <p className="mt-2 text-foreground-muted">Marcus will be in touch shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-bold">Request an estimate</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Jane Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(416) 555-0000" required />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor="msg">Project details</Label>
                <Textarea id="msg" rows={4} placeholder="Briefly describe what you need..." required />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full">
                <Send className="h-4 w-4" /> Send Request
              </Button>
              <p className="mt-3 text-xs text-foreground-subtle text-center">
                By submitting, you agree to be contacted about your request.
              </p>
            </>
          )}
        </form>
        </Reveal>
      </div>
    </section>
  );
};
