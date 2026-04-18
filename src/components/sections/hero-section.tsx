import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-6 py-10 sm:px-10 lg:px-16">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-0">
        <div className="relative z-10 flex min-h-[36rem] items-center lg:min-h-[44rem]">
          <div className="relative max-w-[40rem]">
            <span
              className="motion-rise mb-8 inline-flex bg-[var(--color-accent)] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-white"
            >
              Rock Artist
            </span>

            <h1
              className="motion-rise delay-1 relative z-10 font-display text-[4.4rem] leading-[0.8] font-semibold uppercase tracking-[-0.06em] text-[var(--color-foreground)] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]"
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

            <div className="motion-rise delay-3 mt-10 flex flex-wrap gap-8 text-xl italic text-[var(--color-foreground)]">
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
          <div
            className="motion-zoom delay-2 rounded-image-panel relative h-[28rem] w-full max-w-[25rem] overflow-hidden bg-[var(--color-panel)] shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:h-[38rem] sm:max-w-[32rem] lg:h-[44rem] lg:max-w-[40rem] xl:h-[46rem]"
          >
            <Image
              src="/hero.jpg"
              alt="Dhjetori hero portrait"
              fill
              priority
              className="rounded-image-panel object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.02),_rgba(0,0,0,0.24))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
