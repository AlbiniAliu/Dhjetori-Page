import { Reveal } from "@/components/ui/reveal";

const milestones = [
  {
    year: "2018",
    title: "First Live Performance",
    note: "Lorem ipsum dolor sit amet, Tirana.",
  },
  {
    year: "2020",
    title: "Released Debut EP",
    note: "Lorem ipsum dolor sit amet.",
  },
  {
    year: "2021",
    title: "Main Support Act",
    note: "Lorem ipsum dolor sit amet.",
  },
];

export function HighlightsSection() {
  return (
    <section
      id="milestones"
      className="relative mx-auto w-full max-w-[1600px] overflow-x-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="relative mx-auto max-w-[72rem]">
        <Reveal className="reveal reveal-rise">
          <h2 className="text-center font-display text-[3.5rem] font-semibold uppercase italic tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[4.8rem]">
            Milestones
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-12">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-[var(--color-rule)] sm:left-[1.35rem]"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-[linear-gradient(180deg,_var(--color-accent),_transparent)] opacity-70 sm:left-[1.35rem]"
          />

          {milestones.map((item, index) => (
            <Reveal
              key={item.year}
              className={`reveal reveal-rise ${index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3"}`}
            >
              <article className="relative grid gap-4 border-b border-[var(--color-rule)] py-8 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-10 sm:py-10">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 top-[2.35rem] flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--background)] bg-[var(--color-accent)] shadow-[0_0_0_4px_var(--color-accent-soft)] sm:-left-12 sm:top-[2.55rem]"
                />
                <p className="pt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {item.year}
                </p>

                <div>
                  <h3 className="font-display text-[2rem] leading-none font-semibold uppercase tracking-[-0.04em] text-[var(--color-foreground)] sm:text-[3rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-lg text-[var(--color-copy)]">{item.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
