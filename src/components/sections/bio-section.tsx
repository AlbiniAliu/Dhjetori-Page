import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const detailItems = [
  { label: "Genre", value: "Rock / Alternative" },
  { label: "Origin", value: "Tirana, Albania" },
];

export function BioSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(320px,0.96fr)_minmax(0,1.04fr)] lg:gap-16">
        <div className="relative">
          <Reveal className="reveal reveal-zoom rounded-image-panel">
            <div className="rounded-image-panel relative h-[28rem] w-full overflow-hidden bg-[var(--color-panel)] shadow-[0_28px_60px_rgba(0,0,0,0.16)] sm:h-[36rem] lg:h-[42rem]">
              <Image
                src="/cover.jpg"
                alt="Dhjetori cover portrait"
                fill
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
