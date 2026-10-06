"use client";

import { FormEvent, useState } from "react";

const memberships = [
  { label: "Best value", title: "Annual cardio", price: "₹6,000", cadence: "/ year", description: "A full year to make your routine permanent.", features: ["12 months of gym access", "Cardio floor included", "Strength & conditioning floor"] },
  { label: "Most chosen", title: "6 months", price: "₹4,200", cadence: "/ 6 months", description: "Half a year of complete training access.", features: ["Gym-floor access", "Cardio floor included", "Strength & conditioning floor"], featured: true },
  { label: "Strength only", title: "6 months", price: "₹3,000", cadence: "/ 6 months", description: "For members focused on the strength floor.", features: ["Gym-floor access", "No cardio access", "Strength & conditioning floor"] },
  { label: "Cardio included", title: "3 months", price: "₹2,000", cadence: "/ 3 months", description: "A focused three-month start with cardio access.", features: ["Gym-floor access", "Cardio floor included", "Strength & conditioning floor"] },
  { label: "Strength only", title: "3 months", price: "₹1,800", cadence: "/ 3 months", description: "A lean, practical plan to start training.", features: ["Gym-floor access", "No cardio access", "Strength & conditioning floor"] },
  { label: "One-time session", title: "Walk-in", price: "₹1,500", cadence: "today", description: "Drop in, train hard, and see the Jonex floor.", features: ["One gym session", "Was ₹1,800", "Ask the team for timings"], sale: true },
];

const zones = [
  ["Strength floor", "Build power. Get stronger.", "/assets/strength.jpg"],
  ["Cardio fitness", "Condition your engine.", "/assets/cardio.jpg"],
  ["Treadmill lane", "Own the distance.", "/assets/treadmills.jpg"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="offer-strip">Durga Puja youth offer <b>·</b> 15–18 years <b>·</b> ₹3,999 for one year</div>
      <header className="site-header">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#home"><img src="/assets/jonex-logo.jpg" alt="Jonex Gym logo" /><span>Jonex<br /><em>Gym</em></span></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><i></i><i></i><i></i></button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a><a href="#programs" onClick={closeMenu}>Programs</a><a href="#plans" onClick={closeMenu}>Pricing</a><a href="#club" onClick={closeMenu}>About</a><a href="#contact" onClick={closeMenu}>Contact</a><a className="lime-button nav-join" href="#contact" onClick={closeMenu}>Join now</a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image"></div><div className="hero-shade"></div>
        <div className="wrap hero-content">
          <p className="kicker">Stronger · Healthier · Happier</p>
          <h1>Fitness<br />for a <span>better you.</span></h1>
          <p className="hero-copy">Modern equipment. Focused training. A gym floor built to make every session count.</p>
          <div className="hero-actions"><a className="lime-button" href="#contact">Get started</a><a className="text-link" href="#programs">Explore the floor <b>↗</b></a></div>
          <div className="quick-points"><span><b>01</b> Serious equipment</span><span><b>02</b> Cardio access</span><span><b>03</b> Flexible plans</span><span><b>04</b> Personal training</span></div>
        </div>
        <aside className="journey-card"><p>Your Jonex<br />journey</p><ul><li>Build strength</li><li>Improve stamina</li><li>Train with purpose</li></ul></aside>
      </section>

      <section className="programs section" id="programs"><div className="wrap"><div className="section-head"><div><p className="kicker lime">Our programs</p><h2>Train your <span>way.</span></h2></div><p>From strength to cardio, we have the equipment and floor space to keep you moving.</p></div><div className="zone-grid">{zones.map(([title, description, image], index) => <article className="zone" key={title}><img src={image} alt={`${title} at Jonex Gym`} /><div className="zone-overlay"><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>

      <section className="club section" id="club"><div className="wrap club-grid"><div className="club-copy"><p className="kicker lime">More than a gym</p><h2>A room for<br /><span>real work.</span></h2><p>Jonex Gym gives you the room, equipment, and focused environment to build a routine that lasts. Come in with a goal. Leave knowing you moved closer.</p><a className="lime-button" href="#plans">See membership plans</a><div className="club-stats"><span><b>7 days</b> Open weekly</span><span><b>3 zones</b> Train your way</span><span><b>1 goal</b> Keep showing up</span></div></div><div className="club-photo"><img src="/assets/facility-hero.jpg" alt="Jonex Gym training floor with machines" /><div>Real equipment.<br /><b>Real progress.</b></div></div></div></section>

      <section className="plans section" id="plans"><div className="wrap"><div className="section-head"><div><p className="kicker lime">Membership plans</p><h2>Choose your <span>plan.</span></h2></div><p>Clear pricing, no complicated tiers. Pick the time and access that work for your routine.</p></div><div className="plans-grid">{memberships.map((plan) => <article className={`plan-card ${plan.featured ? "featured" : ""} ${plan.sale ? "sale" : ""}`} key={`${plan.title}-${plan.price}`}><span className="plan-label">{plan.label}</span><h3>{plan.title}</h3><p className="plan-description">{plan.description}</p><div className="price"><b>{plan.price}</b><span>{plan.cadence}</span></div><ul>{plan.features.map((item) => <li key={item}>{item}</li>)}</ul><a className={plan.featured ? "dark-button" : "line-button"} href="#contact">Choose this plan</a></article>)}</div>
        <div className="extras"><article><span>One-on-one support</span><h3>Personal trainer</h3><b>₹3,000 <small>/ month</small></b><p>Personal coaching to make every session focused and intentional.</p><a href="#contact">Ask about PT <b>↗</b></a></article><article className="youth-offer"><span>Durga Puja offer</span><h3>Young champions</h3><b>₹3,999 <small>/ one year</small></b><p>Special membership for boys and girls aged 15–18 years.</p><a className="dark-button" href="#contact">Claim youth offer</a></article></div>
      </div></section>

      <section className="schedule section"><div className="wrap schedule-grid"><div><p className="kicker lime">Your routine, your time</p><h2>Make time.<br /><span>Make progress.</span></h2><p>Train before work, after class, or whenever you’re ready to earn the next rep.</p></div><div className="hours"><div><span>Monday — Saturday</span><b>6:00 AM — 11:00 PM</b></div><div><span>Sunday</span><b>7:00 AM — 9:00 PM</b></div><div><span>Personal training</span><b>₹3,000 / month</b></div></div></div></section>

      <section className="contact section" id="contact"><div className="wrap contact-grid"><div><p className="kicker lime">Start your session</p><h2>Ready when<br /><span>you are.</span></h2><p>Share your goal and preferred plan. The Jonex team will help you take the first step.</p><div className="address"><b>Jonex Gym · Your City</b><span>Add the exact street address and phone/WhatsApp number here before launch.</span></div></div><form onSubmit={submitForm} className="contact-form"><label>Your name<input name="name" required placeholder="Name" /></label><label>Phone number<input name="phone" required inputMode="tel" placeholder="Mobile number" /></label><label className="wide">Plan you’re interested in<select name="plan" required defaultValue=""><option value="" disabled>Select a plan</option><option>Annual with cardio — ₹6,000</option><option>6 months with cardio — ₹4,200</option><option>6 months without cardio — ₹3,000</option><option>3 months with cardio — ₹2,000</option><option>3 months without cardio — ₹1,800</option><option>One-time session — ₹1,500</option><option>Personal trainer — ₹3,000/month</option><option>Durga Puja youth offer — ₹3,999/year</option></select></label><button className="lime-button wide" type="submit">Request a callback</button>{sent && <p className="form-status">Thanks — your interest is noted. Please call or visit Jonex Gym to confirm your session.</p>}</form></div></section>

      <footer><div className="wrap footer"><a className="brand" href="#home"><img src="/assets/jonex-logo.jpg" alt="" /><span>Jonex<br /><em>Gym</em></span></a><span>© 2026 Jonex Gym. Built for the work.</span><div><a href="#plans">Pricing</a><a href="#contact">Contact</a></div></div></footer>
    </main>
  );
}
