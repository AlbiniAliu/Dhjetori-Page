const columns = [
  {
    title: "Genres",
    items: ["Rock", "Alternative", "Post-Punk", "Grunge", "Indie"],
  },
  {
    title: "Strengths",
    items: [
      "Live Performance",
      "Songwriting",
      "Stage Presence",
      "Producer Collaboration",
      "Crowd Connection",
    ],
  },
];

export function CraftSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center font-display text-[3.5rem] font-semibold uppercase italic leading-none tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[4.8rem] lg:text-[5.4rem]">
          Sound &amp; Craft
        </h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-18">
          {columns.map((column) => (
            <div key={column.title}>
              <div className="border-b border-[var(--color-rule)] pb-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {column.title}
                </p>
              </div>

              <ul className="mt-7 space-y-5">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-5 text-[1.9rem] font-semibold uppercase leading-none text-[var(--color-foreground)] sm:text-[2.2rem]"
                  >
                    <span className="block h-[2px] w-4 bg-[var(--color-accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
