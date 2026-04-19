import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { PUBLIC_IMAGES } from "@/lib/public-images";

const releases = ["Static Overdrive", "Afterglow", "Night Signal"];

function ImageIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8"
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
  );
}

export function MediaSection() {
  return (
    <section
      id="media"
      className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <Reveal className="reveal reveal-rise">
        <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-rule)] bg-[var(--color-surface-elevated)] px-5 py-7 shadow-[var(--shadow-soft)] backdrop-blur-md sm:px-8 sm:py-8">
          <div className="grid items-center gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <div className="flex items-center gap-5">
              <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-[var(--color-panel)] text-white shadow-inner ring-1 ring-white/10 sm:h-20 sm:w-20">
                <ImageIcon />
              </div>

              <div>
                <h3 className="font-display text-3xl font-semibold uppercase italic leading-[0.9] tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                  Static
                  <br />
                  Overdrive
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Dhjetori
                </p>
              </div>
            </div>

            <div className="grid items-center gap-5">
              <div className="flex items-center justify-center gap-7 text-[var(--color-foreground)]">
                <button
                  type="button"
                  aria-label="Previous"
                  className="transition-opacity duration-200 hover:opacity-60"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 6v12" />
                    <path d="m18 7-8 5 8 5V7Z" fill="currentColor" stroke="none" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Pause"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-foreground)] text-[var(--background)] shadow-[0_10px_28px_rgba(12,10,9,0.25)] ring-2 ring-[var(--color-accent-soft)] transition-transform duration-200 hover:scale-[1.04] hover:bg-[var(--color-accent)]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                    <rect x="7" y="6" width="3.5" height="12" rx="1" />
                    <rect x="13.5" y="6" width="3.5" height="12" rx="1" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Next"
                  className="transition-opacity duration-200 hover:opacity-60"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M17 6v12" />
                    <path d="m6 7 8 5-8 5V7Z" fill="currentColor" stroke="none" />
                  </svg>
                </button>
              </div>

              <div className="grid items-center gap-3 sm:grid-cols-[54px_minmax(0,1fr)_54px]">
                <span className="text-sm text-[var(--color-muted)]">01:24</span>
                <div className="h-[4px] overflow-hidden rounded-full bg-[rgba(12,10,9,0.12)] ring-1 ring-inset ring-[rgba(12,10,9,0.06)]">
                  <div className="h-full w-[33%] rounded-full bg-[linear-gradient(90deg,_var(--color-accent-strong),_var(--color-accent))] shadow-[0_0_12px_rgba(232,93,28,0.45)]" />
                </div>
                <span className="text-right text-sm text-[var(--color-muted)]">04:12</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-20">
        <Reveal className="reveal reveal-rise delay-1">
          <div className="h-2 w-full rounded-full bg-[linear-gradient(90deg,_transparent,_var(--color-accent),_var(--color-accent-strong),_var(--color-accent),_transparent)] opacity-90 shadow-[0_0_24px_rgba(232,93,28,0.35)]" />
        </Reveal>

        <div className="grid items-start gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-14">
          <div>
            <Reveal className="reveal reveal-rise delay-2">
              <h2 className="text-center font-display text-[4rem] font-semibold uppercase italic leading-none tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[5.2rem] lg:text-[6.8rem]">
                Live Archive
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[1, 2].map((item, index) => (
                <Reveal
                  key={item}
                  className={`reveal reveal-zoom rounded-image-panel ${index === 0 ? "delay-2" : "delay-3"}`}
                >
                  <div className="rounded-image-panel relative flex min-h-[14rem] items-center justify-center overflow-hidden bg-[var(--color-panel)] text-white shadow-[0_24px_50px_rgba(0,0,0,0.16)] sm:min-h-[18rem]">
                    <Image
                      src={index === 0 ? PUBLIC_IMAGES.about : "/second_picture.jpg"}
                      alt={`Dhjetori archive portrait ${item}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="rounded-image-panel object-contain"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.12),_transparent_18%),linear-gradient(180deg,_rgba(0,0,0,0.02),_rgba(0,0,0,0.22))]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="reveal reveal-rise delay-3">
            <aside className="mt-32 rounded-[1.6rem] border border-[var(--color-rule)] bg-[var(--color-surface-elevated)] p-6 shadow-[var(--shadow-soft)] sm:p-7 sm:mt-35" style={{ backfaceVisibility: "hidden", WebkitFontSmoothing: "antialiased" }}>
              <h3 className="text-center font-display text-[1.6rem] font-semibold uppercase italic leading-tight tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[1.8rem]">
                Discography
              </h3>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {releases.map((release, index) => (
                  <div key={release} className="space-y-2">
                    <div className="relative aspect-square rounded-[1rem] bg-[var(--color-panel)] text-white shadow-md ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg overflow-hidden flex items-center justify-center">
                      {index === 0 ? (
                        <Image
                          src="/first_picture.jpg"
                          alt={release}
                          fill
                          className="object-contain"
                        />
                      ) : index === 1 ? (
                        <Image
                          src="/second_picture.jpg"
                          alt={release}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <Image
                          src="/fourth_picture.jpg"
                          alt={release}
                          fill
                          className="object-contain"
                        />
                      )}
                    </div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {release}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
