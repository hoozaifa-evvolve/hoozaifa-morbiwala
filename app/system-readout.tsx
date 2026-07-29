"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

export type ReadoutKind = "front-desk" | "lead-engine" | "support-agent" | "onboarding";

const content: Record<ReadoutKind, ReactNode[]> = {
  "front-desk": [
    <div className="readout-line incoming" key="incoming"><span>INCOMING · +1 555-0148</span><span className="waveform" aria-label="Call waveform"><i /><i /><i /><i /><i /><i /></span></div>,
    <div className="transcript" key="transcript"><p><b>Caller:</b> anything Thursday afternoon?</p><p><b>Agent:</b> 2:30 PM works.</p></div>,
    <div className="status-card" key="booked"><span>BOOKED ✓</span><strong>Thu 2:30 PM</strong></div>,
    <div className="readout-pair" key="crm"><span>HubSpot · Contact created</span><mark>Booking alert sent</mark></div>,
  ],
  "lead-engine": [
    <div className="lead-card" key="lead"><span>New lead</span><strong>acme.co</strong></div>,
    <div className="field-pair" key="fields"><p><span>Title</span>VP Sales</p><p><span>Size</span>80–200</p></div>,
    <div className="score-track" key="score"><strong>Score 87/100</strong><span>Assigned → M.R.</span></div>,
    <div className="readout-chip" key="meeting">Demo booked · Google Meet</div>,
  ],
  "support-agent": [
    <div className="ticket-line" key="ticket"><span>#4821</span><strong>“Reset my password”</strong></div>,
    <div className="knowledge-line" key="search"><span>Searching knowledge…</span><div><i>Confluence</i><i>Slack</i><i>Docs</i></div></div>,
    <div className="status-card resolved" key="resolved"><span>Auto-resolved ✓</span><strong>Password reset instructions sent.</strong></div>,
    <div className="escalation-row" key="escalated"><span>Other path</span><strong>Escalated → Human queue</strong></div>,
  ],
  onboarding: [
    <div className="tracker-step" key="intake"><span>01</span><strong>Intake</strong><em>received</em></div>,
    <div className="tracker-step" key="configure"><span>02</span><strong>Configure</strong><em>12 fields set</em></div>,
    <div className="tracker-step" key="qa"><span>03</span><strong>QA</strong><em>passed</em></div>,
    <div className="tracker-step live" key="live"><span>04</span><strong>Go live</strong><em>LIVE</em></div>,
  ],
};

export default function SystemReadout({ kind, title }: { kind: ReadoutKind; title: string }) {
  const panelRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio >= 0.3) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: [0.3] });
    observer.observe(panel);
    return () => observer.disconnect();
  }, []);

  return <section ref={panelRef} className={`system-readout ${visible ? "is-visible" : ""}`} aria-label={`${title} example system readout`}>
    <header className="readout-titlebar">
      <span>{title}</span>
      <div aria-hidden="true"><i className="square-ink" /><i className="square-signal" /><i className="square-line" /></div>
    </header>
    <div className={`readout-screen ${kind}`}>
      {content[kind].map((item, index) => <div className="readout-step" style={{ "--step-delay": `${index * 210}ms` } as CSSProperties} key={index}>{item}</div>)}
    </div>
  </section>;
}
