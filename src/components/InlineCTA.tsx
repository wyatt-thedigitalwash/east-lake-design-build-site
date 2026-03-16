import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface InlineCTAProps {
  headline: string;
}

export default function InlineCTA({ headline }: InlineCTAProps) {
  return (
    <section className="bg-cream py-10">
      <AnimateOnScroll>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-[Georgia,serif] text-xl text-green-primary mb-4">
            {headline}
          </h3>
          <p className="text-text-dark/70 text-sm">
            Call us at{" "}
            <a
              href="tel:7273738368"
              className="text-gold font-bold hover:text-green-primary transition-colors duration-300"
            >
              (727) 373-8368
            </a>{" "}
            or{" "}
            <Link
              href="/contact"
              className="text-gold hover:underline transition-all duration-300"
            >
              request a consultation
            </Link>
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
