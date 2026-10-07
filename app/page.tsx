import Image from "next/image";
import { ArrowUpRight, Bolt, Check } from "./components/icons";
import { LeadForm } from "./components/lead-form";
import { SiteHeader } from "./components/site-header";
import { memberships, schedule, trainingSpaces } from "./data/site";

const container = "mx-auto w-[min(100%-2rem,1280px)]";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#07100c] text-[#f6faf4]">
      <SiteHeader />

      <section className="relative min-h-[760px] border-b border-white/10 bg-[#07100c] md:min-h-[820px]">
        <Image src="/assets/facility-hero.jpg" alt="The Jonex Gym training floor" fill priority sizes="100vw" className="object-cover object-[61%_center] opacity-65" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,16,12,0.98)_0%,rgba(7,16,12,0.83)_39%,rgba(7,16,12,0.21)_76%,rgba(7,16,12,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,16,12,1)_0%,transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(198,255,100,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(198,255,100,0.08)_1px,transparent_1px)] bg-[size:84px_84px] [mask-image:linear-gradient(90deg,black,transparent_70%)]" />

        <div className={`${container} relative flex min-h-[760px] flex-col justify-end pb-12 pt-36 md:min-h-[820px] md:pb-16 md:pt-40`}>
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-[0.66rem] font-black uppercase tracking-[0.2em] text-[#c6ff64]"><span className="h-px w-8 bg-[#c6ff64]" />Jonex Gym · Train with intent</p>
            <h1 className="max-w-3xl text-balance text-[clamp(3.8rem,9vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] text-white">Earn your <span className="text-[#c6ff64]">next</span> rep.</h1>
            <p className="mt-7 max-w-md text-pretty text-[0.98rem] leading-7 text-white/72">A proper training floor for the work that changes you. Show up, put in the reps, and leave stronger than you walked in.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a href="#join" className="inline-flex items-center gap-3 rounded-full bg-[#c6ff64] px-6 py-4 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#07100c] transition-transform hover:-translate-y-0.5">Start training <ArrowUpRight className="size-4" /></a>
              <a href="#training" className="inline-flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-white transition-colors hover:text-[#c6ff64]">Explore the floor <span className="text-[#c6ff64]">↓</span></a>
            </div>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/20 pt-5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-white/60 sm:gap-7 sm:text-[0.64rem]">
            <span><strong className="mb-1 block text-base font-black tracking-[-0.04em] text-white">01</strong>Strength floor</span>
            <span><strong className="mb-1 block text-base font-black tracking-[-0.04em] text-white">02</strong>Cardio zone</span>
            <span><strong className="mb-1 block text-base font-black tracking-[-0.04em] text-white">03</strong>Personal coaching</span>
          </div>
        </div>

        <div className="absolute bottom-10 right-[max(1rem,calc((100vw-1280px)/2))] hidden w-56 border border-[#c6ff64]/60 bg-[#0a130f]/85 p-5 backdrop-blur md:block">
          <p className="text-[0.59rem] font-black uppercase tracking-[0.15em] text-[#c6ff64]">Annual membership</p>
          <p className="mt-5 text-2xl font-black uppercase leading-6 tracking-[-0.065em]">Make the year count.</p>
          <div className="mt-5 flex items-end gap-1"><span className="text-3xl font-black tracking-[-0.075em]">₹6,000</span><span className="mb-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white/55">/ 12 months</span></div>
          <a href="#memberships" className="mt-5 inline-flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#c6ff64]">View memberships <ArrowUpRight className="size-3.5" /></a>
        </div>
      </section>

      <section id="club" className="border-b border-white/10 bg-[#f1f4ed] py-20 text-[#0b140f] md:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end`}>
          <div>
            <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#5b8a1d]">The Jonex standard</p>
            <h2 className="mt-5 max-w-lg text-balance text-[clamp(3rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">No noise.<br />Just <span className="text-[#5b8a1d]">progress.</span></h2>
          </div>
          <div className="border-l-2 border-[#9fd847] pl-6 lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-[#334138]">We built Jonex around what matters: reliable equipment, a focused atmosphere, and enough space to keep your promise to yourself.</p>
            <a href="#join" className="mt-7 inline-flex items-center gap-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#0b140f]">Meet your next routine <ArrowUpRight className="size-4 text-[#5b8a1d]" /></a>
          </div>
        </div>
      </section>

      <section id="training" className="bg-[#0b1510] py-20 md:py-28">
        <div className={container}>
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
            <div><p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#c6ff64]">The training floor</p><h2 className="mt-4 text-balance text-[clamp(3rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">Your work,<br /><span className="text-[#c6ff64]">your way.</span></h2></div>
            <p className="max-w-sm text-sm leading-6 text-white/60">Whether you&apos;re chasing your first pull-up or your next personal best, every zone is ready when you are.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {trainingSpaces.map((space) => (
              <article key={space.title} className="group relative min-h-[410px] overflow-hidden border border-white/10 bg-[#142118]">
                <Image src={space.image} alt={`${space.title} training area`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,12,8,0.96),transparent_68%)]" />
                <div className="relative flex h-[410px] flex-col justify-between p-6">
                  <div className="flex items-start justify-between"><span className="grid size-10 place-items-center rounded-full border border-white/25 bg-black/20 text-[0.66rem] font-bold text-[#c6ff64]">{space.number}</span><span className="translate-y-1 text-[0.6rem] font-black uppercase tracking-[0.13em] text-white/75 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{space.accent}</span></div>
                  <div><h3 className="text-3xl font-black uppercase tracking-[-0.055em]">{space.title}</h3><p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/65">{space.description}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#102018] py-10">
        <div className={`${container} grid gap-7 sm:grid-cols-3`}>
          {[['7 days', 'A week to stay consistent'], ['3 zones', 'Strength, cardio, conditioning'], ['1 focus', 'Do the work that matters']].map(([number, label]) => <div key={number} className="flex items-center gap-4"><Bolt className="size-5 shrink-0 text-[#c6ff64]" /><p className="m-0 text-sm text-white/65"><b className="mr-2 text-xl font-black tracking-[-0.05em] text-white">{number}</b>{label}</p></div>)}
        </div>
      </section>

      <section id="memberships" className="bg-[#07100c] py-20 md:py-28">
        <div className={container}>
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end"><div><p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#c6ff64]">Straightforward pricing</p><h2 className="mt-4 text-balance text-[clamp(3rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">Choose the<br /><span className="text-[#c6ff64]">commitment.</span></h2></div><p className="max-w-sm text-sm leading-6 text-white/60">No confusing tier names. Pick the timeframe that puts your goals within reach.</p></div>
          <div className="grid gap-4 lg:grid-cols-3">
            {memberships.map((plan) => <article key={plan.name} className={`flex min-h-[425px] flex-col border p-7 ${plan.highlighted ? "border-[#c6ff64] bg-[#c6ff64] text-[#07100c]" : "border-white/15 bg-[#0d1a13]"}`}>
              <p className={`text-[0.62rem] font-black uppercase tracking-[0.15em] ${plan.highlighted ? "text-[#315317]" : "text-[#c6ff64]"}`}>{plan.eyebrow}</p>
              <h3 className="mt-6 text-3xl font-black uppercase tracking-[-0.06em]">{plan.name}</h3>
              <p className={`mt-3 max-w-xs text-sm leading-6 ${plan.highlighted ? "text-[#30422c]" : "text-white/60"}`}>{plan.description}</p>
              <div className="mt-7 flex items-end gap-2"><span className="text-5xl font-black tracking-[-0.075em]">{plan.price}</span><span className={`mb-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${plan.highlighted ? "text-[#30422c]" : "text-white/50"}`}>/ {plan.period}</span></div>
              <ul className={`mt-7 grid gap-3 text-sm ${plan.highlighted ? "text-[#1d351e]" : "text-white/75"}`}>{plan.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className={`size-4 shrink-0 ${plan.highlighted ? "text-[#315317]" : "text-[#c6ff64]"}`} />{feature}</li>)}</ul>
              <a href="#join" className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[0.66rem] font-black uppercase tracking-[0.13em] transition-transform hover:-translate-y-0.5 ${plan.highlighted ? "bg-[#0b140f] text-white" : "border border-white/30 text-white hover:border-[#c6ff64] hover:text-[#c6ff64]"}`}>Choose this plan <ArrowUpRight className="size-4" /></a>
            </article>)}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <article className="flex flex-col justify-between gap-6 border border-white/15 bg-[#0d1a13] p-7 sm:flex-row sm:items-end"><div><p className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#c6ff64]">One-to-one support</p><h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.055em]">Personal training</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/60">A coach, a clear plan, and someone in your corner for every set.</p></div><p className="shrink-0 text-xl font-black tracking-[-0.05em]">₹3,000<span className="ml-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white/55">/ month</span></p></article>
            <article className="flex flex-col justify-between gap-6 border border-[#c6ff64] bg-[#17301b] p-7 sm:flex-row sm:items-end"><div><p className="text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#c6ff64]">Youth offer · ages 15–18</p><h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.055em]">Young champions</h3><p className="mt-2 max-w-sm text-sm leading-6 text-white/70">A special annual membership to help the next generation build good habits.</p></div><p className="shrink-0 text-xl font-black tracking-[-0.05em] text-[#c6ff64]">₹3,999<span className="ml-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white/55">/ year</span></p></article>
          </div>
        </div>
      </section>

      <section id="hours" className="bg-[#f1f4ed] py-20 text-[#0b140f] md:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end`}>
          <div><p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#5b8a1d]">Find your time</p><h2 className="mt-4 text-balance text-[clamp(3rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">A stronger day<br />starts <span className="text-[#5b8a1d]">here.</span></h2><p className="mt-7 max-w-sm text-base leading-7 text-[#4a5a4e]">Before work, after class, or whenever you decide to show up, the floor is ready.</p></div>
          <dl className="border-t border-[#0b140f]/20">{schedule.map(([day, time]) => <div key={day} className="flex flex-col justify-between gap-2 border-b border-[#0b140f]/20 py-6 sm:flex-row sm:items-center"><dt className="text-[0.69rem] font-black uppercase tracking-[0.14em] text-[#526455]">{day}</dt><dd className="m-0 text-xl font-black tracking-[-0.04em]">{time}</dd></div>)}</dl>
        </div>
      </section>

      <section id="join" className="relative bg-[#0b1510] py-20 md:py-28">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[42%] bg-[linear-gradient(135deg,transparent_30%,rgba(198,255,100,0.08)_30%,rgba(198,255,100,0.08)_31%,transparent_31%)] lg:block" />
        <div className={`${container} relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
          <div><p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#c6ff64]">Your first step</p><h2 className="mt-4 text-balance text-[clamp(3rem,5vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">Show up for<br /><span className="text-[#c6ff64]">yourself.</span></h2><p className="mt-7 max-w-sm text-base leading-7 text-white/60">Tell us what you&apos;re working towards. We&apos;ll help you find the membership and starting point that fit.</p><div className="mt-10 border-l-2 border-[#c6ff64] pl-5"><p className="text-[0.68rem] font-black uppercase tracking-[0.13em] text-white">Jonex Gym · Your city</p><p className="mt-2 max-w-sm text-sm leading-6 text-white/55">Add your exact address and phone or WhatsApp number here before launch.</p></div></div>
          <LeadForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#07100c] py-8">
        <div className={`${container} flex flex-col gap-6 text-[0.64rem] font-bold uppercase tracking-[0.12em] text-white/45 sm:flex-row sm:items-center sm:justify-between`}>
          <a href="#top" className="group inline-flex items-center gap-3" aria-label="Back to top"><Image src="/assets/jonex-gym-logo.png" alt="Jonex Gym" width={56} height={56} className="size-11 rounded-full border border-[#c6ff64]/70 object-cover transition-transform duration-300 group-hover:rotate-6" /><span className="text-sm font-black tracking-[-0.05em] text-white">JONEX <span className="text-[#c6ff64]">GYM</span></span></a>
          <p>© 2026 Jonex Gym. Built for the work.</p>
          <div className="flex gap-5"><a href="#memberships" className="transition-colors hover:text-[#c6ff64]">Memberships</a><a href="#join" className="transition-colors hover:text-[#c6ff64]">Contact</a></div>
        </div>
      </footer>
    </main>
  );
}
