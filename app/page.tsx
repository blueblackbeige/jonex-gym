import Image from "next/image";
import { ArrowUpRight, Bolt, Check } from "./components/icons";
import { LeadForm } from "./components/lead-form";
import { SiteHeader } from "./components/site-header";
import { memberships, schedule, trainingSpaces } from "./data/site";

const container = "mx-auto w-[min(100%-2rem,1280px)]";

const services = [
  ["01", "Strength training", "Solid equipment and enough room to work through every rep.", "/assets/strength.jpg"],
  ["02", "Cardio fitness", "Build your stamina on a floor that is ready whenever you are.", "/assets/cardio.jpg"],
  ["03", "Personal coaching", "Train with a clear plan and a coach who keeps you on track.", "/assets/treadmills.jpg"],
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-white text-[#101010]">
      <SiteHeader />

      <section className="relative isolate min-h-[690px] bg-[#060606] pt-20 text-white md:min-h-[735px] md:pt-[108px]">
        <video autoPlay muted loop playsInline preload="metadata" poster="/assets/facility-hero.jpg" aria-hidden="true" className="absolute inset-0 -z-20 size-full object-cover object-[58%_center] opacity-65">
          <source src="/assets/jonex-gym-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.93)_0%,rgba(0,0,0,0.78)_42%,rgba(0,0,0,0.26)_78%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-x-0 top-20 h-px bg-white/10 md:top-[108px]" />
        <div className={`${container} flex min-h-[610px] flex-col justify-center pb-20 pt-20 md:min-h-[627px] md:pb-24`}>
          <h1 className="font-strong max-w-3xl text-[clamp(3.5rem,7vw,6.6rem)] uppercase leading-[0.9] tracking-[-0.025em]">Start strong.<br /><span className="text-[#f4c400]">Stay stronger.</span></h1>
          <p className="mt-6 max-w-lg text-[1rem] leading-7 text-white/72">Your goals do not need a perfect plan. They need a good place to begin, consistent hours, and a floor that makes you want to come back.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#join" className="inline-flex items-center gap-3 bg-[#f4c400] px-7 py-4 text-[0.67rem] font-black uppercase tracking-[0.13em] text-[#101010] transition hover:bg-white">Become a member <ArrowUpRight className="size-4" /></a>
            <a href="#club" className="inline-flex items-center gap-3 border border-white/50 px-7 py-4 text-[0.67rem] font-black uppercase tracking-[0.13em] text-white transition hover:border-[#f4c400] hover:text-[#f4c400]">Why Jonex <span>↓</span></a>
          </div>
        </div>
        <div className="absolute bottom-8 right-[max(1rem,calc((100vw-1280px)/2))] hidden items-center gap-3 text-right md:flex"><span className="grid size-10 place-items-center rounded-full border border-[#f4c400] text-[#f4c400]">↘</span><p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-white/70">A better way<br />to spend your hour</p></div>
      </section>

      <section id="club" className="relative z-10 -mt-12 pb-16 md:-mt-20 md:pb-24">
        <div className={`${container} grid gap-5 md:grid-cols-3`}>
          {services.map(([number, title, copy, image]) => <article key={title} className="group min-h-[290px] bg-white p-7 shadow-[0_12px_34px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-start justify-between"><span className="font-strong text-2xl text-[#d5a600]">{number}</span><div className="relative size-14 overflow-hidden rounded-full"><Image src={image} alt="" fill sizes="56px" className="object-cover grayscale transition duration-300 group-hover:grayscale-0" /></div></div>
            <h2 className="font-strong mt-14 text-3xl uppercase leading-none">{title}</h2>
            <p className="mt-4 max-w-[15rem] text-sm leading-6 text-[#666]">{copy}</p>
            <a href="#join" className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.13em] text-[#101010] transition-colors hover:text-[#bb9100]">Learn more <ArrowUpRight className="size-3.5" /></a>
          </article>)}
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className={`${container} grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center`}>
          <div className="relative min-h-[440px] overflow-hidden bg-[#151515] md:min-h-[570px]"><Image src="/assets/strength.jpg" alt="Jonex Gym strength equipment" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /><div className="absolute bottom-0 left-0 h-2/5 w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.6),transparent)]" /><p className="absolute bottom-7 left-7 font-strong text-3xl uppercase text-white">Built for<br /><span className="text-[#f4c400]">your progress</span></p></div>
          <div className="max-w-xl lg:pl-8"><p className="text-[0.66rem] font-black uppercase tracking-[0.17em] text-[#c49800]">About Jonex Gym</p><h2 className="font-strong mt-5 text-[clamp(3rem,5vw,5.6rem)] uppercase leading-[0.89] tracking-[-0.02em]">A good gym is more than machines.</h2><p className="mt-6 text-base leading-7 text-[#5a5a5a]">It is the place you make time for yourself. At Jonex, you will find serious equipment, open floor space, and a team that wants you to feel comfortable from day one.</p><p className="mt-4 text-base leading-7 text-[#5a5a5a]">Train for a stronger body, a clearer mind, or the satisfaction of showing up again tomorrow. It all counts.</p><a href="#memberships" className="mt-8 inline-flex items-center gap-3 bg-[#101010] px-7 py-4 text-[0.67rem] font-black uppercase tracking-[0.13em] text-white transition hover:bg-[#f4c400] hover:text-[#101010]">See membership options <ArrowUpRight className="size-4" /></a></div>
        </div>
      </section>

      <section id="training" className="bg-[#f4c400] py-16 text-[#101010] md:py-24">
        <div className={container}>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-[0.66rem] font-black uppercase tracking-[0.17em] text-[#6f5600]">Our training floor</p><h2 className="font-strong mt-4 max-w-2xl text-[clamp(3rem,5.6vw,6rem)] uppercase leading-[0.89] tracking-[-0.02em]">Pick your focus. Bring your effort.</h2></div><p className="max-w-sm text-base leading-7 text-[#4c3b00]">Everything you need for a complete workout, whether today is about power, pace, or simply moving your body.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {trainingSpaces.map((space) => <article key={space.title} className="group relative min-h-[360px] overflow-hidden bg-[#101010] text-white"><Image src={space.image} alt={`${space.title} at Jonex Gym`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /><div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.9),transparent_75%)]" /><div className="absolute inset-x-6 bottom-6"><span className="font-strong text-2xl text-[#f4c400]">{space.number}</span><h3 className="font-strong mt-2 text-3xl uppercase leading-none">{space.title}</h3><p className="mt-3 text-sm leading-6 text-white/75">{space.description}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="memberships" className="bg-[#101010] py-16 text-white md:py-28">
        <div className={container}>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-[0.66rem] font-black uppercase tracking-[0.17em] text-[#f4c400]">Memberships</p><h2 className="font-strong mt-4 max-w-2xl text-[clamp(3rem,5.6vw,6rem)] uppercase leading-[0.89] tracking-[-0.02em]">Choose your commitment.</h2></div><p className="max-w-sm text-base leading-7 text-white/62">Clear prices, full access, and no complicated decisions. Find the plan that lets you keep going.</p></div>
          <div className="mt-12 grid gap-px bg-white/25 lg:grid-cols-3">
            {memberships.map((plan) => <article key={plan.name} className={`flex min-h-[420px] flex-col p-8 ${plan.highlighted ? "bg-[#f4c400] text-[#101010]" : "bg-[#101010]"}`}>
              <p className={`text-[0.63rem] font-black uppercase tracking-[0.15em] ${plan.highlighted ? "text-[#5f4a00]" : "text-[#f4c400]"}`}>{plan.eyebrow}</p><h3 className="font-strong mt-7 text-4xl uppercase leading-none">{plan.name}</h3><p className={`mt-4 text-sm leading-6 ${plan.highlighted ? "text-[#463700]" : "text-white/65"}`}>{plan.description}</p>
              <div className="mt-7 flex items-end gap-2"><b className="font-strong text-5xl tracking-[-0.02em]">{plan.price}</b><span className={`mb-1 text-[0.64rem] font-bold uppercase tracking-[0.1em] ${plan.highlighted ? "text-[#5f4a00]" : "text-white/50"}`}>for {plan.period}</span></div>
              <ul className={`mt-7 grid gap-3 text-sm ${plan.highlighted ? "text-[#342a00]" : "text-white/75"}`}>{plan.features.map((feature) => <li key={feature} className="flex gap-2"><Check className={`size-4 shrink-0 ${plan.highlighted ? "text-[#101010]" : "text-[#f4c400]"}`} />{feature}</li>)}</ul>
              <a href="#join" className={`mt-auto inline-flex w-fit items-center gap-2 px-5 py-3.5 text-[0.65rem] font-black uppercase tracking-[0.13em] transition ${plan.highlighted ? "bg-[#101010] text-white hover:bg-white hover:text-[#101010]" : "border border-white/35 text-white hover:border-[#f4c400] hover:text-[#f4c400]"}`}>Get started <ArrowUpRight className="size-4" /></a>
            </article>)}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2"><article className="border border-white/20 p-7"><p className="text-[0.63rem] font-black uppercase tracking-[0.15em] text-[#f4c400]">One-to-one support</p><h3 className="font-strong mt-3 text-3xl uppercase">Personal training</h3><p className="mt-3 max-w-md text-sm leading-6 text-white/65">Get a routine that makes sense for your goals and a coach to help you make every session count.</p><p className="font-strong mt-6 text-3xl text-[#f4c400]">₹3,000 <span className="text-base text-white/60">/ month</span></p></article><article className="border border-[#f4c400] bg-[#1d1b12] p-7"><p className="text-[0.63rem] font-black uppercase tracking-[0.15em] text-[#f4c400]">Ages 15 to 18</p><h3 className="font-strong mt-3 text-3xl uppercase">Young champions</h3><p className="mt-3 max-w-md text-sm leading-6 text-white/65">A special annual membership for young members who are ready to build a lasting routine.</p><p className="font-strong mt-6 text-3xl text-[#f4c400]">₹3,999 <span className="text-base text-white/60">/ year</span></p></article></div>
        </div>
      </section>

      <section id="hours" className="bg-white py-16 text-[#101010] md:py-28">
        <div className={`${container} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end`}>
          <div><p className="text-[0.66rem] font-black uppercase tracking-[0.17em] text-[#c49800]">Opening hours</p><h2 className="font-strong mt-5 text-[clamp(3rem,5vw,5.5rem)] uppercase leading-[0.89] tracking-[-0.02em]">Find the hour that works for you.</h2><p className="mt-6 max-w-sm text-base leading-7 text-[#5a5a5a]">Early before work or late after a long day, the floor is open when you are ready to put in the time.</p></div>
          <dl className="border-y border-[#101010]/20">{schedule.map(([day, time]) => <div key={day} className="flex flex-col gap-2 border-b border-[#101010]/15 py-6 last:border-0 sm:flex-row sm:items-center sm:justify-between"><dt className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#6a6a6a]">{day}</dt><dd className="font-strong m-0 text-2xl uppercase text-[#101010]">{time}</dd></div>)}</dl>
        </div>
      </section>

      <section id="join" className="bg-[#f4c400] py-16 text-[#101010] md:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center`}>
          <div><p className="text-[0.66rem] font-black uppercase tracking-[0.17em] text-[#6f5600]">Your first visit</p><h2 className="font-strong mt-5 max-w-lg text-[clamp(3rem,5vw,5.5rem)] uppercase leading-[0.89] tracking-[-0.02em]">One form. One good decision.</h2><p className="mt-6 max-w-sm text-base leading-7 text-[#4c3b00]">Tell us what you are looking for. We will help you choose the right way to start at Jonex.</p><div className="mt-9 flex gap-3"><Bolt className="size-5 shrink-0" /><p className="text-sm leading-6 text-[#4c3b00]"><b className="block text-[#101010]">Visit Jonex Gym</b>Add your street address, phone number, and WhatsApp link before launch so members can reach you right away.</p></div></div>
          <div className="bg-white p-7 shadow-[10px_10px_0_#101010] sm:p-10"><h3 className="font-strong text-3xl uppercase">Plan a visit</h3><p className="mt-2 text-sm leading-6 text-[#5a5a5a]">We will make your first session feel simple.</p><div className="mt-7"><LeadForm /></div></div>
        </div>
      </section>

      <footer className="bg-[#050505] pt-16 text-white md:pt-20">
        <div className={`${container} grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.9fr] lg:gap-10`}>
          <div className="max-w-xs">
            <a href="#top" className="inline-flex items-center gap-3" aria-label="Back to top"><Image src="/assets/jonex-gym-logo.png" alt="Jonex Gym" width={72} height={72} className="size-14 rounded-full object-cover" /><span className="font-strong text-3xl text-white">JONEX <span className="text-[#f4c400]">GYM</span></span></a>
            <p className="mt-6 text-sm leading-6 text-white/55">A proper place to build strength, find your rhythm, and keep a promise to yourself.</p>
            <p className="mt-5 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#f4c400]">Your city · India</p>
          </div>
          <div>
            <h3 className="font-strong text-xl uppercase tracking-wide">Company</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/60"><li><a href="#club" className="transition-colors hover:text-[#f4c400]">About Jonex</a></li><li><a href="#training" className="transition-colors hover:text-[#f4c400]">Training floor</a></li><li><a href="#memberships" className="transition-colors hover:text-[#f4c400]">Memberships</a></li><li><a href="#join" className="transition-colors hover:text-[#f4c400]">Plan a visit</a></li></ul>
          </div>
          <div>
            <h3 className="font-strong text-xl uppercase tracking-wide">Open hours</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-5 text-white/60"><li>Monday to Saturday<br /><b className="font-semibold text-white">6:00 AM to 11:00 PM</b></li><li>Sunday<br /><b className="font-semibold text-white">7:00 AM to 9:00 PM</b></li></ul>
          </div>
          <div>
            <h3 className="font-strong text-xl uppercase tracking-wide">Start here</h3>
            <ul className="mt-5 grid gap-3 text-sm text-white/60"><li><a href="#join" className="transition-colors hover:text-[#f4c400]">Book a gym tour</a></li><li><a href="#memberships" className="transition-colors hover:text-[#f4c400]">View gym plans</a></li><li><a href="#training" className="transition-colors hover:text-[#f4c400]">Explore equipment</a></li><li><a href="#join" className="transition-colors hover:text-[#f4c400]">Talk to the team</a></li></ul>
          </div>
        </div>
        <div className="border-t border-white/15"><div className={`${container} flex flex-col gap-3 py-6 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/40 sm:flex-row sm:items-center sm:justify-between`}><p>© 2026 Jonex Gym. All rights reserved.</p><p>Made for everyday strength.</p></div></div>
      </footer>
    </main>
  );
}
