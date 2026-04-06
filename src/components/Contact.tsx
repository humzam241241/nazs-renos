"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
    label: "Phone",
    value: "(416) 912-1661",
    href: "tel:+14169121661",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "todayssolutions786@gmail.com",
    href: "mailto:todayssolutions786@gmail.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
    label: "Location",
    value: "Greater Toronto Area",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/40 to-dark-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <AnimatedSection>
            <p className="text-gold-400 text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Start Your <span className="gradient-text">Project</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto font-light">
              Ready to transform your space? Get in touch for a free
              consultation and detailed quote tailored to your vision.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 flex-shrink-0 group-hover:bg-gold-500/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-dark-400 mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-gold-300 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} direction="right">
              <div className="glass rounded-2xl p-8 mt-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-dark-300">
                    <span>Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-dark-300">
                    <span>Saturday</span>
                    <span className="text-white">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-dark-300">
                    <span>Sunday</span>
                    <span className="text-gold-400">By Appointment</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-gold-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-dark-400">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-dark-300 mb-2 font-medium">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all duration-300 text-base"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-dark-300 mb-2 font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all duration-300 text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-dark-300 mb-2 font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all duration-300 text-base"
                        placeholder="(647) 555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-dark-300 mb-2 font-medium">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all duration-300 text-base appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-dark-900">
                          Select a service
                        </option>
                        <option value="house-solutions" className="bg-dark-900">
                          House Solutions
                        </option>
                        <option value="kitchen-bathroom" className="bg-dark-900">
                          Kitchen/Bathroom
                        </option>
                        <option value="plumbing-electrical" className="bg-dark-900">
                          Plumbing/Electrical
                        </option>
                        <option value="painting" className="bg-dark-900">
                          Painting
                        </option>
                        <option value="garage-shelving" className="bg-dark-900">
                          Garage Shelving
                        </option>
                        <option value="shed-fence" className="bg-dark-900">
                          Shed/Fence Building
                        </option>
                        <option value="moulding" className="bg-dark-900">
                          Moulding
                        </option>
                        <option value="doors" className="bg-dark-900">
                          Doors
                        </option>
                        <option value="drywall" className="bg-dark-900">
                          Drywall Work
                        </option>
                        <option value="other" className="bg-dark-900">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-dark-300 mb-2 font-medium">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all duration-300 text-base resize-none"
                      placeholder="Tell us about your renovation vision, timeline, and budget range..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-apple btn-apple-filled w-full !py-4 !text-base"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-dark-500 text-center">
                    Free consultations &middot; No jobs too big, no issue too small
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
