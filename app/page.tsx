import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 md:px-16 py-16 animate-[fadeIn_0.8s_ease-out]">
      <div className="max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

        {/* Text content */}
        <div className="animate-[slideUp_0.8s_ease-out_0.2s_both] mb-12">
          <h1 className="font-[var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[var(--black)] mb-8 tracking-tight">
            Think <span className="text-[var(--accent-red)] italic">Different</span> About Go-to-Market
          </h1>

          <div className="space-y-6 text-base md:text-lg text-[var(--charcoal)] leading-relaxed">
            <p>
              In 1997, Apple challenged the world to celebrate those who see things differently. That campaign inspired us to launch Work Different in 2013—with a mission to bring fresh thinking to how early-stage technology companies build and scale their go-to-market strategies.
            </p>

            <p>
              We believed then, as we do now, that the best GTM strategies don't follow conventional playbooks. They're built by those willing to question the status quo, challenge assumptions, and forge new paths.
            </p>

            <p>
              Today, AI has made thinking differently not just inspirational—it's imperative. The tools, tactics, and strategies that worked yesterday won't be enough tomorrow. Success requires reimagining how we approach marketing, sales, customer success, and channels from the ground up.
            </p>

            <p className="font-semibold">
              At Work Different, we partner with investors and portfolio companies to do exactly that: bring operator expertise and unconventional thinking to the companies bold enough to change their industries.
            </p>
          </div>
        </div>

        {/* Poster image */}
        <div className="animate-[slideUp_0.8s_ease-out_0.4s_both]">
          <div className="relative border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] bg-white p-4 inline-block">
            <Image
              src="/images/IMG_0031.jpeg"
              alt="Think Different - Iconic campaign poster"
              width={700}
              height={980}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
