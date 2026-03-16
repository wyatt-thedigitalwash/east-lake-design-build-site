import type { Metadata } from "next";
import Link from "next/link";
import { PenTool, Hammer, Home, Sun, Droplets, CloudLightning } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import InlineCTA from "@/components/InlineCTA";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Custom Home Construction | East Lake Design & Build | Pinellas County",
  description:
    "Custom new home construction in St. Petersburg and Pinellas County, FL. East Lake Design & Build creates homes engineered for Florida — built with integrity and designed to endure.",
};

const phases = [
  {
    num: "01",
    title: "Design & Planning",
    icon: PenTool,
    description:
      "We begin with collaboration — understanding your vision, your lifestyle, and your goals. From architectural planning to material selection, every decision is intentional and transparent.",
  },
  {
    num: "02",
    title: "Build & Execute",
    icon: Hammer,
    description:
      "Our team delivers precision craftsmanship with complete accountability. You'll experience open communication, organized timelines, and daily commitment to excellence on every site.",
  },
  {
    num: "03",
    title: "Deliver & Protect",
    icon: Home,
    description:
      "When we hand you the keys, you can be confident in a home built to endure. Every detail is finished to perfection and backed by our standard of quality and long-term durability.",
  },
];

const floridaPoints = [
  {
    icon: Sun,
    title: "Heat Resistant",
    description:
      "Materials and systems selected to perform in sustained high temperatures and intense UV exposure.",
  },
  {
    icon: Droplets,
    title: "Salt & Moisture Protected",
    description:
      "Coastal-grade finishes and construction methods that resist corrosion, mold, and humidity damage.",
  },
  {
    icon: CloudLightning,
    title: "Storm Engineered",
    description:
      "Built to exceed Florida building codes for wind resistance, impact protection, and structural integrity.",
  },
];

export default function NewConstructionPage() {
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
              New Construction
            </p>
            <div className="h-[2px] bg-gold w-20 mx-auto mb-8" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[Georgia,serif] uppercase text-4xl md:text-6xl text-white leading-tight mb-6">
              Custom Homes Built for Florida.
              <br />
              Built for Life.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Every East Lake home is designed with intention and built without
              compromise — from foundation to finish.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <Link
              href="/contact"
              className="inline-block bg-white text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold hover:text-green-primary"
            >
              Schedule a Consultation
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="h-80 md:h-[450px] bg-gradient-to-br from-green-primary/20 to-muted/40 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div>
                <h2 className="font-[Georgia,serif] text-3xl text-text-dark mb-6">
                  Your Vision. Our Expertise.
                </h2>
                <p className="text-text-dark/70 leading-relaxed mb-4">
                  Building a custom home is one of the most significant
                  investments you&apos;ll ever make. At East Lake Design &amp;
                  Build, we make the process seamless — guiding you from initial
                  concept through final walkthrough with clarity, precision, and
                  care.
                </p>
                <p className="text-text-dark/70 leading-relaxed">
                  Whether it&apos;s a luxury waterfront estate, a contemporary
                  coastal retreat, or a family home designed around how you
                  actually live, our team brings architectural insight and
                  hands-on construction expertise to every project.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 3-Phase Process */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              The Process
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-4" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-text-dark text-center mb-16">
              Built Right. From Start to Finish.
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-5xl mx-auto">
            {phases.map((phase, i) => (
              <AnimateOnScroll
                key={phase.num}
                delay={i * 150}
                className="relative md:px-8"
              >
                <phase.icon
                  className="text-gold mb-4"
                  size={28}
                  strokeWidth={1.5}
                />
                <p className="font-[Georgia,serif] text-4xl font-bold text-gold mb-3">
                  {phase.num}
                </p>
                <h3 className="font-[Georgia,serif] text-xl text-text-dark mb-3">
                  {phase.title}
                </h3>
                <p className="text-text-dark/70 leading-relaxed">
                  {phase.description}
                </p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-10 right-0 w-8 border-t-2 border-dashed border-gold/40" />
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <InlineCTA headline="Have questions about building a custom home?" />

      {/* Built for Florida */}
      <section className="bg-green-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              Built for Florida
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-4" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-cream text-center mb-16">
              Engineered to Thrive in Florida&apos;s Environment
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {floridaPoints.map((point, i) => (
              <AnimateOnScroll key={point.title} delay={i * 150}>
                <div className="text-center">
                  <point.icon
                    className="text-gold mx-auto mb-4"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-[Georgia,serif] text-xl text-cream mb-3">
                    {point.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">
                    {point.description}
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
                <div className="h-64 bg-gradient-to-br from-green-primary/15 to-muted/30 flex items-center justify-center">
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
      <PageCTA headline={"Ready to Build\nYour Forever Home?"} />
    </>
  );
}
