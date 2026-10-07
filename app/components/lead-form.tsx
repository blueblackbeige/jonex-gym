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
    <form onSubmit={submitLead} className="grid gap-5 sm:grid-cols-2" aria-label="Plan a visit to Jonex Gym">
      <label className="grid gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#242424]/65">
        Your name
        <input required name="name" placeholder="What should we call you?" className="h-12 border-b border-[#242424]/25 bg-transparent px-0 text-sm text-[#151515] outline-none transition-colors placeholder:text-[#242424]/40 focus:border-[#e0b600]" />
      </label>
      <label className="grid gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#242424]/65">
        Phone number
        <input required name="phone" inputMode="tel" placeholder="Your mobile number" className="h-12 border-b border-[#242424]/25 bg-transparent px-0 text-sm text-[#151515] outline-none transition-colors placeholder:text-[#242424]/40 focus:border-[#e0b600]" />
      </label>
      <label className="grid gap-2 text-[0.65rem] font-bold uppercase tracking-[0.13em] text-[#242424]/65 sm:col-span-2">
        What would you like to try?
        <select required name="membership" defaultValue="" className="h-12 border-b border-[#242424]/25 bg-transparent px-0 text-sm text-[#151515] outline-none transition-colors focus:border-[#e0b600]">
          <option value="" disabled>Choose an option</option>
          <option>3 month membership</option>
          <option>6 month membership</option>
          <option>Annual membership</option>
          <option>Personal training</option>
          <option>I would like a tour first</option>
        </select>
      </label>
      <div className="mt-3 sm:col-span-2">
        <button type="submit" className="rounded-full bg-[#151515] px-6 py-3.5 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#fffdf5] transition-transform hover:-translate-y-0.5">Request a visit</button>
        {isSubmitted && <p className="mt-4 text-sm leading-6 text-[#795f00]" role="status">Thanks. Your visit request has been noted.</p>}
      </div>
    </form>
  );
}
