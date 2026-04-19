import { Reveal } from "@/components/ui/reveal";

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
    <section
      id="craft"
      className="mx-auto w-full max-w-[1600px] px-6 py-14 sm:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="reveal reveal-rise">
          <h2 className="text-center font-display text-[3.5rem] font-semibold uppercase italic leading-none tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[4.8rem] lg:text-[5.4rem]">
            Sound &amp; Craft
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-18">
          {columns.map((column, index) => (
            <Reveal
              key={column.title}
              className={index === 0 ? "reveal reveal-sweep delay-1" : "reveal reveal-sweep delay-2"}
            >
              <div className="border-b border-[var(--color-rule)] pb-4">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  {column.title}
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-5 rounded-xl px-1 py-2 text-[1.9rem] font-semibold uppercase leading-none text-[var(--color-foreground)] transition-colors duration-200 hover:bg-[var(--color-accent-soft)] sm:text-[2.2rem]"
                  >
                    <span className="block h-[3px] w-5 shrink-0 rounded-full bg-[var(--color-accent)] transition-all duration-200 group-hover:w-7 group-hover:shadow-[0_0_12px_rgba(232,93,28,0.5)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
