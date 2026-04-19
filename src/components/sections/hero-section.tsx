import Image from "next/image";
import { PUBLIC_IMAGES } from "@/lib/public-images";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[calc(100dvh-var(--nav-height))] w-full max-w-[1600px] items-center px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-0">
        <div className="relative z-10 flex min-h-[36rem] items-center lg:min-h-[44rem]">
          <div className="relative max-w-[40rem]">
            <span
              className="motion-rise mb-8 inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white shadow-[0_12px_28px_rgba(232,93,28,0.35)] ring-1 ring-white/25"
            >
              Rock Artist
            </span>

            <h1
              className="motion-rise delay-1 relative z-10 font-display text-[4.4rem] leading-[0.8] font-semibold uppercase tracking-[-0.06em] text-[var(--color-foreground)] drop-shadow-[0_1px_0_rgba(255,255,255,0.45)] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]"
            >
              <span className="block">Dhje</span>
              <span className="-mt-3 block sm:-mt-5 lg:-mt-8">tori</span>
            </h1>

            <p
              className="motion-rise delay-2 mt-8 max-w-sm text-lg leading-8 text-[var(--color-foreground)] sm:text-xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae nibh id velit volutpat mattis.
            </p>

            <div className="motion-rise delay-3 mt-10 flex flex-wrap gap-4 sm:gap-5">
              <a
                href="#media"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-surface-elevated)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-foreground)] shadow-[var(--shadow-soft)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] hover:shadow-[var(--shadow-lift)]"
              >
                Listen
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--background)] shadow-[var(--shadow-lift)] transition-all duration-300 hover:bg-[var(--color-accent)]"
              >
                Book
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="motion-zoom delay-2 relative">
            <div
              aria-hidden="true"
              className="rounded-image-panel absolute -inset-3 -z-10 bg-[linear-gradient(145deg,_rgba(232,93,28,0.2),_transparent_42%,_rgba(12,10,9,0.08))] opacity-90 blur-2xl sm:-inset-5"
            />
            <div
              className="rounded-image-panel relative h-[28rem] w-full max-w-[25rem] overflow-hidden bg-[var(--color-panel)] shadow-[0_30px_70px_rgba(0,0,0,0.2),var(--shadow-glow)] ring-1 ring-[rgba(255,255,255,0.12)] sm:h-[38rem] sm:max-w-[32rem] lg:h-[44rem] lg:max-w-[40rem] xl:h-[46rem]"
            >
              <Image
                src={PUBLIC_IMAGES.hero}
                alt="Dhjetori hero portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="rounded-image-panel object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.02),_rgba(0,0,0,0.28))]" />
              <div className="pointer-events-none absolute inset-0 rounded-image-panel ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
