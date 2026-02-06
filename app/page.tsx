import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-16 py-12 md:py-16 animate-[fadeIn_0.8s_ease-out]">
      <div className="max-w-7xl mx-auto">
        {/* Decorative line */}
        <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 md:mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

        {/* Hero text section - takes up most of the vertical space */}
        <div className="animate-[slideUp_0.8s_ease-out_0.2s_both] mb-12 md:mb-16">
          <div className="max-w-5xl">
            <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight text-[var(--black)] mb-8 md:mb-12 tracking-tight">
              Here's to the <span className="text-[var(--accent-red)] italic">crazy ones</span>
            </h1>

            <div className="space-y-6 text-lg md:text-xl lg:text-2xl text-[var(--charcoal)] leading-relaxed max-w-4xl">
              <p>
                Apple's iconic "Think Different" campaign and the "Here's to the crazy ones" speech inspired the founding of Work Different in 2013. We believed then—and believe even more strongly now—that scaling go-to-market strategies requires creativity, bold thinking, and a willingness to challenge conventional wisdom.
              </p>

              <p>
                Today, with AI transforming how businesses operate and compete, thinking differently isn't just inspiring—it's imperative. The technology companies that will thrive are those that embrace new ways of building, scaling, and supporting their GTM teams.
              </p>

              <p className="font-semibold text-[var(--black)] text-xl md:text-2xl lg:text-3xl">
                We help early-stage B2B technology companies work different.
              </p>
            </div>
          </div>
        </div>

        {/* Poster artwork - smaller callout element, offset to the right */}
        <div className="flex justify-start md:justify-end animate-[slideLeft_0.8s_ease-out_0.4s_both]">
          <div className="w-full md:w-2/3 lg:w-1/2 max-w-xl">
            <div className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-4 md:p-6 relative">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
              <Image
                src="/images/IMG_0031.jpeg"
                alt="Think Different - Apple Campaign Poster"
                width={800}
                height={1067}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
