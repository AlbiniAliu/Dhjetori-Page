"use client";

import { useState } from "react";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

const navLinks = [
  { href: "#bio", label: "Bio" },
  { href: "#milestones", label: "Milestones" },
  { href: "#media", label: "Media" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-[var(--nav-height)] border-b border-[var(--color-rule)] bg-[var(--background)] shadow-[0_1px_0_rgba(12,10,9,0.04)]"
      style={{ backfaceVisibility: "hidden" }}
    >
      <nav
        className="mx-auto flex h-full max-w-[1600px] items-center gap-4 px-5 sm:gap-6 sm:px-10 lg:px-16"
        aria-label="Primary"
      >
        <SmoothScrollLink
          href="#home"
          className="shrink-0 font-display text-lg font-semibold uppercase italic tracking-[-0.04em] text-[var(--color-foreground)] transition-opacity duration-200 hover:opacity-70 sm:text-xl"
        >
          Dhjetori
        </SmoothScrollLink>

        {/* Desktop Navigation */}
        <ul className="hidden min-h-0 min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto overflow-y-hidden whitespace-nowrap py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 sm:flex [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <SmoothScrollLink
                href={link.href}
                className="inline-flex items-center rounded-md px-2.5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors duration-150 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-foreground)] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.16em]"
              >
                {link.label}
              </SmoothScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto flex sm:hidden flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--color-foreground)] transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-foreground)] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-foreground)] transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--color-rule)] animate-in fade-in duration-200">
          <ul className="flex flex-col gap-0 px-5 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SmoothScrollLink
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 px-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors duration-150 hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-foreground)] rounded-md"
                >
                  {link.label}
                </SmoothScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
