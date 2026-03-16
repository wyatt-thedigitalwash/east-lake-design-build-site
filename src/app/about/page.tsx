import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Hammer, Eye, Mountain } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import InlineCTA from "@/components/InlineCTA";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "About Us | East Lake Design & Build | Pinellas County Design-Build Firm",
  description:
    "Learn about East Lake Design & Build — a design-build firm rooted in Pinellas County, FL. Custom homes and remodels built with integrity, craftsmanship, and lasting quality.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We do what we say. No shortcuts, no hidden costs, no excuses. Every decision is made with your best interest in mind.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship",
    description:
      "We hold ourselves to a standard most won't. Every joint, every finish, every detail is executed with pride and precision.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "You'll always know where your project stands. Open communication and honest timelines are non-negotiable.",
  },
  {
    icon: Mountain,
    title: "Durability",
    description:
      "We build for Florida's environment — engineered to handle heat, salt, and storms while maintaining beauty for decades.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold">
              About Us
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-6" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[Georgia,serif] text-4xl md:text-5xl text-green-primary leading-tight mb-6">
              Rooted in Pinellas County. Built on Integrity.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-text-dark/70 text-lg leading-relaxed max-w-3xl mx-auto">
              East Lake Design &amp; Build is a full-service design-build firm
              based in St. Petersburg, Florida. From custom new construction to
              transformative interior remodels, we bring together design vision
              and construction expertise under one roof — delivering projects
              with precision, transparency, and an uncompromising standard of
              quality.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="h-80 md:h-[500px] bg-gradient-to-br from-green-primary/20 to-muted/40 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={150}>
              <div>
                <p className="text-sm uppercase tracking-widest text-gold mb-2">
                  Our Approach
                </p>
                <div className="h-[2px] bg-gold w-16 mt-1 mb-6" />
                <h2 className="font-[Georgia,serif] text-3xl text-text-dark mb-6">
                  Design and Construction. One Team. One Vision.
                </h2>
                <p className="text-text-dark/70 leading-relaxed mb-4">
                  Unlike traditional contractors, we handle both the design and
                  build process in-house. This means fewer miscommunications,
                  tighter timelines, and a final result that matches your
                  original vision — not a diluted version of it.
                </p>
                <p className="text-text-dark/70 leading-relaxed mb-6">
                  Every project starts with listening. We take the time to
                  understand how you live, what you value, and what your property
                  demands. From there, our team handles everything from
                  architectural planning and permitting to material selection and
                  final finishes.
                </p>
                <Link
                  href="/contact"
                  className="group/link inline-flex items-center text-gold text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-green-primary"
                >
                  Start Your Project{" "}
                  <span className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold text-center">
              Our Values
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-12" />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((val, i) => (
              <AnimateOnScroll key={val.title} delay={i * 100}>
                <div className="bg-white border border-muted p-8">
                  <val.icon
                    className="text-gold mb-4"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-[Georgia,serif] text-xl text-text-dark mb-3">
                    {val.title}
                  </h3>
                  <p className="text-text-dark/70 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <InlineCTA headline="Ready to work with a team that builds the right way?" />

      {/* License & Service Area */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-[Georgia,serif] text-2xl text-green-primary mb-2">
              Licensed &amp; Insured
            </h2>
            <p className="text-text-dark/60 mb-8">
              Florida Certified Residential Contractor — CRC1335639
            </p>
            <p className="text-text-dark mb-4">
              Serving Pinellas County &amp; Greater Tampa Bay
            </p>
            <p className="text-text-dark/50 text-sm">
              St. Petersburg{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Clearwater{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Palm Harbor{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Largo{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Dunedin{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Safety Harbor{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Tarpon
              Springs{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Seminole{" "}
              <span className="text-gold/60 mx-1">&middot;</span> Tampa
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <PageCTA headline={"Your Vision Deserves\na Builder You Can Trust"} />
    </>
  );
}
