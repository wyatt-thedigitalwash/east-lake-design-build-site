"use client";

import Link from "next/link";
import { Ruler, Sun, MessageSquare, Shield } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useEffect, useState } from "react";

const valueProps = [
  {
    icon: Ruler,
    title: "Precision Craftsmanship",
    description: "Every detail is intentional. Every finish is flawless.",
  },
  {
    icon: Sun,
    title: "Built for Florida",
    description:
      "Engineered to endure heat, salt, and storms without sacrificing beauty.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Process",
    description: "Open communication, honest timelines, and no surprises.",
  },
  {
    icon: Shield,
    title: "Lasting Quality",
    description: "We build for generations, not for trends.",
  },
];

const featuredProjects = [
  { label: "Custom Home — St. Petersburg" },
  { label: "Kitchen Remodel — Clearwater" },
  { label: "Bathroom Renovation — Palm Harbor" },
];

function HeroFadeIn({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(1.5rem)",
        transition: "opacity 500ms ease-out, transform 500ms ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background with radial gradient for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #1a4a40 0%, #14372F 40%, #0E2A23 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <HeroFadeIn delay={200}>
            <p className="text-sm uppercase tracking-widest text-gold mb-6">
              Pinellas County&apos;s Premier Design-Build Firm
            </p>
          </HeroFadeIn>

          <HeroFadeIn delay={300}>
            <div className="h-[2px] bg-gold w-20 mx-auto mb-8" />
          </HeroFadeIn>

          <HeroFadeIn delay={400}>
            <h1 className="font-[Georgia,serif] uppercase text-5xl md:text-7xl text-white leading-tight mb-6">
              Built with Integrity.
              <br />
              Designed to Endure.
            </h1>
          </HeroFadeIn>

          <HeroFadeIn delay={600}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Custom homes and transformative remodels crafted with precision and
              pride.
            </p>
          </HeroFadeIn>

          <HeroFadeIn delay={800}>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold hover:text-green-primary"
            >
              Start Your Project
            </Link>
          </HeroFadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              What We Do
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-12" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Construction */}
            <AnimateOnScroll delay={0}>
              <div className="group border border-muted shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <div className="h-64 bg-gradient-to-br from-green-primary/20 to-muted/40 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-primary/0 transition-all duration-300 ease-in-out group-hover:bg-green-primary/10" />
                  <span className="relative text-text-dark/40 text-sm uppercase tracking-widest">
                    Project Photo
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-[Georgia,serif] text-2xl text-text-dark mb-3">
                    New Construction
                  </h3>
                  <p className="text-text-dark/70 mb-4 leading-relaxed">
                    Custom-designed homes built from the ground up, engineered
                    for Florida&apos;s climate and your lifestyle.
                  </p>
                  <Link
                    href="/services/new-construction"
                    className="group/link inline-flex items-center text-green-primary text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-gold"
                  >
                    Learn More{" "}
                    <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Interior Remodeling */}
            <AnimateOnScroll delay={150}>
              <div className="group border border-muted shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                <div className="h-64 bg-gradient-to-br from-muted/40 to-green-primary/20 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-green-primary/0 transition-all duration-300 ease-in-out group-hover:bg-green-primary/10" />
                  <span className="relative text-text-dark/40 text-sm uppercase tracking-widest">
                    Project Photo
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-[Georgia,serif] text-2xl text-text-dark mb-3">
                    Interior Remodeling
                  </h3>
                  <p className="text-text-dark/70 mb-4 leading-relaxed">
                    Kitchens, bathrooms, and whole-home renovations that
                    transform your space with expert craftsmanship.
                  </p>
                  <Link
                    href="/services/remodeling"
                    className="group/link inline-flex items-center text-green-primary text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-gold"
                  >
                    Learn More{" "}
                    <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why East Lake */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              Why East Lake
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-4" />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-text-dark text-center mb-16">
              The Standard of Quality in Pinellas County
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {valueProps.map((prop, i) => (
              <AnimateOnScroll key={prop.title} delay={i * 100}>
                <div className="group text-center md:text-left pb-8 border-b border-muted">
                  <prop.icon
                    className="text-gold mx-auto md:mx-0 mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-[Georgia,serif] text-xl text-text-dark mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-green-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              Featured Work
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-12" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimateOnScroll key={project.label} delay={i * 140}>
                <div className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                  {/* Placeholder background with scale effect */}
                  <div className="absolute inset-0 bg-cream/10 transition-transform duration-500 ease-in-out group-hover:scale-105 flex items-center justify-center">
                    <span className="text-cream/30 text-sm uppercase tracking-widest">
                      Project Photo
                    </span>
                  </div>

                  {/* Overlay text — hidden, slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-green-dark/90 backdrop-blur-sm p-5">
                    <p className="text-cream text-sm uppercase tracking-widest">
                      {project.label}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={420}>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="group/link inline-flex items-center text-cream text-sm uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-gold"
              >
                View All Projects{" "}
                <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-cream py-20 md:py-28 border-t border-b border-muted">
        <AnimateOnScroll>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="h-[2px] bg-gold w-24 mx-auto mb-8" />
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-green-primary mb-8">
              Ready to bring your vision to life?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:7273738368"
                className="text-text-dark text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-gold"
              >
                (727) 373-8368
              </a>
              <span className="text-text-dark/40 hidden sm:inline">or</span>
              <Link
                href="/contact"
                className="inline-block bg-white text-green-primary border border-muted px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold hover:text-green-primary hover:border-gold"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
