import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRight(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function Check(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" {...props}><path d="m5 12 4.2 4.2L19 6.5" /></svg>;
}

export function Menu(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function Close(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function Bolt(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}><path d="m13 2-9 12h7l-1 8 10-13h-7V2Z" /></svg>;
}
