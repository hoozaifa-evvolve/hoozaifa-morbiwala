"use client";

import { useState } from "react";

const missions = [
  {
    id: "architecture",
    label: "Solutions Architecture",
    eyebrow: "DISCOVERY → DEPLOYMENT",
    title: "Turn operational friction into a launchable system.",
    copy: "Technical discovery, integration maps, tailored demos, POCs, and rollout plans—translated clearly for buyers, builders, and operators.",
    signals: ["REST APIs", "CRM + DATA", "VOICE + TELEPHONY", "SOLUTION BRIEFS"],
  },
  {
    id: "automation",
    label: "AI Automation",
    eyebrow: "RELIABLE BY DESIGN",
    title: "Automate the work between the tools.",
    copy: "Production AI agents and workflows with validation, retries, scoped tool access, monitoring, and human handoffs built in.",
    signals: ["AI AGENTS", "N8N + ZAPIER", "RAG + TOOL CALLING", "INTERNAL APPS"],
  },
  {
    id: "delivery",
    label: "Enterprise Delivery",
    eyebrow: "SIGNED → LIVE",
    title: "Own the last mile to customer value.",
    copy: "Configuration, QA, training, go-live, and optimization for complex enterprise programs—across functions, regions, and time zones.",
    signals: ["5+ CONCURRENT", "95% ON-TIME", "<2% LOGO CHURN", "REMOTE GLOBAL"],
  },
];

const telemetry = [
  ["10+", "YEARS IN SAAS"],
  ["$1.5M+", "ARR INFLUENCED"],
  ["200K+", "MONTHLY CALLS"],
  ["99.9%", "UPTIME"],
];

const logs = [
  {
    code: "LOG 01",
    title: "Voice AI at scale",
    note: "Real-time systems connecting speech, telephony, streaming audio, and tool calls.",
    stats: [["200K+", "calls / month"], ["850ms", "median latency"], ["99.9%", "uptime"]],
  },
  {
    code: "LOG 02",
    title: "Technical Sales",
    note: "Discovery, solution architecture, tailored demos, POCs, and technical objection handling.",
    stats: [["72%", "technical win rate"], ["65%", "POC conversion"], ["$1.5M+", "ARR influenced"]],
  },
  {
    code: "LOG 03",
    title: "Automation",
    note: "Production workflows and internal tools across revenue, support, and customer success.",
    stats: [["30+", "production systems"], ["25+", "hours saved / week"], ["<5 min", "lead response"]],
  },
];

const timeline = [
  ["2024—NOW", "Synthflow", "Sr. Solutions Engineer", "Enterprise Voice AI delivery, solution architecture, automation."],
  ["2022—2023", "Rayobyte", "Technical Account Manager", "Enterprise accounts, AI tooling, operations, revenue engineering."],
  ["2017—2022", "SmartKargo", "Implementation Manager", "SaaS implementation and onboarding for air cargo and logistics."],
  ["2016—2017", "Schlesinger Group", "Project Manager", "Cross-functional project delivery in Los Angeles."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const mission = missions[active];

  function onTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % missions.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + missions.length) % missions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = missions.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`tab-${missions[next].id}`)?.focus();
  }

  return (
    <main>
      <div className="scanline" aria-hidden="true" />
      <header className="topbar">
        <a className="identity" href="#command-deck" aria-label="Hoozaifa Morbiwala, home">
          <span className="mark">HM</span>
          <span>HOOZAIFA MORBIWALA</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#mission-logs">Proof</a>
          <a href="#operator-profile">Profile</a>
          <a className="nav-cta" href="#open-channel">Open channel</a>
        </nav>
      </header>

      <section className="hero section-shell" id="command-deck" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="crosshair"><i /><i /></div>
          <div className="coordinate">23.5505° S / 46.6333° W</div>
          <div className="signal-trace"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
        <div className="hero-copy">
          <p className="kicker"><span className="pulse" /> COMMAND DECK / SÃO PAULO / ONLINE</p>
          <h1 id="hero-title">AI systems that<br />make it to <em>launch.</em></h1>
          <p className="hero-line">Solutions Engineer connecting discovery, architecture, automation, and enterprise delivery.</p>
          <div className="hero-actions">
            <a className="button primary" href="#mission-logs">View mission logs <Arrow /></a>
            <a className="button secondary" href="#open-channel">Start a conversation</a>
          </div>
        </div>
        <p className="availability">OPEN TO SOLUTIONS ENGINEERING<br />AND AI DELIVERY ROLES</p>
        <div className="scroll-cue" aria-hidden="true"><span>SCROLL TO TELEMETRY</span><i /></div>
      </section>

      <section className="telemetry section-shell" aria-labelledby="telemetry-title">
        <div className="section-heading">
          <p className="kicker">LIVE TELEMETRY</p>
          <h2 id="telemetry-title">Proof, at a glance.</h2>
        </div>
        <div className="metric-grid">
          {telemetry.map(([value, label], index) => (
            <div className="metric" key={label} style={{"--delay": `${index * 100}ms`} as React.CSSProperties}>
              <span className="metric-index">0{index + 1}</span>
              <strong>{value}</strong>
              <span>{label}</span>
              <div className="data-bar"><i style={{width: `${[78, 92, 84, 99][index]}%`}} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mission-select section-shell" aria-labelledby="select-title">
        <div className="section-heading row">
          <div><p className="kicker">MISSION SELECT</p><h2 id="select-title">Where I create leverage.</h2></div>
          <p className="section-note">Three operating modes.<br />One accountable owner.</p>
        </div>
        <div className="mission-console">
          <div className="tabs" role="tablist" aria-label="Mission capabilities" aria-orientation="vertical">
            {missions.map((item, index) => (
              <button
                id={`tab-${item.id}`}
                role="tab"
                aria-selected={active === index}
                aria-controls={`panel-${item.id}`}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                key={item.id}
              >
                <span>0{index + 1}</span>{item.label}<i aria-hidden="true">→</i>
              </button>
            ))}
          </div>
          <div className="mission-panel" id={`panel-${mission.id}`} role="tabpanel" aria-labelledby={`tab-${mission.id}`}>
            <div className="panel-radar" aria-hidden="true"><i /><i /><span /></div>
            <p className="kicker">{mission.eyebrow}</p>
            <h3>{mission.title}</h3>
            <p>{mission.copy}</p>
            <ul>{mission.signals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="logs section-shell" id="mission-logs" aria-labelledby="logs-title">
        <div className="section-heading row">
          <div><p className="kicker">MISSION LOGS</p><h2 id="logs-title">Systems shipped.<br />Outcomes recorded.</h2></div>
          <p className="section-note">Selected operational evidence<br />from live enterprise work.</p>
        </div>
        <div className="log-list">
          {logs.map((log) => (
            <article className="log" key={log.code}>
              <p className="log-code">{log.code} <span>COMPLETE</span></p>
              <div><h3>{log.title}</h3><p>{log.note}</p></div>
              <div className="log-stats">{log.stats.map(([value, label]) => <p key={label}><strong>{value}</strong><span>{label}</span></p>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="sequence section-shell" aria-labelledby="sequence-title">
        <div className="section-heading">
          <p className="kicker">LAUNCH SEQUENCE</p>
          <h2 id="sequence-title">From ambiguity to orbit.</h2>
        </div>
        <ol>
          {["Discover", "Architect", "Build", "QA", "Launch", "Optimize"].map((step, index) => (
            <li key={step}><span>0{index + 1}</span><strong>{step}</strong><i aria-hidden="true">→</i></li>
          ))}
        </ol>
      </section>

      <section className="profile section-shell" id="operator-profile" aria-labelledby="profile-title">
        <div className="profile-intro">
          <p className="kicker">OPERATOR PROFILE</p>
          <h2 id="profile-title">Technical depth.<br />Delivery instinct.</h2>
          <p>10+ years turning complex SaaS requirements into systems customers can understand, trust, and use.</p>
          <div className="profile-meta">
            <p><span>BASE</span>São Paulo, Brazil</p>
            <p><span>MODE</span>Remote / global teams</p>
            <p><span>LANGUAGES</span>English · Portuguese · Spanish · Hindi · Marathi</p>
          </div>
        </div>
        <div className="timeline">
          {timeline.map(([year, company, role, detail]) => (
            <article key={company}>
              <time>{year}</time><div><h3>{company}</h3><p className="role">{role}</p><p>{detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="open-channel" aria-labelledby="contact-title">
        <div className="contact-main">
          <p className="kicker"><span className="pulse" /> OPEN CHANNEL</p>
          <h2 id="contact-title">Have a complex system<br />that needs to <em>ship?</em></h2>
          <p>Let’s talk about the opportunity, the customer, and what “live” needs to mean.</p>
          <div className="hero-actions">
            <a className="button primary" href="mailto:mhoozaifa@gmail.com?subject=Solutions%20Engineering%20Opportunity">Email Hoozaifa <Arrow /></a>
            <a className="button secondary" href="https://wa.me/5511999256971?text=Hi%20Hoozaifa%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity." target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <aside className="resume-console" aria-labelledby="resume-title">
          <p className="kicker">RESUME CONSOLE</p>
          <h3 id="resume-title">Choose your briefing.</h3>
          <a href="/Hoozaifa-Morbiwala-Solutions-Engineer-Resume.pdf" download><span><b>01</b>Solutions Engineering<small>AI · AUTOMATION · PRESALES</small></span><Arrow /></a>
          <a href="/Hoozaifa-Morbiwala-Onboarding-Implementation-Resume.pdf" download><span><b>02</b>Onboarding & Implementation<small>ADOPTION · DELIVERY · SUCCESS</small></span><Arrow /></a>
        </aside>
      </section>

      <footer className="section-shell">
        <p>HOOZAIFA MORBIWALA <span>·</span> AI SOLUTIONS ENGINEER</p>
        <p>MISSION CONTROL / 2026</p>
      </footer>
    </main>
  );
}
