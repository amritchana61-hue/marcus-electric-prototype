import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/Reveal";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-20 md:py-28 surface-1 border-t border-border">
      <div className="container grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
        <div className="text-center lg:text-left">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Get in touch</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Free estimates. Honest answers.
          </h2>
          <p className="mt-4 text-foreground-muted text-pretty">
            Tell us about your project. Most quotes go out the same day.
          </p>

          <div className="mt-10 hidden overflow-hidden rounded-xl border border-border lg:block">
            <img
              src="/contact-quote.png"
              alt="Electrician preparing a project estimate"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[3/2] h-full w-full object-cover"
            />
          </div>
        </div>
        </Reveal>

        <Reveal delay={120} className="lg:h-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-xl border border-border bg-surface-2 p-6 transition-colors hover:border-border-hover md:p-8 lg:flex lg:h-full lg:flex-col lg:justify-center"
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
