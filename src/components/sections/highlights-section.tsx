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
    <section className="relative mx-auto w-full max-w-[1600px] overflow-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-24">
      <div className="absolute bottom-[-3.5rem] left-1/2 hidden -translate-x-1/2 font-display text-[16rem] leading-none text-[var(--color-ghost)] lg:block">
        02
      </div>

      <div className="relative mx-auto max-w-[72rem]">
        <h2 className="text-center font-display text-[3.5rem] font-semibold uppercase italic tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[4.8rem]">
          Milestones
        </h2>

        <div className="mt-12">
          {milestones.map((item) => (
            <article
              key={item.year}
              className="grid gap-4 border-b border-[var(--color-rule)] py-8 sm:grid-cols-[90px_minmax(0,1fr)] sm:gap-10 sm:py-10"
            >
              <p className="pt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {item.year}
              </p>

              <div>
                <h3 className="font-display text-[2rem] leading-none font-semibold uppercase tracking-[-0.04em] text-[var(--color-foreground)] sm:text-[3rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg text-[var(--color-copy)]">{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
