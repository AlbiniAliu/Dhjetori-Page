import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { PUBLIC_IMAGES } from "@/lib/public-images";

const detailItems = [
  { label: "Genre", value: "Rock / Alternative" },
  { label: "Origin", value: "Tirana, Albania" },
];

export function BioSection() {
  return (
    <section
      id="bio"
      className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(320px,0.96fr)_minmax(0,1.04fr)] lg:gap-16">
        <div className="relative">
          <Reveal className="reveal reveal-zoom rounded-image-panel">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-6 -z-10">
              <span className="hero-wave-orbit hero-wave-orbit--dark hero-wave-orbit--1" />
              <span className="hero-wave-orbit hero-wave-orbit--dark hero-wave-orbit--2" />
              <span className="hero-wave-orbit hero-wave-orbit--dark hero-wave-orbit--3" />
            </div>
            <div className="rounded-image-panel relative h-[28rem] w-full overflow-hidden bg-[var(--color-panel)] shadow-[0_28px_60px_rgba(0,0,0,0.18),var(--shadow-glow)] ring-1 ring-[rgba(255,255,255,0.08)] sm:h-[36rem] lg:h-[42rem]">
              <Image
                src={PUBLIC_IMAGES.cover}
                alt="Dhjetori cover portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="rounded-image-panel object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.08),_transparent_18%),linear-gradient(180deg,_rgba(0,0,0,0.02),_rgba(0,0,0,0.18))]" />
            </div>
          </Reveal>
        </div>

        <div className="relative max-w-[46rem]">
          <Reveal className="reveal reveal-sweep">
            <h2 className="max-w-[12ch] font-display text-[3.2rem] leading-[0.9] font-semibold italic tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[4.6rem] lg:text-[5.8rem]">
              &ldquo;Born from noise. Built for stages.&rdquo;
            </h2>
          </Reveal>

          <Reveal className="reveal reveal-sweep delay-1">
            <p className="mt-10 max-w-[35rem] text-lg leading-9 text-[var(--color-copy)] sm:text-[1.45rem]">
              Dhjetori lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum viverra, mauris id accumsan efficitur, risus lacus
              suscipit orci, vitae tincidunt augue eros sit amet velit.
            </p>
          </Reveal>

          <Reveal className="reveal reveal-sweep delay-2">
            <div className="mt-12 grid gap-6 border-t border-[var(--color-rule)] pt-8 sm:grid-cols-2 sm:gap-8">
              {detailItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--color-rule)] bg-[var(--color-surface)] px-5 py-5 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[var(--shadow-soft)] sm:px-6 sm:py-6"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
