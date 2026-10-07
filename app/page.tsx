import Image from "next/image";
import { ArrowUpRight, Bolt, Check } from "./components/icons";
import { LeadForm } from "./components/lead-form";
import { SiteHeader } from "./components/site-header";
import { memberships, schedule, trainingSpaces } from "./data/site";

const container = "mx-auto w-[min(100%-2rem,1280px)]";

const startingPoints = [
  ["01", "New to the gym?", "Come as you are. Start with a tour, find your pace, and ask every question."],
  ["02", "Getting back into it?", "No big speeches required. Pick a plan, pick a day, and let the routine return."],
  ["03", "Ready to level up?", "Add personal training when you want more structure, support, and accountability."],
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#fffdf5] text-[#151515]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#fffdf5] pt-24 lg:pt-28">
        <div className="pointer-events-none absolute left-[-8rem] top-28 size-64 rounded-full border-[26px] border-[#f4c400] opacity-30 sm:size-96" />
        <div className="pointer-events-none absolute right-[8%] top-36 hidden size-12 rotate-12 border-2 border-[#151515] lg:block" />
        <div className={`${container} relative grid min-h-[690px] items-end gap-12 pb-12 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pb-0 lg:pt-8`}>
          <div className="relative z-10 max-w-2xl pb-6 lg:pb-24">
            <p className="flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.19em] text-[#8a6800]"><span className="size-2 rounded-full bg-[#f4c400]" />A better hour for yourself</p>
            <h1 className="mt-6 max-w-[46rem] text-balance font-[Georgia,serif] text-[clamp(3.6rem,7.2vw,7.3rem)] font-bold leading-[0.88] tracking-[-0.075em]">A gym that meets you <em className="font-normal text-[#bd9200]">where you are.</em></h1>
            <p className="mt-7 max-w-lg text-pretty text-lg leading-8 text-[#4a463d]">Jonex is your neighbourhood training room for getting stronger, clearing your head, and doing one good thing for yourself today.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#join" className="group inline-flex items-center gap-3 rounded-full bg-[#151515] px-6 py-4 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#fffdf5] transition-transform hover:-translate-y-1">Plan your first visit <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              <a href="#memberships" className="inline-flex items-center gap-2 border-b border-[#151515] pb-1 text-[0.68rem] font-black uppercase tracking-[0.13em] transition-colors hover:border-[#bd9200] hover:text-[#8a6800]">See memberships <span className="text-[#bd9200]">↓</span></a>
            </div>
            <p className="mt-10 flex items-center gap-2 text-sm text-[#5d594f]"><span className="text-lg text-[#bd9200]">✦</span> Friendly first steps, serious equipment, no pressure.</p>
          </div>

          <div className="relative h-[480px] self-end lg:h-[650px]">
            <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden rounded-t-[8rem] bg-[#151515] sm:rounded-t-[12rem]">
              <Image src="/assets/facility-hero.jpg" alt="Members training on the Jonex Gym floor" fill priority sizes="(max-width: 1024px) 100vw, 53vw" className="object-cover object-[62%_center] mix-blend-luminosity opacity-90" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.5))]" />
            </div>
            <div className="absolute bottom-7 left-0 grid size-28 -rotate-6 place-items-center rounded-full bg-[#f4c400] p-3 text-center text-[0.6rem] font-black uppercase leading-3 tracking-[0.1em] shadow-[7px_7px_0_#151515] sm:-left-7 sm:size-36 sm:text-[0.67rem]">Take up<br />your space<br /><span className="text-lg">✦</span></div>
            <div className="absolute right-3 top-0 max-w-44 rotate-3 bg-[#fffdf5] p-4 shadow-[8px_8px_0_#151515] sm:right-8 sm:top-6"><Image src="/assets/jonex-gym-logo.png" alt="Jonex Gym logo" width={70} height={70} className="size-14 rounded-full object-cover" /><p className="mt-3 font-[Georgia,serif] text-lg font-bold leading-5">Your next good habit starts here.</p></div>
            <p className="absolute bottom-8 right-6 text-right text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/80">Jonex Gym<br />A place to return to</p>
          </div>
        </div>
      </section>

      <section id="club" className="relative bg-[#151515] py-20 text-[#fffdf5] md:py-28">
        <div className="absolute inset-x-0 top-0 h-3 bg-[repeating-linear-gradient(-45deg,#f4c400_0_11px,#151515_11px_22px)]" />
        <div className={`${container} grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end`}>
          <div>
            <p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-[#f4c400]">Why people stay</p>
            <h2 className="mt-5 max-w-md font-[Georgia,serif] text-[clamp(3rem,5.4vw,5.8rem)] font-bold leading-[0.9] tracking-[-0.07em]">Small promises. <em className="font-normal text-[#f4c400]">Repeated.</em></h2>
          </div>
          <div className="grid gap-0 border-t border-white/20">
            {startingPoints.map(([number, title, copy]) => <article key={number} className="grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[4rem_1fr_1.15fr] sm:items-center sm:gap-6"><span className="text-2xl font-black tracking-[-0.06em] text-[#f4c400]">{number}</span><h3 className="text-xl font-black tracking-[-0.045em]">{title}</h3><p className="text-sm leading-6 text-white/62">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="training" className="bg-[#fffdf5] py-20 md:py-28">
        <div className={container}>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
            <div><p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-[#8a6800]">Find your corner</p><h2 className="mt-5 max-w-xl font-[Georgia,serif] text-[clamp(3.1rem,5.5vw,5.9rem)] font-bold leading-[0.89] tracking-[-0.07em]">The floor is yours to <em className="font-normal text-[#bd9200]">explore.</em></h2></div>
            <p className="max-w-sm text-base leading-7 text-[#5d594f]">You can lift, run, reset, and take your time. Every part of the room exists to make showing up feel easier.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="group relative min-h-[530px] overflow-hidden bg-[#151515]">
              <Image src={trainingSpaces[0].image} alt="Strength area at Jonex Gym" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.72),transparent_62%)]" />
              <div className="absolute inset-x-7 bottom-7 text-white"><p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#f4c400]">01 · {trainingSpaces[0].accent}</p><h3 className="mt-2 font-[Georgia,serif] text-5xl font-bold tracking-[-0.06em]">Strength</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{trainingSpaces[0].description}</p></div>
            </article>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {trainingSpaces.slice(1).map((space, index) => <article key={space.title} className="group relative min-h-[255px] overflow-hidden bg-[#151515]">
                <Image src={space.image} alt={`${space.title} area at Jonex Gym`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.78),transparent_72%)]" />
                <div className="absolute inset-x-6 bottom-6 text-white"><p className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#f4c400]">0{index + 2} · {space.accent}</p><h3 className="mt-1 font-[Georgia,serif] text-3xl font-bold tracking-[-0.05em]">{space.title}</h3><p className="mt-2 max-w-md text-sm leading-5 text-white/72">{space.description}</p></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f4c400] py-4 text-[#151515]">
        <div className="flex min-w-max items-center gap-8 whitespace-nowrap text-[clamp(1.35rem,2.5vw,2.7rem)] font-black uppercase tracking-[-0.055em]"><span>Show up for yourself</span><span className="text-2xl">✦</span><span>Move at your pace</span><span className="text-2xl">✦</span><span>Feel good in your body</span><span className="text-2xl">✦</span><span>Show up for yourself</span></div>
      </section>

      <section id="memberships" className="bg-[#ede9de] py-20 text-[#151515] md:py-28">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div><p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-[#8a6800]">Simple, honest pricing</p><h2 className="mt-5 max-w-md font-[Georgia,serif] text-[clamp(3.1rem,5.2vw,5.5rem)] font-bold leading-[0.9] tracking-[-0.07em]">Less deciding. <em className="font-normal text-[#bd9200]">More doing.</em></h2></div>
            <p className="max-w-lg text-lg leading-8 text-[#5d594f]">Everything you need is on the floor. Choose the amount of time that feels right, then let us welcome you in.</p>
          </div>

          <div className="mt-12 grid border-y border-[#151515]/20 lg:mt-16">
            {memberships.map((plan, index) => <article key={plan.name} className={`grid gap-6 border-b border-[#151515]/20 py-8 last:border-0 md:grid-cols-[4rem_1.3fr_1fr_0.85fr] md:items-center md:gap-8 ${plan.highlighted ? "relative" : ""}`}>
              <span className="text-2xl font-black tracking-[-0.07em] text-[#bd9200]">0{index + 1}</span>
              <div><p className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#8a6800]">{plan.eyebrow}</p><h3 className="mt-2 text-2xl font-black tracking-[-0.06em]">{plan.name}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#5d594f]">{plan.description}</p></div>
              <div><p className="text-4xl font-black tracking-[-0.075em]">{plan.price}</p><p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-[#5d594f]">For {plan.period}</p></div>
              <a href="#join" className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[0.64rem] font-black uppercase tracking-[0.12em] transition-transform hover:-translate-y-1 ${plan.highlighted ? "bg-[#f4c400] text-[#151515]" : "border border-[#151515]/40 text-[#151515] hover:border-[#bd9200]"}`}>Choose this <ArrowUpRight className="size-4" /></a>
            </article>)}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="border border-[#151515]/20 bg-[#fffdf5] p-7"><p className="text-[0.63rem] font-black uppercase tracking-[0.15em] text-[#8a6800]">Need a guide?</p><div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h3 className="text-2xl font-black tracking-[-0.055em]">Personal training</h3><p className="mt-2 max-w-sm text-sm leading-6 text-[#5d594f]">Extra direction for members who want a plan, a coach, and a little more accountability.</p></div><p className="shrink-0 text-xl font-black tracking-[-0.05em]">₹3,000 <span className="text-xs text-[#5d594f]">/ month</span></p></div></article>
            <article className="bg-[#151515] p-7 text-[#fffdf5]"><p className="text-[0.63rem] font-black uppercase tracking-[0.15em] text-[#f4c400]">For young champions</p><div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h3 className="text-2xl font-black tracking-[-0.055em]">Ages 15 to 18</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/65">An annual membership for building healthy strength and confidence early.</p></div><p className="shrink-0 text-xl font-black tracking-[-0.05em] text-[#f4c400]">₹3,999 <span className="text-xs text-white/55">/ year</span></p></div></article>
          </div>
        </div>
      </section>

      <section id="hours" className="relative overflow-hidden bg-[#151515] py-20 text-[#fffdf5] md:py-28">
        <div className="pointer-events-none absolute -right-16 -top-20 size-80 rounded-full border-[34px] border-[#f4c400] opacity-90 sm:size-[30rem]" />
        <div className={`${container} relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center`}>
          <div><p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-[#f4c400]">Open around your life</p><h2 className="mt-5 max-w-md font-[Georgia,serif] text-[clamp(3.2rem,5.4vw,5.8rem)] font-bold leading-[0.9] tracking-[-0.07em]">Come early. <em className="font-normal text-[#f4c400]">Come late.</em></h2><p className="mt-7 max-w-sm text-lg leading-8 text-white/65">The best time to train is the time you can actually keep. We&apos;re open seven days a week.</p></div>
          <dl className="border-t border-white/25">{schedule.map(([day, time]) => <div key={day} className="flex flex-col justify-between gap-2 border-b border-white/25 py-6 sm:flex-row sm:items-center"><dt className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/60">{day}</dt><dd className="m-0 text-xl font-black tracking-[-0.045em] text-[#f4c400]">{time}</dd></div>)}</dl>
        </div>
      </section>

      <section id="join" className="bg-[#fffdf5] py-20 text-[#151515] md:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20`}>
          <div><p className="text-[0.65rem] font-black uppercase tracking-[0.19em] text-[#8a6800]">Start with a hello</p><h2 className="mt-5 max-w-sm font-[Georgia,serif] text-[clamp(3rem,5vw,5.4rem)] font-bold leading-[0.9] tracking-[-0.07em]">Let&apos;s make this <em className="font-normal text-[#bd9200]">easy.</em></h2><p className="mt-7 max-w-sm text-lg leading-8 text-[#5d594f]">Tell us what you want from your training. Whether it&apos;s your first gym or your fresh start, we&apos;ll help you find your way in.</p><div className="mt-10 flex items-start gap-4"><Bolt className="mt-1 size-5 shrink-0 text-[#bd9200]" /><p className="text-sm leading-6 text-[#5d594f]"><b className="block text-[#151515]">Visit Jonex Gym</b>Add your street address, phone, and WhatsApp link here before launch so people can find you in one tap.</p></div></div>
          <div className="bg-[#f4c400] p-7 shadow-[10px_10px_0_#151515] sm:p-10"><p className="mb-8 font-[Georgia,serif] text-3xl font-bold tracking-[-0.05em]">We&apos;ll save you a spot.</p><LeadForm /></div>
        </div>
      </section>

      <footer className="bg-[#151515] py-8 text-[#fffdf5]">
        <div className={`${container} flex flex-col gap-6 text-[0.63rem] font-bold uppercase tracking-[0.12em] text-white/50 sm:flex-row sm:items-center sm:justify-between`}>
          <a href="#top" className="group inline-flex items-center gap-3" aria-label="Back to top"><Image src="/assets/jonex-gym-logo.png" alt="Jonex Gym" width={56} height={56} className="size-11 rounded-full object-cover transition-transform duration-300 group-hover:rotate-6" /><span className="text-sm font-black tracking-[-0.05em] text-[#fffdf5]">JONEX <span className="text-[#f4c400]">GYM</span></span></a>
          <p>© 2026 Jonex Gym. Made for everyday strength.</p>
          <div className="flex gap-5"><a href="#memberships" className="transition-colors hover:text-[#f4c400]">Memberships</a><a href="#join" className="transition-colors hover:text-[#f4c400]">Plan a visit</a></div>
        </div>
      </footer>
    </main>
  );
}
