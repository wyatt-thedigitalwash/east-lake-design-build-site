import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Our Work | East Lake Design & Build | Project Portfolio",
  description:
    "Browse custom homes, kitchen remodels, bathroom renovations, and whole-home transformations by East Lake Design & Build in Pinellas County, FL.",
};

const projects = [
  { type: "Custom Home", title: "Waterfront Estate — St. Petersburg" },
  { type: "Kitchen Remodel", title: "Modern Kitchen — Clearwater" },
  { type: "Bathroom Renovation", title: "Spa Bathroom — Palm Harbor" },
  { type: "Whole-Home Renovation", title: "Complete Renovation — Largo" },
  { type: "Custom Home", title: "Coastal Contemporary — Dunedin" },
  { type: "Kitchen Remodel", title: "Chef's Kitchen — Safety Harbor" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold">
              Portfolio
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-6" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[Georgia,serif] text-4xl md:text-5xl text-green-primary leading-tight mb-6">
              Our Work Speaks for Itself
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-text-dark/70 text-lg leading-relaxed max-w-3xl mx-auto">
              From custom new construction to complete interior transformations —
              browse a selection of projects built with East Lake&apos;s standard
              of quality.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} delay={i * 100}>
                <div className="group border border-muted overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-primary/15 to-muted/30 transition-transform duration-500 ease-in-out group-hover:scale-[1.02] flex items-center justify-center">
                      <span className="text-text-dark/30 text-sm uppercase tracking-widest">
                        Project Photo
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <p className="text-gold text-xs uppercase tracking-widest mb-1">
                      {project.type}
                    </p>
                    <h3 className="font-[Georgia,serif] text-lg text-text-dark">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-primary py-20 md:py-28">
        <AnimateOnScroll>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-cream mb-8">
              Have a Project in Mind?
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-gold text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold/85"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </>
  );
}
