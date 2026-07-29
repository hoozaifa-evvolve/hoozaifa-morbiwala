const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const emailHref = "mailto:mhoozaifa@gmail.com?subject=Solutions%20Engineering%20Opportunity";
const whatsappHref = "https://wa.me/5511999256971?text=Hi%20Hoozaifa%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity.";

type System = {
  label: string;
  title: string;
  context: string;
  problem: string;
  steps: string[];
  description: string;
  outcomes: [string, string][];
  stack: string[];
};

const systems: System[] = [
  {
    label: "SYSTEM 01 · VOICE AI",
    title: "AI Front Desk & Booking Agent",
    context: "[CONFIRM: attribution for AI Front Desk & Booking Agent — Synthflow, client project, etc.]",
    problem: "Missed calls, slow follow-up, and staff tied up answering the same questions.",
    steps: ["Answer", "Qualify", "Book", "Update CRM", "Handoff"],
    description: "I built a voice system that qualifies callers, books time, updates customer records, and brings in a person when needed.",
    outcomes: [["81%", "call containment"], ["850ms", "median response latency"], ["4.6/5", "post-call CSAT"]],
    stack: ["Twilio", "Deepgram", "ElevenLabs", "Calendly", "HubSpot", "Slack"],
  },
  {
    label: "SYSTEM 02 · SALES AUTOMATION",
    title: "Lead-to-Meeting Revenue Engine",
    context: "[CONFIRM: attribution for Lead-to-Meeting Revenue Engine — employer, client project, etc.]",
    problem: "Leads went cold while teams researched, routed, and followed up manually.",
    steps: ["Capture", "Enrich", "Score", "Assign", "Alert", "Follow up"],
    description: "I connected lead capture, enrichment, CRM ownership, scheduling, and rep alerts into one fast pipeline.",
    outcomes: [["<5 min", "lead response time"], ["31%", "lift in demo bookings"], ["15K+", "events processed per day"]],
    stack: ["HubSpot", "Salesforce", "Calendly", "Google Meet", "Slack", "n8n"],
  },
  {
    label: "SYSTEM 03 · CUSTOMER SUPPORT",
    title: "AI Support & Living Knowledge Agent",
    context: "[CONFIRM: attribution for AI Support & Living Knowledge Agent — employer, client project, etc.]",
    problem: "Repeated questions consumed support time while answers stayed scattered across tickets, documents, and chat.",
    steps: ["Ingest", "Retrieve", "Resolve", "Create ticket", "Escalate"],
    description: "I built a grounded support agent that resolves routine requests and passes complex cases to people with the full history.",
    outcomes: [["35%", "routine requests auto-resolved"], ["40%", "faster first response"], ["45%", "fewer repeat questions"]],
    stack: ["Zendesk", "Freshdesk", "Confluence", "Slack", "Pinecone", "Supabase"],
  },
  {
    label: "SYSTEM 04 · DELIVERY OPERATIONS",
    title: "Client Onboarding & Operations Autopilot",
    context: "[CONFIRM: attribution for Client Onboarding & Operations Autopilot — employer, client project, etc.]",
    problem: "Growth stalled when intake, setup, approvals, QA, and handoffs depended on memory.",
    steps: ["Intake", "Validate", "Configure", "QA", "Train", "Go live", "Monitor"],
    description: "I connected intake, delivery tasks, documentation, training, alerts, and account health into one repeatable workflow.",
    outcomes: [["3 weeks → 6 days", "client onboarding time"], ["15+", "manual handoffs removed"], ["4×", "active accounts with no added headcount"]],
    stack: ["HubSpot", "Airtable", "Jira", "Google Drive", "Google Meet", "n8n"],
  },
];

function Pipeline({ steps, title }: { steps: string[]; title: string }) {
  const desktopWidth = 1040;
  const gap = desktopWidth / steps.length;
  const mobileHeight = steps.length * 66;
  return (
    <figure className="pipeline">
      <svg className="pipeline-horizontal" viewBox={`0 0 ${desktopWidth} 82`} role="img" aria-label={`${title}: ${steps.join(" to ")}`}>
        <defs><marker id={`arrow-${steps.length}-${steps[0]}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#161513" /></marker></defs>
        {steps.map((step, index) => {
          const x = index * gap + 7;
          const width = gap - 28;
          return <g key={step}>
            {index < steps.length - 1 && <line x1={x + width} y1="41" x2={(index + 1) * gap + 2} y2="41" stroke="#161513" strokeWidth="1" markerEnd={`url(#arrow-${steps.length}-${steps[0]})`} />}
            <rect x={x} y="22" width={width} height="38" rx="3" fill="#F4F2ED" stroke="#161513" />
            <text x={x + width / 2} y="45" textAnchor="middle">{step}</text>
          </g>;
        })}
      </svg>
      <svg className="pipeline-vertical" viewBox={`0 0 260 ${mobileHeight}`} role="img" aria-label={`${title}: ${steps.join(" to ")}`}>
        <defs><marker id={`varrow-${steps.length}-${steps[0]}`} markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto"><path d="M0,0 L6,0 L3,6 Z" fill="#161513" /></marker></defs>
        {steps.map((step, index) => {
          const y = index * 66 + 5;
          return <g key={step}>
            {index < steps.length - 1 && <line x1="130" y1={y + 38} x2="130" y2={y + 60} stroke="#161513" markerEnd={`url(#varrow-${steps.length}-${steps[0]})`} />}
            <rect x="50" y={y} width="160" height="38" rx="3" fill="#F4F2ED" stroke="#161513" />
            <text x="130" y={y + 23} textAnchor="middle">{step}</text>
          </g>;
        })}
      </svg>
      <figcaption>{title} process schematic.</figcaption>
    </figure>
  );
}

function SectionHead({ number, name, title, line }: { number: string; name: string; title: string; line?: string }) {
  return <header className="section-head">
    <p className="section-code">SEC. {number} / {name}</p>
    <h2>{title}</h2>
    {line && <p>{line}</p>}
  </header>;
}

export default function Home() {
  return <>
    <header className="site-header">
      <a className="hm" href="#top" aria-label="Hoozaifa Morbiwala, home">HM</a>
      <nav aria-label="Primary navigation">
        <a href="#proof">Proof</a><a href="#systems">Systems</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">AI SOLUTIONS ENGINEER · SÃO PAULO / REMOTE</p>
          <h1>I turn complex AI ideas into systems that <em>launch.</em></h1>
          <p className="hero-subline">10+ years taking enterprise customers from discovery to production across Voice AI, APIs, and automation.</p>
          <p className="availability"><i aria-hidden="true" />Open to full-time Solutions Engineering and AI Delivery roles · select projects.</p>
          <div className="actions">
            <a className="button primary" href={emailHref}>Email me</a>
            <a className="button secondary" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a>
            <span className="confirm quiet">LinkedIn · [CONFIRM: LinkedIn URL]</span>
          </div>
        </div>
        <figure className="portrait">
          <img src={`${basePath}/hoozaifa-morbiwala-headshot.webp`} width="1000" height="1000" alt="Hoozaifa Morbiwala, AI Solutions Engineer" fetchPriority="high" />
          <figcaption>FIG. 01 — H. MORBIWALA · SÃO PAULO, BR</figcaption>
        </figure>
      </section>

      <section className="document-section proof" id="proof">
        <SectionHead number="01" name="PROOF" title="Selected production figures." />
        <div className="spec-table">
          <div><strong>10+</strong><p>years in SaaS, from implementation to solutions engineering</p></div>
          <div><strong>200K+</strong><p>calls per month handled by voice systems I&apos;ve delivered <span className="confirm">[CONFIRM: attribution, e.g. &quot;at Synthflow&quot;]</span></p></div>
          <div><strong>99.9%</strong><p>uptime across production voice deployments</p></div>
          <div><strong>$1.5M+</strong><p>ARR supported through presales and delivery <span className="confirm">[CONFIRM: exact wording — &quot;influenced&quot; is vague; state what you actually did]</span></p></div>
        </div>
      </section>

      <section className="document-section" id="systems">
        <SectionHead number="02" name="SYSTEMS" title="Systems I’ve shipped." line="Selected work from ten years in production — what was broken, what I built, and what changed." />
        <p className="confirm system-confirm">[CONFIRM: keep or cut #04 — Market &amp; Prospect Intelligence Pipeline]</p>
        <div className="case-studies">
          {systems.map((system) => <article className="case-study" key={system.label}>
            <p className="system-label">{system.label}</p>
            <h3>{system.title}</h3>
            <dl className="case-copy">
              <div><dt>Context</dt><dd className="confirm">{system.context}</dd></div>
              <div><dt>Problem</dt><dd>{system.problem}</dd></div>
            </dl>
            <div className="system-block">
              <p className="minor-label">System</p>
              <Pipeline steps={system.steps} title={system.title} />
              <p>{system.description}</p>
            </div>
            <div className="outcome-block">
              <p className="minor-label">Outcome</p>
              {system.outcomes.map(([figure, caption]) => <div className="outcome-row" key={figure}><strong>{figure}</strong><span>{caption}</span></div>)}
            </div>
            <p className="stack"><b>Stack</b>{system.stack.join(" · ")}</p>
          </article>)}
        </div>
      </section>

      <section className="document-section" id="services">
        <SectionHead number="03" name="WHAT I DO" title="What I do." line="Solutions architecture, AI automation, and enterprise delivery — one person accountable from first call to production." />
        <div className="three-columns">
          <article><p>01</p><h3>Solutions architecture</h3><span>Technical discovery, integration maps, tailored demos, POCs, and rollout plans translated clearly for buyers, builders, and delivery teams.</span></article>
          <article><p>02</p><h3>AI automation</h3><span>I build production agents and workflows with validation, retries, scoped access, monitoring, and human handoffs.</span></article>
          <article><p>03</p><h3>Enterprise delivery</h3><span>I own configuration, QA, training, go-live, and optimization across teams, regions, and time zones.</span></article>
        </div>
      </section>

      <section className="document-section" id="process">
        <SectionHead number="04" name="HOW I WORK" title="How I work." />
        <Pipeline title="Delivery process" steps={["Discover", "Architect", "Build", "QA", "Launch", "Optimize"]} />
      </section>

      <section className="document-section" id="about">
        <SectionHead number="05" name="ABOUT" title="Technical depth. Delivery instinct." line="10+ years turning complex SaaS requirements into systems customers can understand, trust, and use." />
        <div className="about-grid">
          <dl className="facts">
            <div><dt>Location</dt><dd>São Paulo, Brazil</dd></div>
            <div><dt>Working mode</dt><dd>Remote / global teams</dd></div>
            <div><dt>Languages</dt><dd>English · Portuguese · Spanish · Hindi · Marathi</dd></div>
          </dl>
          <div className="timeline">
            <article><time>2024–NOW</time><h3>Synthflow</h3><p>Sr. Solutions Engineer</p><span className="confirm">[CONFIRM: one real outcome each for Synthflow]</span></article>
            <article><time>2022–2023</time><h3>Rayobyte</h3><p>Technical Account Manager</p><span className="confirm">[CONFIRM: one real outcome each for Rayobyte]</span></article>
            <article><time>2017–2022</time><h3>SmartKargo</h3><p>Implementation Manager</p><span className="confirm">[CONFIRM: one real outcome each for SmartKargo]</span></article>
            <article><time>2016–2017</time><h3>Schlesinger Group</h3><p>Project Manager</p><span className="confirm">[CONFIRM: one real outcome each for Schlesinger]</span></article>
          </div>
        </div>
      </section>

      <section className="document-section contact" id="contact">
        <SectionHead number="06" name="CONTACT + RÉSUMÉS" title="Have a complex system that needs to ship?" line="Tell me about the role, the customer, and what live needs to mean." />
        <div className="contact-grid">
          <div>
            <div className="actions"><a className="button primary" href={emailHref}>Email me</a><a className="button secondary" href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></div>
            <p className="confirm">LinkedIn · [CONFIRM: LinkedIn URL]</p>
          </div>
          <div className="resumes">
            <h3>Résumés.</h3><p>Pick the one that fits the role.</p>
            <a href={`${basePath}/Hoozaifa-Morbiwala-Solutions-Engineer-Resume.pdf`} download><span>01</span>Solutions Engineering</a>
            <a href={`${basePath}/Hoozaifa-Morbiwala-Onboarding-Implementation-Resume.pdf`} download><span>02</span>Onboarding &amp; Implementation</a>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="title-block">
        <div><span>NAME</span><strong>Hoozaifa Morbiwala</strong></div>
        <div><span>TITLE</span><strong>AI Solutions Engineer</strong></div>
        <div><span>LOCATION</span><strong>São Paulo, BR</strong></div>
        <div><span>REV</span><strong>2026.07</strong></div>
        <div><span>CONTACT</span><strong>mhoozaifa@gmail.com</strong></div>
      </div>
      <p>Typeset in Archivo and IBM Plex Mono. Designed and written by me.</p>
    </footer>
  </>;
}
