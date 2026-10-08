"use client";

import { useState } from "react";
import Image from "next/image";
import { navigation } from "../data/site";
import { Close, Menu } from "./icons";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const closeNavigation = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-[#050505] text-white">
      <div className="mx-auto flex h-20 w-[min(100%-2rem,1280px)] items-center justify-between md:h-[108px]">
        <a href="#top" className="group flex items-center gap-3" onClick={closeNavigation} aria-label="Jonex Gym home">
          <Image src="/assets/jonex-gym-logo.png" alt="Jonex Gym" width={64} height={64} priority className="size-12 rounded-full border border-[#f4c400]/80 object-cover transition-transform duration-300 group-hover:rotate-6" />
          <span className="font-strong text-xl leading-none tracking-wide text-white">JONEX <span className="text-[#f4c400]">GYM</span></span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-[#f4c400]">{item.label}</a>)}
          <a href="#join" className="bg-[#f4c400] px-6 py-4 text-[0.66rem] font-black uppercase tracking-[0.13em] text-[#151515] transition-colors hover:bg-white">Become a member</a>
        </nav>

        <button type="button" onClick={() => setIsOpen((open) => !open)} className="grid size-10 place-items-center text-white lg:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"}>
          {isOpen ? <Close className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <nav id="mobile-navigation" className={`${isOpen ? "grid" : "hidden"} mx-auto w-[min(100%-2rem,1280px)] gap-5 border-t border-white/15 bg-[#050505] px-5 py-7 lg:hidden`} aria-label="Mobile navigation">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeNavigation} className="text-sm font-bold uppercase tracking-[0.14em] text-white">{item.label}</a>)}
        <a href="#join" onClick={closeNavigation} className="mt-1 w-fit bg-[#f4c400] px-5 py-3 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#151515]">Become a member</a>
      </nav>
    </header>
  );
}
