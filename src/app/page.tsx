import Link from "next/link";
import { Ruler, Sun, MessageSquare, Shield } from "lucide-react";

const valueProps = [
  {
    icon: Ruler,
    title: "Precision Craftsmanship",
    description:
      "Every detail is intentional. Every finish is flawless.",
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
    description:
      "Open communication, honest timelines, and no surprises.",
  },
  {
    icon: Shield,
    title: "Lasting Quality",
    description:
      "We build for generations, not for trends.",
  },
];

const featuredProjects = [
  { label: "Custom Home — St. Petersburg" },
  { label: "Kitchen Remodel — Clearwater" },
  { label: "Bathroom Renovation — Palm Harbor" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-green-primary flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-gold mb-6">
            Pinellas County&apos;s Premier Design-Build Firm
          </p>
          <h1 className="font-[Georgia,serif] uppercase text-5xl md:text-7xl text-white leading-tight mb-6">
            Built with Integrity.
            <br />
            Designed to Endure.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Custom homes and transformative remodels crafted with precision and
            pride.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-white transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gold text-center mb-12">
            What We Do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Construction */}
            <div className="border border-muted shadow-sm">
              <div className="h-64 bg-gradient-to-br from-green-primary/20 to-muted/40 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-[Georgia,serif] text-2xl text-text-dark mb-3">
                  New Construction
                </h3>
                <p className="text-text-dark/70 mb-4 leading-relaxed">
                  Custom-designed homes built from the ground up, engineered for
                  Florida&apos;s climate and your lifestyle.
                </p>
                <Link
                  href="/services/new-construction"
                  className="text-green-primary text-sm font-semibold uppercase tracking-widest hover:text-gold transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>

            {/* Interior Remodeling */}
            <div className="border border-muted shadow-sm">
              <div className="h-64 bg-gradient-to-br from-muted/40 to-green-primary/20 flex items-center justify-center">
                <span className="text-text-dark/40 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-[Georgia,serif] text-2xl text-text-dark mb-3">
                  Interior Remodeling
                </h3>
                <p className="text-text-dark/70 mb-4 leading-relaxed">
                  Kitchens, bathrooms, and whole-home renovations that transform
                  your space with expert craftsmanship.
                </p>
                <Link
                  href="/services/remodeling"
                  className="text-green-primary text-sm font-semibold uppercase tracking-widest hover:text-gold transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why East Lake */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gold text-center mb-4">
            Why East Lake
          </p>
          <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-text-dark text-center mb-16">
            The Standard of Quality in Pinellas County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {valueProps.map((prop) => (
              <div key={prop.title} className="text-center md:text-left">
                <prop.icon
                  className="text-gold mx-auto md:mx-0 mb-4"
                  size={36}
                  strokeWidth={1.5}
                />
                <h3 className="font-[Georgia,serif] text-xl text-text-dark mb-2">
                  {prop.title}
                </h3>
                <p className="text-text-dark/70 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-green-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm uppercase tracking-widest text-gold text-center mb-12">
            Featured Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.label}
                className="relative aspect-[3/4] bg-cream/10 flex items-end"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cream/30 text-sm uppercase tracking-widest">
                    Project Photo
                  </span>
                </div>
                <div className="relative w-full bg-green-primary/80 backdrop-blur-sm p-5">
                  <p className="text-cream text-sm uppercase tracking-widest">
                    {project.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="text-cream text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-cream py-20 md:py-28 border-t border-b border-muted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[Georgia,serif] text-3xl md:text-4xl text-green-primary mb-8">
            Ready to bring your vision to life?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:7273738368"
              className="text-text-dark text-lg font-semibold hover:text-green-primary transition-colors"
            >
              (727) 373-8368
            </a>
            <span className="text-text-dark/40 hidden sm:inline">or</span>
            <Link
              href="/contact"
              className="inline-block bg-green-primary text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-green-dark transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
