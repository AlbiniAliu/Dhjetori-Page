export function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 py-10 sm:px-10 lg:px-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-0">
        <div className="relative z-10 flex min-h-[36rem] items-center lg:min-h-[44rem]">
          <div className="relative max-w-[40rem]">
            <span className="mb-8 inline-flex bg-[var(--color-accent)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white">
              Rock Artist
            </span>

            <h1 className="relative z-10 font-display text-[4.4rem] leading-[0.8] font-semibold uppercase tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]">
              <span className="block">Dhje</span>
              <span className="-mt-3 block sm:-mt-5 lg:-mt-8">tori</span>
            </h1>

            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[58%] top-[40%] z-0 font-display text-[11rem] leading-none text-[var(--color-ghost)] sm:text-[14rem] lg:text-[18rem]"
            >
              01
            </span>

            <p className="mt-8 max-w-sm text-lg leading-8 text-[var(--color-foreground)] sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae nibh id velit volutpat mattis.
            </p>

            <div className="mt-10 flex flex-wrap gap-8 text-xl italic text-[var(--color-foreground)]">
              <a
                href="#"
                className="border-b border-current pb-1 transition-opacity duration-200 hover:opacity-60"
              >
                Listen&rarr;
              </a>
              <a
                href="#"
                className="border-b border-current pb-1 transition-opacity duration-200 hover:opacity-60"
              >
                Book&rarr;
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-[28rem] w-full max-w-[25rem] overflow-hidden bg-[var(--color-panel)] shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:h-[38rem] sm:max-w-[32rem] lg:h-[44rem] lg:max-w-[40rem] xl:h-[46rem]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_38%_28%,_rgba(255,255,255,0.12),_transparent_18%),linear-gradient(90deg,_#111_0%,_#1b1b1b_42%,_#050505_72%,_#000_100%)]" />
            <div className="absolute inset-y-0 left-[48%] w-px bg-white/10" />
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
      </div>
    </section>
  );
}
