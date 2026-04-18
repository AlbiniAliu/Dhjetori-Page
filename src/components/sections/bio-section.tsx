const detailItems = [
  { label: "Genre", value: "Rock / Alternative" },
  { label: "Origin", value: "Tirana, Albania" },
];

export function BioSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(320px,0.96fr)_minmax(0,1.04fr)] lg:gap-16">
        <div className="relative">
          <div className="relative h-[28rem] w-full overflow-hidden bg-[var(--color-panel)] shadow-[0_28px_60px_rgba(0,0,0,0.16)] sm:h-[36rem] lg:h-[42rem]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_transparent_24%),radial-gradient(circle_at_50%_26%,_rgba(255,255,255,0.14),_transparent_16%),linear-gradient(180deg,_#060606_0%,_#141414_45%,_#020202_100%)]" />
            <div className="absolute inset-x-[16%] top-0 h-full bg-[linear-gradient(90deg,_transparent_0%,_rgba(255,255,255,0.05)_35%,_rgba(255,255,255,0.12)_48%,_rgba(255,255,255,0.05)_61%,_transparent_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/6 backdrop-blur-sm sm:h-28 sm:w-28">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 text-white/85 sm:h-12 sm:w-12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
                  <path d="m7.5 15.5 3.1-3.4a1 1 0 0 1 1.47-.03l2.28 2.46" />
                  <path d="m13.5 14.5 1.65-1.78a1 1 0 0 1 1.48 0l2.37 2.78" />
                  <circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-[46rem]">
          <h2 className="max-w-[12ch] font-display text-[3.2rem] leading-[0.9] font-semibold italic tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[4.6rem] lg:text-[5.8rem]">
            &ldquo;Born from noise. Built for stages.&rdquo;
          </h2>

          <p className="mt-10 max-w-[35rem] text-lg leading-9 text-[var(--color-copy)] sm:text-[1.45rem]">
            Dhjetori lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum viverra, mauris id accumsan efficitur, risus lacus
            suscipit orci, vitae tincidunt augue eros sit amet velit.
          </p>

          <div className="mt-12 grid gap-8 border-t border-[var(--color-rule)] pt-6 sm:grid-cols-2">
            {detailItems.map((item) => (
              <div
                key={item.label}
                className="border-t border-[var(--color-rule)] pt-4 sm:border-t-0 sm:pt-0"
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-[var(--color-foreground)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
