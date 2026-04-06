"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_1px_40px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="relative z-10 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-dark-950 font-bold text-lg">N</span>
              </div>
              <div>
                <span className="text-lg font-semibold tracking-tight text-white">
                  Naz&apos;s
                </span>
                <span className="text-lg font-semibold tracking-tight gradient-text ml-1">
                  Renos
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="btn-apple ml-4 !py-2.5 !px-6 !text-sm"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${
                isOpen ? "hamburger-open" : ""
              }`}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line block w-6 h-[2px] bg-white rounded-full" />
              <span className="hamburger-line block w-6 h-[2px] bg-white rounded-full" />
              <span className="hamburger-line block w-6 h-[2px] bg-white rounded-full" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark-950/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-dark-900/95 backdrop-blur-2xl border-l border-white/5"
            >
              <div className="flex flex-col justify-center h-full px-8">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.06,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="text-3xl font-light text-dark-300 hover:text-white transition-colors duration-300 py-3 border-b border-white/5"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-10"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="btn-apple btn-apple-filled w-full text-center"
                  >
                    Get a Free Quote
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
