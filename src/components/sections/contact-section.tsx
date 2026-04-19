import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="text-center">
          <Reveal className="reveal reveal-rise">
            <h2 className="font-display text-[4rem] font-semibold uppercase italic leading-none tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[5.6rem] lg:text-[6.5rem]">
              Let&apos;s Work
            </h2>
          </Reveal>
          <Reveal className="reveal reveal-rise delay-1">
            <p className="mt-4 text-lg font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] sm:text-[1.55rem]">
              For bookings, collaborations, or press.
            </p>
          </Reveal>
        </div>

        <Reveal className="reveal reveal-rise delay-2">
          <form
            suppressHydrationWarning
            className="mt-12 rounded-[1.75rem] border border-[var(--color-rule)] bg-[var(--color-surface-elevated)] px-6 py-8 shadow-[var(--shadow-soft)] backdrop-blur-md sm:px-9 sm:py-10 lg:px-12 lg:py-12"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Name
                </span>
                <input
                  type="text"
                  placeholder="JANE DOE"
                  suppressHydrationWarning
                  className="w-full rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] px-4 py-4 text-base font-semibold uppercase tracking-[0.08em] text-[var(--color-foreground)] outline-none transition-all duration-200 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="JANE@EXAMPLE.COM"
                  suppressHydrationWarning
                  className="w-full rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] px-4 py-4 text-base font-semibold uppercase tracking-[0.08em] text-[var(--color-foreground)] outline-none transition-all duration-200 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
                />
              </label>
            </div>

            <label className="mt-8 block">
              <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Message
              </span>
              <textarea
                rows={8}
                placeholder="TELL US ABOUT YOUR EVENT..."
                suppressHydrationWarning
                className="w-full resize-none rounded-xl border border-[var(--color-rule)] bg-[var(--color-surface)] px-4 py-4 text-base font-semibold uppercase tracking-[0.08em] text-[var(--color-foreground)] outline-none transition-all duration-200 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-soft)]"
              />
            </label>

            <button
              type="submit"
              className="mt-8 w-full rounded-xl bg-[var(--color-foreground)] px-6 py-5 text-lg font-semibold uppercase tracking-[0.18em] text-[var(--background)] shadow-[var(--shadow-lift)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:shadow-[0_20px_40px_rgba(232,93,28,0.35)] active:scale-[0.99]"
            >
              Send Inquiry
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
