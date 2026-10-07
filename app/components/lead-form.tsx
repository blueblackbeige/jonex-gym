"use client";

import { FormEvent, useState } from "react";

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubmitted(true);
  }

  return (
    <form onSubmit={submitLead} className="grid gap-4 sm:grid-cols-2" aria-label="Join Jonex Gym">
      <label className="grid gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-white/55">
        Your name
        <input required name="name" placeholder="Your name" className="h-12 border-b border-white/25 bg-transparent px-0 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#c6ff64]" />
      </label>
      <label className="grid gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-white/55">
        Phone number
        <input required name="phone" inputMode="tel" placeholder="Mobile number" className="h-12 border-b border-white/25 bg-transparent px-0 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#c6ff64]" />
      </label>
      <label className="grid gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-white/55 sm:col-span-2">
        I&apos;m interested in
        <select required name="membership" defaultValue="" className="h-12 border-b border-white/25 bg-transparent px-0 text-sm text-white outline-none transition-colors focus:border-[#c6ff64]">
          <option value="" disabled className="bg-[#0b1510]">Choose a membership</option>
          <option className="bg-[#0b1510]">Starter · 3 months</option>
          <option className="bg-[#0b1510]">Committed · 6 months</option>
          <option className="bg-[#0b1510]">All year · 12 months</option>
          <option className="bg-[#0b1510]">Personal training</option>
        </select>
      </label>
      <div className="mt-3 sm:col-span-2">
        <button type="submit" className="rounded-full bg-[#c6ff64] px-6 py-3.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#07100c] transition-transform hover:-translate-y-0.5">Request a callback</button>
        {isSubmitted && <p className="mt-4 text-sm leading-6 text-[#c6ff64]" role="status">Thanks. We&apos;ll be in touch to arrange your first session.</p>}
      </div>
    </form>
  );
}
