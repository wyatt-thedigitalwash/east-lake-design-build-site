import Link from "next/link";
import { Phone } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface PageCTAProps {
  headline: string;
}

export default function PageCTA({ headline }: PageCTAProps) {
  return (
    <section className="bg-green-primary py-24 md:py-32">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Left Column */}
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-widest text-gold mb-3">
                Start Your Project
              </p>
              <div className="h-[2px] bg-gold w-12 mb-8" />
              <h2
                className="font-[Georgia,serif] text-3xl md:text-5xl text-cream leading-tight mb-6 whitespace-pre-line"
              >
                {headline}
              </h2>
              <p className="text-cream/70 text-lg mb-8 max-w-lg">
                Schedule a free, no-pressure consultation and let&apos;s talk
                about what&apos;s possible.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-gold text-green-primary px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold/85"
                >
                  Get a Free Consultation
                </Link>
                <a
                  href="tel:7273738368"
                  className="inline-flex items-center gap-2 text-cream hover:text-gold transition-colors duration-300 underline underline-offset-4"
                >
                  <Phone size={16} strokeWidth={1.5} />
                  <span>(727) 373-8368</span>
                </a>
              </div>
            </div>

            {/* Right Column — hidden on mobile */}
            <div className="hidden md:block md:col-span-2">
              <div className="border-l-4 border-gold h-80 bg-green-dark/50 flex items-center justify-center">
                <span className="text-cream/20 text-sm uppercase tracking-widest">
                  Project Photo
                </span>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
