import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "New Construction", href: "/services/new-construction" },
  { label: "Remodeling", href: "/services/remodeling" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-green-primary text-cream">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div>
            <Image
              src="/assets/eastlake-design-build-logo-white.png"
              alt="East Lake Design & Build"
              width={160}
              height={48}
              className="h-12 w-auto mb-4"
            />
            <p className="text-cream/70 text-sm leading-relaxed">
              Built with Integrity. Designed to Endure.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-[Georgia,serif] text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-[Georgia,serif] text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-cream/70">
              <li>
                <a
                  href="tel:7273738368"
                  className="hover:text-white transition-colors"
                >
                  (727) 373-8368
                </a>
              </li>
              <li>
                <a
                  href="mailto:Office@eldesignbuild.com"
                  className="hover:text-white transition-colors"
                >
                  Office@eldesignbuild.com
                </a>
              </li>
              <li>St. Petersburg, FL 33705</li>
            </ul>
          </div>

          {/* Column 4 — License */}
          <div>
            <h4 className="font-[Georgia,serif] text-sm uppercase tracking-widest mb-4">
              Licensed &amp; Insured
            </h4>
            <p className="text-cream/70 text-sm mb-2">CRC1335639</p>
            <p className="text-cream/70 text-sm">
              Serving Pinellas County &amp; Tampa Bay
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted/20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-xs">
            &copy; 2025 East Lake Design &amp; Build. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs italic text-center">
            &ldquo;For every house is built by someone, but the builder of all
            things is God.&rdquo; &mdash; Hebrews 3:4
          </p>
          <div>{/* Reserved for social icons */}</div>
        </div>
      </div>
    </footer>
  );
}
