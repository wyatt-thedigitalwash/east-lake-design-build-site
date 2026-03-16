"use client";

import { useState } from "react";
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

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
            <button className="font-sans text-sm uppercase tracking-widest text-cream hover:text-gold transition-colors">
              Services
            </button>
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

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-green-primary border-t border-cream/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-cream py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-cream py-2"
            >
              About
            </Link>
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-widest text-cream py-2">
                Services
              </span>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-widest text-cream/70 py-2 pl-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-cream py-2"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-cream py-2"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-white text-sm uppercase tracking-widest px-5 py-3 text-center mt-2 hover:bg-gold/85 transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
