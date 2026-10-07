"use client";

import { useState } from "react";
import Image from "next/image";
import { navigation } from "../data/site";
import { Close, Menu } from "./icons";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const closeNavigation = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex h-20 w-[min(100%-2rem,1280px)] items-center justify-between border-b border-white/15 md:h-24">
        <a href="#top" className="group flex items-center gap-3" onClick={closeNavigation} aria-label="Jonex Gym home">
          <Image src="/assets/jonex-gym-logo.png" alt="Jonex Gym" width={64} height={64} priority className="size-12 rounded-full border border-[#c6ff64]/80 object-cover transition-transform duration-300 group-hover:rotate-6" />
          <span className="text-[0.69rem] font-black uppercase leading-[0.9] tracking-[0.18em] text-white">Jonex<br /><span className="text-[#c6ff64]">Gym</span></span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-[#c6ff64]">{item.label}</a>)}
          <a href="#join" className="rounded-full bg-[#c6ff64] px-5 py-3 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#07100c] transition-transform hover:-translate-y-0.5">Train with us</a>
        </nav>

        <button type="button" onClick={() => setIsOpen((open) => !open)} className="grid size-10 place-items-center text-white lg:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"}>
          {isOpen ? <Close className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`${isOpen ? "grid" : "hidden"} mx-auto w-[min(100%-2rem,1280px)] gap-5 border-b border-white/15 bg-[#09120e]/95 px-5 py-7 backdrop-blur lg:hidden`} aria-label="Mobile navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeNavigation} className="text-sm font-bold uppercase tracking-[0.14em] text-white">{item.label}</a>)}
        <a href="#join" onClick={closeNavigation} className="mt-1 w-fit rounded-full bg-[#c6ff64] px-5 py-3 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#07100c]">Train with us</a>
      </nav>
    </header>
  );
}
