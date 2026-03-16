# East Lake Design Build

## Framework

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Resend
- **Icons:** Lucide React

## Brand

- **Business Name:** East Lake Design & Build
- **Tagline:** Built with Integrity. Designed to Endure.
- **Industry:** Design-build firm — custom new construction + interior remodeling
- **Location:** St. Petersburg, FL 33705 (serves Pinellas County & greater Tampa Bay)
- **License:** CRC1335639
- **Phone:** 727-373-8368
- **Email:** Office@eldesignbuild.com
- **Current Domain:** eldesignbuild.com

## Brand Voice

- Premium but approachable — not corporate, not casual
- Confident, direct, craftsman-like language
- Emphasize: integrity, precision, durability, Florida-specific expertise
- Avoid: salesy language, generic contractor clichés, "we're the best" claims
- Faith element: Hebrews 3:4 verse placed subtly in the footer

## Color Palette

- **Primary (Dark Green):** #14372F
- **Secondary (Cream/Off-White):** #F5F1EB
- **Accent (Gold):** #CF9941
- **Text Dark:** #1A1A1A
- **Text Light:** #FFFFFF
- **Muted/Border:** #D4CBC2

## Typography

- **Headings:** font-family: 'Georgia', serif — uppercase for hero/section headers
- **Body:** font-family: 'Inter', sans-serif via next/font/google
- **Accent/Small Labels:** Inter with tracking-widest, uppercase, text-sm

## Design Direction

- Clean, high-end, editorial feel — think Restoration Hardware meets a premium builder
- Big photography is the hero (placeholders for now, will swap with real project photos later)
- Generous whitespace, no clutter
- Subtle animations on scroll (fade-in sections)
- Dark green + cream as the dominant palette, gold used sparingly for accents and CTAs

## Pages & Structure

### 1. Home (/)

- **Hero:** Full-width image placeholder with headline "Built with Integrity. Designed to Endure." + subtext "Custom homes and transformative remodels in Pinellas County." + CTA button "Start Your Project"
- **Services Overview:** Two cards — "New Construction" and "Interior Remodeling" — with brief descriptions and links to service pages
- **Why East Lake:** 3-4 value props in a grid (Precision Craftsmanship, Built for Florida, Transparent Process, Lasting Quality)
- **Featured Work:** 3 placeholder project images in a row with overlay text (will become real portfolio items)
- **CTA Banner:** "Ready to bring your vision to life?" + phone number + link to contact page
- **Footer**

### 2. About (/about)

- **Intro Section:** Company story — who they are, Pinellas County roots, design-build approach
- **Values Section:** 3-4 core values with icons (Integrity, Craftsmanship, Transparency, Durability)
- **Service Area:** Text mention of Pinellas County, St. Petersburg, Clearwater, Palm Harbor, Largo, Tampa Bay area
- **License & Insurance:** Display CRC1335639 prominently
- **CTA:** Contact link

### 3. New Construction (/services/new-construction)

- **Hero:** Full-width image placeholder + "Custom Homes Built for Florida. Built for Life."
- **Intro paragraph:** Design-build approach for new custom homes
- **3-Phase Process:** Design & Planning → Build & Execute → Deliver & Protect (each with icon + description)
- **Built for Florida Section:** Emphasis on heat, salt, storm durability — this is a differentiator
- **Gallery:** 3-4 placeholder images in a grid
- **CTA:** "Start Your Build" → links to contact

### 4. Interior Remodeling (/services/remodeling)

- **Hero:** Full-width image placeholder + "Transform Your Space with Expert Craftsmanship"
- **Intro paragraph:** Kitchens, bathrooms, whole-home remodels
- **Service List:** Kitchen Remodels, Bathroom Remodels, Whole-Home Renovations, Custom Finishes & Millwork — each with a brief description
- **Gallery:** 3-4 placeholder images
- **CTA:** "Let's Talk About Your Remodel" → links to contact

### 5. Portfolio (/portfolio)

- **Header:** "Our Work"
- **Grid:** 6 placeholder project cards (image + project type label like "Kitchen Remodel" or "Custom Home")
- **Note:** Placeholder state for now — will add real projects later
- **CTA:** Contact link

### 6. Contact (/contact)

- **Header:** "Let's Build Something Exceptional"
- **Contact Form Fields:** Name, Email, Phone, Project Type (dropdown: New Construction, Kitchen Remodel, Bathroom Remodel, Whole-Home Renovation, Other), Message/Project Description, Timeline (dropdown: Ready Now, 1-3 Months, 3-6 Months, Just Exploring)
- **Form sends to:** Office@eldesignbuild.com via Resend
- **Sidebar Info:** Phone (click-to-call), Email, Address (St. Petersburg, FL 33705), License CRC1335639
- **Service Area mention**

## Global Components

### Navigation

- Logo (left) — logo file in /public/assets/eastlake-design-build-logo.png, displayed via next/image. Size roughly h-12 on desktop, h-10 on mobile. Logo has a black background — nav uses dark green (#14372F) background with cream (#F5F1EB) text and gold (#CF9941) CTA button so logo sits naturally.
- Links: Home, About, Services (dropdown: New Construction, Remodeling), Portfolio, Contact
- Mobile: hamburger menu
- CTA button in nav: "Get a Free Consultation" → links to /contact

### Footer

- Logo image (same /public/assets/eastlake-design-build-logo.png) displayed above the tagline — sits naturally on the dark green footer background
- Company name + tagline
- Quick links: Home, About, Services, Portfolio, Contact
- Contact info: phone, email, address
- License: CRC1335639
- Bible verse: "For every house is built by someone, but the builder of all things is God. — Hebrews 3:4" (small, italic, subtle)
- © 2025 East Lake Design & Build. All rights reserved.

## Technical Notes

- All placeholder images: use solid color blocks or gradient blocks matching the color palette with text overlay like "Project Photo" — NO external image URLs, no stock photo services
- Contact form: use Resend (already installed) to send to Office@eldesignbuild.com
- SEO: each page needs a unique <title> and meta description targeting Pinellas County / St. Petersburg keywords
- Click-to-call: all phone numbers wrapped in tel: links
- Responsive: mobile-first, must look great on phones
