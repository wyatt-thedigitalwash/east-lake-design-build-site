"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const projectTypes = [
  "New Construction",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Whole-Home Renovation",
  "Other",
];

const timelines = [
  "Ready Now",
  "1-3 Months",
  "3-6 Months",
  "Just Exploring",
];

const inputClasses =
  "w-full border border-muted bg-white px-4 py-3 text-text-dark text-sm focus:outline-none focus:border-gold transition-colors duration-300";
const labelClasses = "block text-sm font-semibold text-text-dark mb-1.5";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please call us at (727) 373-8368 instead."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle
          className="text-green-primary mx-auto mb-6"
          size={48}
          strokeWidth={1.5}
        />
        <h2 className="font-[Georgia,serif] text-2xl text-text-dark mb-4">
          Thank you.
        </h2>
        <p className="text-text-dark/70 leading-relaxed max-w-md mx-auto">
          We&apos;ve received your inquiry and will be in touch within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClasses}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className={labelClasses}>
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className={inputClasses}
          >
            <option value="">Select...</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className={labelClasses}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            className={inputClasses}
          >
            <option value="">Select...</option>
            {timelines.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project..."
          className={inputClasses}
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold text-green-primary py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-gold/85 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
