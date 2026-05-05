import { Zap, ShieldCheck, BadgeCheck, Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV, SERVICE_AREAS } from "@/lib/content";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <footer className="border-t border-border surface-1">
      <div className="container py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-border text-sm">
        <span className="inline-flex items-center gap-2 text-foreground-muted group">
          <ShieldCheck className="h-4 w-4 text-primary transition-transform group-hover:scale-110" /> ESA Licensed
        </span>
        <span className="inline-flex items-center gap-2 text-foreground-muted group">
          <BadgeCheck className="h-4 w-4 text-primary transition-transform group-hover:scale-110" /> Fully Insured · $5M
        </span>
        <span className="text-foreground-muted">{SITE.esa}</span>
      </div>

      <div className="container py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <Link to={pathname === "/" ? "#top" : "/"} className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/15 text-primary transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5 fill-primary" />
            </span>
            <span className="font-display text-lg font-bold">Marcus Electric</span>
          </Link>
          <p className="mt-4 text-sm text-foreground-muted max-w-xs">
            Professional electrical work for homes and businesses across Toronto and the GTA.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">Site</div>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={sectionHref(n.href)}
                  className="text-sm text-foreground-muted hover:text-primary transition-colors inline-block hover:translate-x-0.5"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">Service areas</div>
          <ul className="mt-4 space-y-2.5">
            {SERVICE_AREAS.map((a) => (
              <li key={a} className="text-sm text-foreground-muted">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-foreground-subtle">Contact</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors group"
              >
                <Phone className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors group"
              >
                <Mail className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                {SITE.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-foreground-muted">
              <MapPin className="h-3.5 w-3.5" />
              {SITE.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-5 text-xs text-foreground-subtle text-center">
          © {new Date().getFullYear()} Marcus Electric. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
