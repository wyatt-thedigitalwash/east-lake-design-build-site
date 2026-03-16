"use client";

import { useState } from "react";
import Link from "next/link";
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
    <nav className="sticky top-0 z-50 bg-cream border-b border-muted">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-[Georgia,serif] text-green-primary text-lg tracking-wide uppercase font-bold">
            East Lake
          </span>
          <span className="font-[Georgia,serif] text-green-primary text-xs tracking-wide uppercase">
            Design &amp; Build
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-text-dark hover:text-green-primary transition-colors"
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
            <button className="font-sans text-sm uppercase tracking-widest text-text-dark hover:text-green-primary transition-colors">
              Services
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-0 pt-2">
                <div className="bg-white border border-muted shadow-lg min-w-[200px]">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-3 text-sm text-text-dark hover:bg-cream transition-colors"
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
              className="font-sans text-sm uppercase tracking-widest text-text-dark hover:text-green-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="bg-green-primary text-white text-sm uppercase tracking-widest px-5 py-2.5 hover:bg-green-dark transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-muted">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-text-dark py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-text-dark py-2"
            >
              About
            </Link>
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-widest text-text-dark py-2">
                Services
              </span>
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-widest text-text-dark py-2 pl-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/portfolio"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-text-dark py-2"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-widest text-text-dark py-2"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-green-primary text-white text-sm uppercase tracking-widest px-5 py-3 text-center mt-2 hover:bg-green-dark transition-colors"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
