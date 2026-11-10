import { useEffect, useRef, useState } from "react";
import { icons } from "./icons.js";
import * as D from "./data.js";

const Icon = ({ n, className = "h-5 w-5" }) => {
  const i = icons[n];
  return i ? (
    <svg viewBox="0 0 24 24" className={`${className} shrink-0`} fill={`#${i.h}`} aria-hidden="true">
      <path d={i.p} />
    </svg>
  ) : null;
};

/* Reveal wrapper: one IntersectionObserver per element, adds .in once, then disconnects */
function R({ as: Tag = "div", className = "", i = 0, style, children, ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setOn(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${on ? "in" : ""} ${className}`} style={{ "--i": i, ...style }} {...rest}>
      {children}
    </Tag>
  );
}

const Section = ({ id, kicker, title, children, max = "max-w-5xl" }) => (
  <section id={id} className="relative py-20 md:py-28">
    <div className={`mx-auto px-5 ${max}`}>
      <R className="mb-12 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{kicker}</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-gradient-to-r from-cyan to-violet" />
      </R>
      {children}
    </div>
  </section>
);

function Background() {
  const sparks = Array.from({ length: 14 }, (_, i) => ({ left: `${(i * 37 + 8) % 100}%`, dur: `${16 + (i * 5) % 14}s`, delay: `${(i * 3) % 13}s`, c: ["#22d3ee", "#a78bfa", "#4ade80", "#facc15"][i % 4] }));
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />
      {sparks.map((s, i) => <span key={i} className="spark" style={{ left: s.left, background: s.c, animationDuration: s.dur, animationDelay: s.delay }} />)}
    </div>
  );
}

function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    D.nav.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass-nav mx-auto flex max-w-4xl items-center justify-between rounded-2xl px-4 py-2.5" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-xs font-extrabold text-ink">LG</span>Lakshay
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {D.nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${active === id ? "bg-cyan/10 text-cyan" : "text-slate-400 hover:text-white"}`}>{label}</a></li>
          ))}
        </ul>
        <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </nav>
      {open && (
        <ul className="glass mx-auto mt-2 max-w-4xl rounded-2xl bg-ink p-2 md:hidden">
          {D.nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 text-sm font-medium ${active === id ? "bg-cyan/10 text-cyan" : "text-slate-300"}`}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}

function MiniChart() {
  const h = [30, 50, 40, 75, 62, 95];
  const pts = h.map((v, i) => [18 + i * 28, 104 - v]);
  const d = "M" + pts.map((p) => p.join(" ")).join(" L");
  return (
    <svg viewBox="0 0 200 130" className="w-full" role="img" aria-label="Animated bar and line chart">
      <line x1="8" y1="112" x2="192" y2="112" stroke="#334155" />
      {h.map((v, i) => <rect key={i} className="hb" style={{ "--d": `${0.4 + i * 0.12}s` }} x={pts[i][0] - 9} y={112 - v} width="18" height={v} rx="3" fill="#a78bfa" fillOpacity=".45" />)}
      <path className="hl" pathLength="1" d={d} fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) => <circle key={i} className="hd" style={{ animationDelay: `${1.1 + i * 0.22}s` }} cx={x} cy={y} r="3.5" fill="#fff" />)}
    </svg>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-mint">&gt; player 1 ready_</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Lakshay <span className="bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">Gupta</span>
          </h1>
          <div className="roles mt-4 text-xl font-semibold text-cyan md:text-2xl" aria-label="Roles">
            {D.roles.map((r, i) => <span key={r} className="role" style={{ animationDelay: `${i * 3}s` }}>{r}</span>)}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">I turn messy data into clear answers: cleaning it with Python and SQL, then building dashboards in Power BI and Streamlit that people can act on. I also build full-stack apps, so I can take an idea from raw data to a deployed product.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="/resume-data-analyst.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Data Analyst resume</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {D.stats.map(([v, l]) => (
              <div key={l} className="glass rounded-2xl px-4 py-3"><dt className="text-2xl font-extrabold text-white">{v}</dt><dd className="text-xs text-slate-400">{l}</dd></div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto w-full max-w-md pb-10">
          <div className="glass overflow-hidden rounded-[2rem] p-2">
            <img src="/profile.jpg" alt="Lakshay Gupta" width="480" height="560" fetchPriority="high" className="aspect-[6/7] w-full rounded-[1.5rem] object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/profile-placeholder.svg"; }} />
          </div>
          <div className="glass floaty absolute -bottom-0 -left-4 w-48 rounded-2xl p-3 sm:-left-10"><MiniChart /></div>
          {[["powerbi", "Power BI", "-right-2 top-8", "0s"], ["mysql", "SQL", "-right-6 top-1/2", "1.5s"], ["python", "Python", "left-[-1rem] top-10", "3s"]].map(([n, t, pos, dl]) => (
            <div key={t} className={`glass floaty absolute ${pos} flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white`} style={{ animationDelay: dl }}><Icon n={n} />{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" kicker="// about me" title="My journey so far" max="max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-5">
        <R className="lg:col-span-2">
          <div className="glass space-y-4 rounded-3xl p-7 leading-relaxed">
            {D.bio.map((t) => <p key={t}>{t}</p>)}
            <div className="grid grid-cols-1 gap-2 pt-3">
              {D.milestones.map(([t, d]) => (
                <div key={t} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm"><span className="font-medium text-slate-100">{t}</span><span className="font-mono text-xs text-slate-400">{d}</span></div>
              ))}
            </div>
          </div>
        </R>
        <ol className="relative space-y-6 border-l border-cyan/25 pl-7 lg:col-span-3">
          {D.journey.map(([date, title, text, tag], i) => (
            <R as="li" i={i} key={title} className="relative">
              <span className={`absolute -left-[2.2rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-ink ${tag === "Next" ? "bg-mint" : "bg-cyan"}`} />
              <div className="glass rounded-2xl p-5">
                <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs text-cyan">{date}</span><span className="rounded-md bg-violet/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-violet">{tag}</span></div>
                <h3 className="mt-1 text-lg font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed">{text}</p>
              </div>
            </R>
          ))}
        </ol>
      </div>
    </Section>
  );
}

const Skill = ({ s, i }) => (
  <R i={i % 8}>
    <div className="mb-2 flex items-center justify-between text-sm">
      <span className="flex items-center gap-2.5 font-medium text-slate-100"><Icon n={s[1]} />{s[0]}</span>
      <span className="font-mono text-xs text-slate-400">{s[2]}%</span>
    </div>
    <div className="seg"><div className="fill bg-gradient-to-r from-cyan to-violet" style={{ "--w": s[2] / 100 }} /></div>
  </R>
);

function Skills() {
  return (
    <Section id="skills" kicker="// inventory" title="Skills & tools" max="max-w-6xl">
      <div className="space-y-8">
        {[["Data & Analytics Toolkit", "from-mint to-cyan", D.dataSkills], ["Web & AI Tech Stack", "from-cyan to-violet", D.webSkills]].map(([t, g, list]) => (
          <R key={t}>
            <div className="glass rounded-3xl p-7 md:p-9">
              <h3 className="mb-7 flex items-center gap-3 text-2xl font-bold text-white"><span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${g}`} />{t}</h3>
              <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">{list.map((s, i) => <Skill key={s[0]} s={s} i={i} />)}</div>
            </div>
          </R>
        ))}
      </div>
    </Section>
  );
}

const frame = <rect x="40" y="10" width="120" height="90" rx="8" fill="#111827" stroke="#22d3ee" strokeOpacity=".5" strokeWidth="1.5" />;
function Viz({ k }) {
  if (k === "mb") return (
    <svg viewBox="0 0 200 110" className="h-32" role="img" aria-label="Price per sqft by city">{frame}
      {[50, 38, 30, 22, 14].map((h, i) => <rect key={i} className="vb" style={{ "--d": `${i * 0.12}s` }} x={58 + i * 18} y={82 - h} width="12" height={h} rx="2" fill="#22d3ee" fillOpacity={0.95 - i * 0.14} />)}
      <text x="100" y="94" textAnchor="middle" fontSize="6.5" fill="#94a3b8">price per sqft by city</text></svg>
  );
  if (k === "hr") return (
    <svg viewBox="0 0 200 110" className="h-32" role="img" aria-label="Attrition rate 16 percent">{frame}
      <circle cx="82" cy="55" r="20" fill="none" stroke="#1e293b" strokeWidth="8" />
      <circle className="va" cx="82" cy="55" r="20" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" transform="rotate(-90 82 55)" />
      <text x="82" y="59" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff">16%</text>
      {[34, 24, 30, 18].map((w, i) => <rect key={i} x="114" y={34 + i * 14} width={w} height="6" rx="3" fill="#a78bfa" fillOpacity={0.9 - i * 0.2} />)}</svg>
  );
  return (
    <svg viewBox="0 0 200 110" className="h-32" role="img" aria-label="Churn rate by segment">{frame}
      {[[62, 12, "#2e8b57"], [94, 41, "#f5a300"], [126, 59, "#c0392b"]].map(([x, h, c], i) => <rect key={i} className="vb" style={{ "--d": `${i * 0.2}s` }} x={x} y={82 - h} width="20" height={h} rx="2" fill={c} />)}
      <text x="100" y="94" textAnchor="middle" fontSize="6.5" fill="#94a3b8">churn rate by segment</text></svg>
  );
}

function Projects() {
  const [tab, setTab] = useState("data");
  const list = D.projects.filter((p) => p.cat === tab);
  return (
    <Section id="projects" kicker="// quest log" title="Projects" max="max-w-6xl">
      <div className="mx-auto mb-10 grid max-w-2xl gap-4 sm:grid-cols-2" role="tablist" aria-label="Project tracks">
        {[["data", "Data Analytics", "SQL, Power BI, Python, ML"], ["full", "Full-Stack", "React, FastAPI, AI APIs"]].map(([k, t, s]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`glass rounded-2xl p-5 text-left transition-colors ${tab === k ? "border-cyan bg-cyan/10" : "hover:border-cyan/40"}`}>
            <span className="block text-lg font-bold text-white">{t}</span><span className="mt-1 block text-sm text-slate-400">3 projects: {s}</span>
          </button>
        ))}
      </div>
      <div key={tab} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <R key={p.title} i={i} className="h-full">
            <article className="glass lift flex h-full flex-col overflow-hidden rounded-3xl">
              <div className="grid h-44 place-items-center border-b border-white/5 bg-gradient-to-br from-cyan/10 to-violet/10">
                {p.viz ? <Viz k={p.viz} /> : <div className="flex gap-5">{p.icons.map((n) => <Icon key={n} n={n} className="h-11 w-11" />)}</div>}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-violet">{p.sub}</p>
                <h3 className="mt-1 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">{p.tech.map((t) => <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300">{t}</span>)}</div>
                <div className="mt-5 flex gap-5 text-sm font-semibold">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">GitHub</a>
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-mint hover:underline">Live demo</a>}
                </div>
              </div>
            </article>
          </R>
        ))}
      </div>
      {tab === "full" && (
        <p className="mt-8 text-center text-sm">More builds:{" "}
          {D.moreBuilds.map(([n, d, h]) => <a key={n} href={h} target="_blank" rel="noopener noreferrer" className="mx-2 text-cyan hover:underline">{n} ({d})</a>)}
        </p>
      )}
    </Section>
  );
}

const h4 = "mb-3 border-b border-white/10 pb-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-violet";
const Bullets = ({ items }) => <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-slate-300 marker:text-cyan">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
const Head = ({ l, r }) => <div className="flex flex-wrap items-baseline justify-between gap-x-3"><span className="text-sm font-bold text-slate-50">{l}</span><span className="text-xs text-slate-400">{r}</span></div>;

function Resume() {
  return (
    <Section id="resume" kicker="// save file" title="Curriculum Vitae" max="max-w-6xl">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <R className="lg:col-span-8">
          <div className="glass space-y-7 rounded-3xl p-6 md:p-9">
            <header className="border-b border-white/10 pb-5">
              <h3 className="text-2xl font-bold tracking-wide text-slate-50">LAKSHAY GUPTA</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-cyan">Data Analyst | Power BI | SQL | Python</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                {D.contact.map((c) => c.href ? <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-cyan">{c.label}</a> : <span key={c.label}>{c.label}</span>)}
              </div>
            </header>
            <div><h4 className={h4}>Profile Summary</h4><p className="text-[13px] leading-relaxed text-slate-300">{D.summary}</p></div>
            {[["Work Experience", D.experience], ["Leadership Experience", D.leadership]].map(([t, list]) => (
              <div key={t}><h4 className={h4}>{t}</h4>{list.map((x) => <div key={x.org}><Head l={x.org} r={x.date} /><p className="text-xs text-cyan">{x.title}</p><Bullets items={x.points} /></div>)}</div>
            ))}
            <div><h4 className={h4}>Education</h4><div className="space-y-3">{D.education.map((x) => <div key={x.title}><Head l={x.title} r={x.date} /><p className="text-xs text-slate-400">{x.org}</p></div>)}</div></div>
            <div><h4 className={h4}>Project Experience</h4><div className="space-y-5">
              {D.resumeProjects.map((x) => <div key={x.title}><div className="flex flex-wrap items-baseline justify-between gap-x-3"><a href={x.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-50 hover:text-cyan">{x.title}</a><span className="text-xs text-cyan">{x.stack}</span></div><Bullets items={x.points} /></div>)}
            </div></div>
            <div><h4 className={h4}>Skills</h4><dl className="space-y-2 text-[13px] leading-relaxed">
              {D.skillGroups.map(([k, v]) => <div key={k} className="flex flex-col sm:flex-row sm:gap-3"><dt className="shrink-0 font-semibold text-slate-50 sm:w-40">{k}</dt><dd className="text-slate-300">{v}</dd></div>)}
            </dl></div>
          </div>
        </R>
        <R i={1} className="lg:sticky lg:top-28 lg:col-span-4">
          <div className="glass rounded-3xl p-7">
            <h3 className="text-2xl font-bold text-white">Want an offline copy?</h3>
            <p className="mt-3 text-sm leading-relaxed">Download the PDF version of my resume to read my education, projects and skills offline.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="/resume-data-analyst.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Data Analyst resume</a>
              <a href="/resume-data-analyst.pdf" download="Lakshay-Gupta-Data-Analyst-Resume.pdf" className="btn btn-ghost">Download CV</a>
              <a href="/resume.pdf" download="Lakshay-Gupta-Full-Stack-Resume.pdf" className="btn btn-ghost">Full-Stack resume</a>
            </div>
          </div>
        </R>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="// continue?" title="Let's talk">
      <R>
        <div className="glass rounded-3xl p-8 text-center md:p-12">
          <p className="mx-auto max-w-xl text-lg leading-relaxed">I am open to Data Analyst, MIS and Business Analyst roles. If you have a data problem, a role or just a question, send me a message.</p>
          <a href="mailto:lakshayguptabsr@gmail.com" className="btn btn-primary mt-7">lakshayguptabsr@gmail.com</a>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {D.socials.map(([n, l, h]) => (
              <a key={n} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="btn btn-ghost !px-4 !py-2.5" aria-label={l}><Icon n={n} />{l}</a>
            ))}
          </div>
        </div>
      </R>
    </Section>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">© 2026 Lakshay Gupta. Built with React, Vite and Tailwind CSS.</footer>
    </>
  );
}
