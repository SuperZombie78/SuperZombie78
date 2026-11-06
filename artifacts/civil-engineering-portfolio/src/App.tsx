import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Practice', href: '#practice' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  { number: '01', title: '[Project title]', type: '[Project type / discipline]', note: 'A concise description of the challenge, your contribution, and what you learned.', art: 'bridge' },
  { number: '02', title: '[Project title]', type: '[Coursework / independent study]', note: 'Add context: the question you explored, tools used, and the thinking behind the result.', art: 'contour' },
  { number: '03', title: '[Project title]', type: '[Hands-on project]', note: 'Describe the work honestly, including your role and any collaborators involved.', art: 'structure' },
];

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function DraftingIllustration() {
  return (
    <div aria-label="Abstract civil engineering drawing" role="img" className="hero-drawing blueprint-grid relative overflow-hidden">
      <div className="drawing-label mono">FIELD NOTE / 001</div>
      <svg className="drawing-svg" viewBox="0 0 560 510" fill="none" aria-hidden="true">
        <path d="M30 353H520M67 382H495M91 411H467" stroke="rgba(232,224,203,.18)" strokeWidth="1" />
        <path d="M87 353L183 142L279 353M279 353L375 142L471 353" stroke="#c9a861" strokeWidth="2" />
        <path d="M129 262H428M149 219H407M168 178H387" stroke="rgba(201,168,97,.68)" strokeWidth="1.2" />
        <path d="M183 142L375 142M140 241L418 241M111 308L449 308" stroke="rgba(201,168,97,.4)" strokeWidth="1" strokeDasharray="4 6" />
        <path d="M104 353L104 382M454 353L454 382" stroke="rgba(232,224,203,.55)" strokeWidth="1" />
        <path d="M82 390L116 390M441 390L477 390" stroke="rgba(232,224,203,.3)" strokeWidth="1" />
        <path d="M73 122H210M350 122H489" stroke="rgba(232,224,203,.27)" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="279" cy="142" r="5" fill="#c9a861" />
        <circle cx="183" cy="142" r="3" fill="#c9a861" />
        <circle cx="375" cy="142" r="3" fill="#c9a861" />
        <path d="M279 75V129M183 112V134M375 112V134" stroke="rgba(232,224,203,.35)" />
        <path d="M279 72L273 83H285L279 72Z" fill="#c9a861" />
        <text x="291" y="105" fill="rgba(232,224,203,.56)" fontFamily="DM Mono" fontSize="9" letterSpacing="1.5">LOAD PATH</text>
        <text x="54" y="370" fill="rgba(232,224,203,.52)" fontFamily="DM Mono" fontSize="9">DATUM 00</text>
        <text x="429" y="108" fill="rgba(232,224,203,.46)" fontFamily="DM Mono" fontSize="8">ELEV.</text>
        <path d="M48 440H510" stroke="rgba(232,224,203,.12)" />
        <text x="48" y="460" fill="rgba(232,224,203,.45)" fontFamily="DM Mono" fontSize="8" letterSpacing="1">CONCEPTUAL STUDY — NOT FOR CONSTRUCTION</text>
      </svg>
      <div className="drawing-coordinates mono">N 00° 00' 00"<br />E 00° 00' 00"</div>
      <div className="drawing-stamp"><span>CE</span><span>STUDY<br />01—04</span></div>
    </div>
  );
}

function ProjectArt({ type }: { type: string }) {
  if (type === 'bridge') {
    return <svg viewBox="0 0 600 340" className="art-svg" aria-hidden="true"><path d="M34 245H566M65 274H535" /><path d="M92 245Q300 66 508 245M120 245Q300 98 480 245" className="art-accent" /><path d="M119 222V245M180 170V245M240 128V245M300 109V245M360 128V245M420 170V245M481 222V245" /><circle cx="300" cy="109" r="4" className="art-dot" /></svg>;
  }
  if (type === 'contour') {
    return <svg viewBox="0 0 600 340" className="art-svg" aria-hidden="true"><path d="M34 278C104 254 90 211 169 194S254 209 304 173 383 107 441 132 502 107 566 63" /><path d="M34 248C102 226 105 192 172 174S247 185 300 151 380 82 438 107 506 79 566 39" className="art-accent" /><path d="M34 217C103 195 118 166 175 150S240 161 296 128 374 59 435 82 504 54 566 17" /><path d="M34 187C109 166 130 139 180 124S234 136 291 104 368 34 432 56 503 26 566 -5" className="art-accent" /><path d="M34 304C97 286 80 245 162 226S258 238 309 198 393 132 446 156 509 135 566 91" /><circle cx="378" cy="130" r="5" className="art-dot" /></svg>;
  }
  return <svg viewBox="0 0 600 340" className="art-svg" aria-hidden="true"><path d="M74 264L202 150L300 201L425 84L526 152" /><path d="M74 264V279H526V152M202 150V280M300 201V280M425 84V280" className="art-accent" /><path d="M74 264L300 201L526 152M202 150L425 84M202 150L300 201L425 84" /><path d="M116 264V223M160 264V184M247 264V178M350 264V166M474 264V123" /><circle cx="425" cy="84" r="5" className="art-dot" /></svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="grain min-h-[100dvh] overflow-hidden">
      <header className="site-shell site-header">
        <a href="#top" className="brand-mark" aria-label="Back to top" data-testid="link-home">
          <span className="brand-symbol">∠</span><span className="brand-name">Seth Rea<small>CIVIL ENGINEERING PORTFOLIO</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => <a key={link.href} className="nav-link" href={link.href} onClick={closeMenu} data-testid={`link-nav-${link.label.toLowerCase()}`}>{link.label}</a>)}
        </nav>
        <a href="#contact" className="header-contact">LET'S TALK <ArrowUpRight size={14} /></a>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="site-shell hero" id="top">
        <div className="hero-copy">
          <motion.div
            className="eyebrow hero-kicker"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : .6 }}
          ><span className="status-dot" /> CIVIL ENGINEERING STUDENT <span className="kicker-divider">/</span> RICHLAND, WA</motion.div>
          <motion.h1
            className="display hero-title"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : .8, delay: .1, ease: [0.22, 1, .36, 1] }}
          >Built from<br /><span>the ground</span><br />up<span className="title-period">.</span></motion.h1>
          <motion.p className="hero-intro" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : .7, delay: .35 }}>
            I’m an emerging civil engineer drawn to the way careful thinking becomes something people can stand on.
          </motion.p>
          <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .6, delay: .45 }}>
            <a href="#work" className="button-primary" data-testid="link-explore-work">Explore selected work <ArrowDown size={15} /></a>
            <span className="hero-note mono">STUDENT · PRACTITIONER · ALWAYS LEARNING</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={reduceMotion ? false : { opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : .9, delay: .2 }}>
          <DraftingIllustration />
          <div className="visual-caption"><span className="caption-line" /> A curiosity for what holds things together.</div>
        </motion.div>
        <div className="hero-index mono"><span>PORTFOLIO</span><span>01 / 04</span></div>
      </section>

      <section className="intro-band">
        <div className="site-shell intro-inner">
          <p className="eyebrow">A PRACTICAL POINT OF VIEW</p>
          <p className="intro-statement display">Engineering is where <em>questions</em> meet the real world.</p>
          <p className="intro-aside">Formal study gave me a framework. An internship offered a first look at practice. A lifetime of making and fixing things taught me to stay curious about how things work.</p>
        </div>
      </section>

      <section className="site-shell work-section" id="work">
        <Reveal className="section-heading">
          <div><p className="eyebrow">01 — SELECTED WORK</p><h2 className="display section-title">Work in progress<span className="title-period">.</span></h2></div>
          <p className="section-description">A growing collection of academic, practical, and personal work. Each entry should make clear what I did—and what I learned.</p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * .09}>
              <article className="project-card" data-testid={`card-project-${project.number}`}>
                <div className={`project-art art-${project.art}`}>
                  <div className="art-topline mono"><span>STUDY / {project.number}</span><span>PREVIEW</span></div>
                  <ProjectArt type={project.art} />
                  <div className="art-bottomline mono"><span>FIG. {project.number}</span><span>CONCEPTUAL DRAWING</span></div>
                  <span className="project-index">{project.number}</span>
                </div>
                <div className="project-meta"><span className="eyebrow">{project.type}</span><ArrowUpRight className="project-arrow" size={17} /></div>
                <h3 className="display project-title">{project.title}</h3>
                <p className="project-note">{project.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="work-footnote mono"><span className="footnote-mark">+</span> Replace these editable placeholders with work you can speak to and share.</div>
      </section>

      <section className="practice-section" id="practice">
        <div className="site-shell practice-layout">
          <Reveal className="practice-intro">
            <p className="eyebrow">02 — HOW I APPROACH THE WORK</p>
            <h2 className="display section-title">Curiosity,<br />then careful work<span className="title-period">.</span></h2>
            <p className="practice-copy">I’m at the beginning of my professional journey. I bring a habit of asking why, a respect for details, and the humility to keep learning from people with more experience.</p>
            <a href="#background" className="text-link">A little more about me <ArrowRight size={15} /></a>
          </Reveal>
          <div className="principle-list">
            {[
              ['01', 'Understand the place', 'Start with the site, the people who use it, and the constraints that shape a good solution.'],
              ['02', 'Think it through', 'Connect the theory to practical decisions. Check assumptions. Make the reasoning legible.'],
              ['03', 'Keep learning', 'Treat feedback and field experience as part of the work—not an afterthought.'],
            ].map(([num, title, body], index) => (
              <Reveal key={num} delay={index * .08}>
                <div className="principle-row"><span className="principle-number mono">{num}</span><div><h3>{title}</h3><p>{body}</p></div><span className="principle-cross">+</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell background-section" id="background">
        <Reveal className="background-head">
          <div><p className="eyebrow">03 — BACKGROUND</p><h2 className="display section-title">Learning by doing<span className="title-period">.</span></h2></div>
          <p className="section-description">A foundation in study, an early professional experience, and plenty of practical curiosity beyond the classroom.</p>
        </Reveal>
        <div className="background-grid">
          <Reveal className="background-panel study-panel">
            <span className="panel-marker mono">A / STUDY</span>
            <div className="panel-graphic"><svg viewBox="0 0 220 150" fill="none" aria-hidden="true"><path d="M27 118H194M48 117V68L83 45L119 68V117M119 117V87L153 66L181 83V117M65 83H75M93 83H104M65 98H75M93 98H104M136 91H146M159 91H169" stroke="currentColor" strokeWidth="1" /><path d="M28 127H194" stroke="currentColor" strokeDasharray="2 4" /></svg></div>
            <p className="eyebrow">FORMAL EDUCATION</p><h3 className="display">Civil Engineering</h3><p className="panel-copy">Washington State University, Tri-Cities</p>
            <div className="panel-edit mono">CURRENTLY ENROLLED</div>
          </Reveal>
          <Reveal className="background-panel experience-panel" delay={.12}>
            <span className="panel-marker mono">B / EXPERIENCE</span>
            <div className="panel-graphic experience-graphic"><svg viewBox="0 0 220 150" fill="none" aria-hidden="true"><path d="M27 117H194M42 100L108 38L179 100M42 100V117M179 100V117M68 76L108 112L151 76M108 38V112" stroke="currentColor" strokeWidth="1" /><circle cx="108" cy="38" r="3" fill="currentColor" /><path d="M25 127H195" stroke="currentColor" strokeDasharray="2 4" /></svg></div>
            <p className="eyebrow">MOST RECENT EXPERIENCE</p><h3 className="display">Project Engineer Intern</h3><p className="panel-copy">Granite Construction · Hermiston, OR</p>
            <div className="panel-edit mono">ADD INTERNSHIP DATES + RESPONSIBILITIES</div>
          </Reveal>
          <Reveal className="hands-on-note" delay={.2}>
            <span className="note-index mono">C / EARLIER EXPERIENCE</span>
            <p className="display hands-on-quote">My path started hands-on.</p>
            <div className="hands-on-roles">
              <div><span className="mono">LABORER</span><strong>T&amp;S Modular</strong></div>
              <div><span className="mono">PAINTING APPRENTICE</span><strong>PaintMaster Services</strong></div>
            </div>
            <p className="hands-on-caption">Growing up around practical work shaped my curiosity about how things are built. Add specific project examples in Selected Work.</p>
            <span className="note-orbit" aria-hidden="true">FIELD<br />NOTES<br /><b>+</b></span>
          </Reveal>
        </div>
      </section>

      <section className="tools-band">
        <div className="site-shell tools-inner">
          <div><p className="eyebrow">TOOLS & INTERESTS</p><p className="tools-caption">A snapshot, not a claim of expertise. Edit to reflect what you can use confidently.</p></div>
          <div className="tool-tags">{['[CAD / drafting]', '[Analysis tools]', '[Surveying]', '[Materials]', '[Site work]', '[Add your focus]'].map((tool) => <span key={tool}>{tool}<i>↗</i></span>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="site-shell contact-inner">
          <Reveal>
            <p className="eyebrow"><span className="status-dot" /> 04 — OPEN TO WHAT'S NEXT</p>
            <h2 className="display contact-title">Good work starts<br />with a <em>conversation.</em></h2>
            <p className="contact-copy">Interested in an early-career opportunity, a project, or simply comparing notes? I’d be glad to hear from you.</p>
            <a className="contact-button" href="mailto:your.email@example.com" data-testid="link-contact-email">your.email@example.com <ArrowUpRight size={17} /></a>
            <p className="contact-edit mono">REPLACE WITH YOUR PREFERRED EMAIL</p>
          </Reveal>
          <div className="contact-aside"><span className="contact-coordinate mono">RICHLAND, WA<br />PACIFIC TIME</span><span className="contact-drawing" aria-hidden="true">∠</span><span className="contact-foot mono">BUILT WITH CARE<br />STILL UNDER CONSTRUCTION</span></div>
        </div>
      </section>

      <footer className="site-shell site-footer">
        <a href="#top" className="footer-brand" data-testid="link-footer-home">Seth Rea <span>— Civil Engineering</span></a>
        <span className="footer-note mono">A LIVING DOCUMENT · LAST UPDATED [MONTH YEAR]</span>
        <a className="back-top mono" href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

export default App;
