import type { Metadata } from "next";
import Link from "next/link";
import { CookingPot, Bath, Home, Paintbrush } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Interior Remodeling | East Lake Design & Build | St. Petersburg, FL",
  description:
    "Kitchen remodels, bathroom renovations, and whole-home transformations in Pinellas County. East Lake Design & Build delivers expert craftsmanship and fearless creativity.",
};

const services = [
  {
    icon: CookingPot,
    title: "Kitchen Remodels",
    description:
      "Custom cabinetry, premium countertops, modern layouts, and finishes that make your kitchen the centerpiece of your home.",
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description:
      "Walk-in showers, freestanding tubs, custom tile work, and spa-like finishes designed for comfort and elegance.",
  },
  {
    icon: Home,
    title: "Whole-Home Renovations",
    description:
      "Complete interior transformations — new layouts, updated systems, modern finishes, and cohesive design throughout.",
  },
  {
    icon: Paintbrush,
    title: "Custom Finishes & Millwork",
    description:
      "Crown molding, built-in shelving, custom trim, and specialty woodwork that adds character and craftsmanship.",
  },
];

export default function RemodelingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-green-primary flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #1a4a40 0%, #14372F 40%, #0E2A23 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold mb-6">
              Interior Remodeling
            </p>
            <div className="h-[2px] bg-gold w-20 mx-auto mb-8" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[Georgia,serif] uppercase text-4xl md:text-6xl text-white leading-tight mb-6">
              Transform Your Space.
              <br />
              Elevate Your Life.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Expert craftsmanship for kitchens, bathrooms, and whole-home
              renovations — designed around how you live.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold hover:text-green-primary"
            >
              Start Your Remodel
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="h-80 md:h-[450px] bg-gradient-to-br from-muted/40 to-green-primary/20 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div>
                <h2 className="font-[Georgia,serif] text-3xl text-text-dark mb-6">
                  Fearless Creativity. Flawless Execution.
                </h2>
                <p className="text-text-dark/70 leading-relaxed mb-4">
                  Whether you&apos;re reimagining a single room or transforming
                  your entire home, East Lake Design &amp; Build brings the same
                  level of precision and care to every remodel. We don&apos;t shy
                  away from complex designs or ambitious ideas — we thrive on
                  them.
                </p>
                <p className="text-text-dark/70 leading-relaxed">
                  From initial concept to the final reveal, our team manages
                  every detail so you can enjoy the process without the stress.
                  The result? A space that feels like it was always meant to be.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              What We Remodel
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-12" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((svc, i) => (
              <AnimateOnScroll key={svc.title} delay={i * 100}>
                <div className="border border-muted p-8">
                  <svc.icon
                    className="text-gold mb-4"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-[Georgia,serif] text-xl text-text-dark mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              Our Work
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-12" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <AnimateOnScroll key={n} delay={(n - 1) * 100}>
                <div className="h-64 bg-gradient-to-br from-muted/30 to-green-primary/15 flex items-center justify-center">
                  <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                    Project Photo
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={400}>
            <div className="text-center mt-10">
              <Link
                href="/portfolio"
                className="group/link inline-flex items-center text-green-primary text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-gold"
              >
                View Full Portfolio{" "}
                <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-primary py-20 md:py-28">
        <AnimateOnScroll>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-cream mb-8">
              Ready to Transform Your Space?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-gold text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold/85"
            >
              Get a Free Consultation
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
