import type { Metadata } from "next";
import Link from "next/link";
import { MessagesSquare, Clock, DollarSign } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title:
    "Our Services | East Lake Design & Build | Custom Homes & Remodeling",
  description:
    "East Lake Design & Build offers custom new home construction and interior remodeling services in St. Petersburg and Pinellas County, FL. Built with integrity. Designed to endure.",
};

const designBuildPoints = [
  {
    icon: MessagesSquare,
    title: "Streamlined Communication",
    description:
      "One point of contact from design through construction. No lost-in-translation moments between separate architects and contractors.",
  },
  {
    icon: Clock,
    title: "Faster Timelines",
    description:
      "Design and construction overlap where possible, reducing total project time compared to the traditional bid process.",
  },
  {
    icon: DollarSign,
    title: "Cost Certainty",
    description:
      "Detailed planning upfront means fewer surprises, fewer change orders, and a budget you can trust from day one.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold">
              Our Services
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-6" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[Georgia,serif] text-4xl md:text-5xl text-green-primary leading-tight mb-6">
              Design-Build Done the Right Way
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-text-dark/70 text-lg leading-relaxed max-w-3xl mx-auto">
              From the ground up or from the studs out — East Lake Design &amp;
              Build brings design vision and construction expertise together
              under one roof. No middlemen. No miscommunication. Just results.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Two Service Blocks */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">
          {/* Block 1: New Construction */}
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-80 md:h-[450px] bg-gradient-to-br from-green-primary/20 to-muted/40 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold mb-3">
                  New Construction
                </p>
                <div className="h-[2px] bg-gold w-12 mb-6" />
                <h2 className="font-[Georgia,serif] text-3xl text-green-primary mb-6">
                  Custom Homes Built for Florida
                </h2>
                <p className="text-text-dark/70 leading-relaxed mb-4">
                  We design and build custom homes engineered to thrive in
                  Florida&apos;s environment — from luxury waterfront estates to
                  contemporary coastal retreats. Every home starts with your
                  vision and ends with a space built to stand the test of time.
                </p>
                <p className="text-text-dark/60 text-sm leading-relaxed mb-6">
                  Architectural planning, permitting, material selection, full
                  construction management, and final finishes — all handled by
                  one team.
                </p>
                <Link
                  href="/services/new-construction"
                  className="group/link inline-flex items-center text-gold text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-green-primary"
                >
                  Explore New Construction{" "}
                  <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Block 2: Interior Remodeling (reversed) */}
          <AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-xs uppercase tracking-widest text-gold mb-3">
                  Interior Remodeling
                </p>
                <div className="h-[2px] bg-gold w-12 mb-6" />
                <h2 className="font-[Georgia,serif] text-3xl text-green-primary mb-6">
                  Transform Any Space in Your Home
                </h2>
                <p className="text-text-dark/70 leading-relaxed mb-4">
                  Kitchens, bathrooms, whole-home renovations, and custom
                  millwork — we bring expert craftsmanship and fearless
                  creativity to every remodel. Whether it&apos;s one room or
                  your entire home, the result is a space that feels like it was
                  always meant to be.
                </p>
                <p className="text-text-dark/60 text-sm leading-relaxed mb-6">
                  Kitchen remodels, bathroom renovations, whole-home
                  transformations, custom finishes, cabinetry, and specialty
                  woodwork.
                </p>
                <Link
                  href="/services/remodeling"
                  className="group/link inline-flex items-center text-gold text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-green-primary"
                >
                  Explore Remodeling{" "}
                  <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
              <div className="order-1 md:order-2 h-80 md:h-[450px] bg-gradient-to-br from-muted/40 to-green-primary/20 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why Design-Build */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              Why Design-Build?
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-4" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-green-primary text-center mb-16">
              One Team. One Process. Better Results.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {designBuildPoints.map((point, i) => (
              <AnimateOnScroll key={point.title} delay={i * 150}>
                <div className="bg-white border border-muted p-8">
                  <point.icon
                    className="text-gold mb-4"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-[Georgia,serif] text-xl text-text-dark mb-3">
                    {point.title}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <PageCTA headline={"Let's Talk About\nYour Next Project"} />
    </>
  );
}
