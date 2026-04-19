import { SmoothScrollLink } from "@/components/ui/smooth-scroll-link";

const navLinks = [
  { href: "#bio", label: "Bio" },
  { href: "#milestones", label: "Milestones" },
  { href: "#media", label: "Media" },
  { href: "#craft", label: "Craft" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav() {
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

        <ul className="flex min-h-0 min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto overflow-y-hidden whitespace-nowrap py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 [&::-webkit-scrollbar]:hidden">
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
      </nav>
    </header>
  );
}
