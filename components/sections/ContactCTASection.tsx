"use client";

import React, { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ContactCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    reason: "Bond Smart Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    trackEvent({
      eventName: "contact_submit",
      location: "ContactCTASection",
      label: formData.reason,
    });

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.warn("Contact form submission error:", err);
      }
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const field =
    "w-full px-0 py-3 bg-transparent border-0 border-b border-ink/25 text-ink text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-warm/60";

  return (
    <section className="section-padding bg-cream text-ink border-t border-ink/10">
      <div className="page-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-accent">Contact</p>
            <h2 className="heading-2">
              Write <span className="serif-accent normal-case font-normal">directly.</span>
            </h2>
            <p className="font-sans text-base text-warm leading-relaxed">
              Speaking, press, or Bond Smart — send a note below.
            </p>
            <div className="space-y-5 font-sans text-sm text-warm">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink mb-1">Inquiries</p>
                <a href="mailto:contact@girishlakhotiya.com" className="hover:text-accent">
                  contact@girishlakhotiya.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink mb-1">Region</p>
                <p>India (operating nationally)</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 space-y-4 border-t border-ink/15">
                <h3 className="font-display font-black uppercase tracking-tight text-3xl">Message received</h3>
                <p className="font-sans text-sm text-warm max-w-md">
                  Thank you. Girish will review your note.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-[11px] uppercase tracking-widest text-accent"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="font-display font-black uppercase tracking-tight text-2xl">Inquiry</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-warm">Full name *</span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-warm">Email *</span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={field}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-warm">Organization</span>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-warm">Reason</span>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className={field}
                    >
                      <option>Bond Smart Inquiry</option>
                      <option>Media & Interviews</option>
                      <option>Keynote Speaking</option>
                      <option>General Leadership</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-warm">Message *</span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${field} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-ink text-cream font-sans text-xs uppercase tracking-widest"
                >
                  {submitting ? "Sending…" : "Submit inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
