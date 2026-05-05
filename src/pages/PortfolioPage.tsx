import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { PORTFOLIO } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section id="top" className="pt-32 pb-20 md:pt-40 md:pb-28 surface-1 border-b border-border">
          <div className="container">
            <Reveal>
              <div className="max-w-3xl">
                <Button asChild variant="outline" size="sm" className="mb-8">
                  <Link to="/">
                    <ArrowLeft className="h-4 w-4" />
                    Back Home
                  </Link>
                </Button>
                <span className="text-xs font-semibold tracking-widest uppercase text-primary">Portfolio</span>
                <h1 className="font-display mt-3 text-4xl sm:text-5xl md:text-7xl font-bold text-balance">
                  Recent electrical work across Toronto.
                </h1>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO.map((p) => (
                <Reveal key={p.title}>
                  <article className="group overflow-hidden rounded-2xl border border-border bg-surface-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(250,204,21,0.25)]">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>
                    <div className="border-t border-border p-6">
                      <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-background">
                        {p.tag}
                      </span>
                      <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-foreground">
                        {p.title}
                      </h2>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-foreground-muted">
                        <MapPin className="h-4 w-4 text-primary" />
                        {p.location}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
