import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | East Lake Design & Build | Free Consultation",
  description:
    "Schedule a free consultation with East Lake Design & Build. Custom homes and interior remodeling in St. Petersburg and Pinellas County, FL. Call 727-373-8368.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-sm uppercase tracking-widest text-gold">
              Contact Us
            </p>
            <div className="h-[2px] bg-gold w-16 mx-auto mt-3 mb-6" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="font-[Georgia,serif] text-4xl md:text-5xl text-green-primary leading-tight mb-6">
              Let&apos;s Build Something Exceptional
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-text-dark/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us about your project and we&apos;ll get back to you within
              one business day.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <AnimateOnScroll className="lg:col-span-3">
              <ContactForm />
            </AnimateOnScroll>

            {/* Sidebar — 2 cols */}
            <AnimateOnScroll delay={150} className="lg:col-span-2">
              <div className="bg-cream p-8">
                <h3 className="font-[Georgia,serif] text-xl text-green-primary mb-6">
                  Get in Touch
                </h3>

                <div className="flex items-start gap-3 mb-5">
                  <Phone
                    className="text-gold mt-0.5 shrink-0"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <a
                    href="tel:7273738368"
                    className="text-text-dark text-sm hover:text-gold transition-colors duration-300"
                  >
                    (727) 373-8368
                  </a>
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <Mail
                    className="text-gold mt-0.5 shrink-0"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <a
                    href="mailto:Office@eldesignbuild.com"
                    className="text-text-dark text-sm hover:text-gold transition-colors duration-300"
                  >
                    Office@eldesignbuild.com
                  </a>
                </div>

                <div className="flex items-start gap-3 mb-6">
                  <MapPin
                    className="text-gold mt-0.5 shrink-0"
                    size={18}
                    strokeWidth={1.5}
                  />
                  <span className="text-text-dark text-sm">
                    St. Petersburg, FL 33705
                  </span>
                </div>

                <div className="border-t border-muted pt-5 mb-5">
                  <p className="text-sm font-semibold text-text-dark mb-1">
                    License
                  </p>
                  <p className="text-text-dark/60 text-sm">CRC1335639</p>
                </div>

                <div className="border-t border-muted pt-5 mb-5">
                  <p className="text-sm font-semibold text-text-dark mb-2">
                    Service Area
                  </p>
                  <p className="text-text-dark/50 text-sm">
                    St. Petersburg · Clearwater · Palm Harbor · Largo · Dunedin ·
                    Safety Harbor · Tarpon Springs · Seminole · Tampa
                  </p>
                </div>

                <div className="border-t border-muted pt-5">
                  <p className="text-text-dark/70 text-sm mb-2">
                    Prefer to call?
                  </p>
                  <a
                    href="tel:7273738368"
                    className="text-green-primary font-semibold text-lg hover:text-gold transition-colors duration-300"
                  >
                    (727) 373-8368
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
