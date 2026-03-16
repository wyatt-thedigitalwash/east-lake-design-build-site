"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "New Construction", href: "/services/new-construction" },
  { label: "Remodeling", href: "/services/remodeling" },
];

const mobileLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "— New Construction", href: "/services/new-construction", indent: true },
  { label: "— Remodeling", href: "/services/remodeling", indent: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen && menuContentRef.current) {
      setMenuHeight(menuContentRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-green-primary border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/eastlake-design-build-site-logo.png"
            alt="East Lake Design & Build"
            width={160}
            height={48}
            className="h-10 lg:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-cream hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="font-sans text-sm uppercase tracking-widest text-cream hover:text-gold transition-colors"
            >
              Services
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2">
                <div className="bg-green-dark border border-cream/10 shadow-lg min-w-[200px]">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3 text-sm text-cream hover:bg-cream/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-cream hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-gold text-white text-sm uppercase tracking-widest px-5 py-2.5 hover:bg-gold/85 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger — crossfade icons */}
        <button
          className="lg:hidden text-cream relative w-7 h-7"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <Menu
            size={28}
            className="absolute inset-0 transition-opacity duration-200 ease-in-out"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <X
            size={28}
            className="absolute inset-0 transition-opacity duration-200 ease-in-out"
            style={{ opacity: mobileOpen ? 1 : 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu — animated slide */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuHeight,
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div ref={menuContentRef} className="bg-green-primary border-t border-cream/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {mobileLinks.map((link, i) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm uppercase tracking-widest py-2 transition-opacity duration-300 ease-in-out ${
                  link.indent ? "text-cream/70 pl-4" : "text-cream"
                }`}
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-white text-sm uppercase tracking-widest px-5 py-3 text-center mt-2 hover:bg-gold/85 transition-all duration-300 ease-in-out"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transitionDelay: mobileOpen ? `${mobileLinks.length * 50}ms` : "0ms",
              }}
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
