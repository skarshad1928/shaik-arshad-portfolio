import { useEffect, useRef, useState } from 'react'

const NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

const SKILL_GROUPS = [
  {
    name: 'BI & Reporting',
    skills: ['Power BI', 'DAX', 'Power Query', 'Advanced Excel', 'Tableau', 'Looker Studio'],
  },
  {
    name: 'Languages & Databases',
    skills: ['Python', 'SQL', 'Java', 'MySQL', 'MongoDB'],
  },
  {
    name: 'Analytics & ML',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Logistic Regression', 'K-Means Clustering', 'EDA', 'Feature Engineering'],
  },
  {
    name: 'Delivery & Tooling',
    skills: ['FastAPI', 'Streamlit', 'Dash', 'Django', 'Jupyter Notebook', 'Git', 'GitHub'],
  },
]

const PROJECTS = [
  {
    index: '01',
    name: 'Insurance Analytics Dashboard',
    problem:
      'Stakeholders needed interactive performance tracking across customers, agents, and policy distribution.',
    stack: ['Power BI', 'Power Query', 'SQL', 'Excel'],
    points: [
      'Engineered a star-schema relational data model connecting Customers, Agents, and Policies tables to keep data integrity across cross-functional analysis.',
      'Cleaned and transformed raw datasets with Power Query and SQL, resolving schema inconsistencies to protect reporting accuracy.',
      'Built interactive KPI dashboards for policy metrics and premium insights, cutting manual reporting work for leadership.',
      'Implemented custom DAX metrics and drill-downs so stakeholders can run ad-hoc root-cause analysis themselves.',
    ],
    links: [{ label: 'View repository', href: 'https://github.com/skarshad1928/Insurance-Analytics-Dashboard/tree/main/Life_Insurance_Analytics' }],
  },
  {
    index: '02',
    name: 'Telecom Customer Churn Prediction & Segmentation',
    problem:
      'A telecom business needed quantitative risk modeling to identify churn drivers and prioritize customer retention.',
    stack: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit'],
    points: [
      'Designed an end-to-end analytical pipeline covering data validation, EDA, and feature engineering for churn forecasting.',
      'Trained a Logistic Regression classifier to predict churn risk and built K-Means clustering to segment high-value customers.',
      'Deployed predictions through a FastAPI REST API and an interactive Streamlit dashboard, turning model output into recommendations leadership can act on.',
    ],
    links: [
      { label: 'Live Streamlit app', href: 'https://telco-churn-api-amf2jey38hegcsrslwk2j9.streamlit.app/' },
      { label: 'API endpoint', href: 'https://telco-churn-api-1.onrender.com' },
    ],
  },
  {
    index: '03',
    name: 'Online Retail Analytics & Interactive Dashboard',
    problem:
      'An e-commerce business needed real-time visibility into customer buying patterns, product performance, RFM segmentation, and database schema relationships.',
    stack: ['Python', 'Dash', 'Plotly', 'Pandas', 'Vercel'],
    points: [
      'Performed exploratory data analysis and customer RFM segmentation on transactions dataset to isolate core revenue drivers.',
      'Designed relational database schema ERD models explaining entity relationships across orders, customers, and inventory.',
      'Built and deployed an interactive Dash web application on Vercel featuring dynamic visual filters and cohort metrics.',
    ],
    links: [
      { label: 'Live Vercel App', href: 'https://retail-store-app.vercel.app/' },
      { label: 'View repository', href: 'https://github.com/skarshad1928/Retail-Store-App' },
    ],
  },
  {
    index: '04',
    name: 'Placement Prep — Aptitude & Verbal Skill Analyzer',
    problem:
      'Placement-prep question banks show a score, not a diagnosis. I wanted a tool that scores a candidate section by section — quantitative aptitude, verbal reasoning, and logical reasoning — and times each answer, so the output is an honest read on where reasoning actually breaks down instead of a single number.',
    stack: ['Streamlit', 'Python', 'Pandas'],
    points: [
      'Built a scored, timed quiz covering quantitative aptitude, verbal reasoning, and logical reasoning, with per-topic accuracy rather than one aggregate score.',
      'Logs response time per question alongside correctness, so slow-but-right and fast-but-wrong answers are distinguishable — not just pass/fail.',
      "It's a genuine self-assessment, not a demo with curated results: try it yourself below and it will score your actual attempt, not a scripted one.",
    ],
    links: [
      { label: 'Take the assessment', href: 'https://placementprep-bxdsxpg9bxqnpcy6n9a6k2.streamlit.app/' },
    ],
  },
]

const EDUCATION = [
  {
    period: 'Sep 2023 – Mar 2027 (Expected)',
    title: 'VIT-AP University, Amaravati',
    detail: 'B.Tech, Data Analytics — CGPA 7.89 / 10.0',
  },
  {
    period: '2021 – 2023',
    title: 'Sri Chaitanya Junior College, Andhra Pradesh',
    detail: 'Intermediate (Class XII) — 96.3%',
  },
]

const CERTIFICATIONS = [
  { name: 'IBM Data Analyst Professional Certificate', tag: 'IBM' },
  { name: 'IBM AI Analyst', tag: 'IBM' },
  { name: 'MongoDB Python Developer Path', tag: 'MongoDB' },
  { name: 'Finlatics Data Science Program', tag: 'Finlatics' },
  { name: 'Data Analytics Simulation — EDA, data cleaning, root-cause analysis', tag: 'Deloitte AU / Forage' },
  { name: 'Data Visualization Simulation — client dashboards, data storytelling', tag: 'Tata / Forage' },
]

const CONTACT_LINKS = [
  { label: 'Email', value: 'shaikarshad9874@gmail.com', href: 'mailto:shaikarshad9874@gmail.com' },
  { label: 'Phone', value: '+91 74168 28005', href: 'tel:+917416828005' },
  { label: 'LinkedIn', value: 'shaik-arshad-b86222356', href: 'https://www.linkedin.com/in/shaik-arshad-b86222356/' },
  { label: 'GitHub', value: 'skarshad1928', href: 'https://github.com/skarshad1928' },
]

export default function App() {
  const [active, setActive] = useState('overview')
  const sectionRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) {
        sectionRefs.current[id] = el
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            Shaik Arshad <span className="brand-file">/ portfolio.pbix</span>
          </div>
          <div className="topbar-actions">
            <a className="btn" href="mailto:shaikarshad9874@gmail.com">Email</a>
            <a className="btn btn-solid" href="https://github.com/skarshad1928" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="overview" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-content">
            <p className="eyebrow">Report — Overview page 1 of 5</p>
            <h1 className="hero-name">
              Shaik <span className="accent">Arshad</span>
            </h1>
            <p className="hero-role">
              <strong>Decision Analytics Associate</strong> — Business Intelligence &amp; Data Analytics —
              Power BI Developer. I turn raw, messy business data into dashboards and models that
              leadership actually acts on, using SQL, Python, Power BI, and Scikit-learn.
            </p>
            <div className="hero-meta">
              <span>Amaravati, Andhra Pradesh, India</span>
              <a href="tel:+917416828005">+91 74168 28005</a>
              <a href="mailto:shaikarshad9874@gmail.com">shaikarshad9874@gmail.com</a>
              <a href="https://www.linkedin.com/in/shaik-arshad-b86222356/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/skarshad1928" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="hero-cta">
              <button className="btn btn-solid" onClick={() => scrollTo('projects')}>View projects</button>
              <button className="btn" onClick={() => scrollTo('contact')}>Get in touch</button>
            </div>

            <div className="kpi-row">
              <div className="kpi">
                <div className="kpi-value">7.89</div>
                <div className="kpi-label">CGPA / 10.0</div>
              </div>
              <div className="kpi">
                <div className="kpi-value">4</div>
                <div className="kpi-label">End-to-end projects</div>
              </div>
              <div className="kpi">
                <div className="kpi-value">6</div>
                <div className="kpi-label">Certifications</div>
              </div>
              <div className="kpi">
                <div className="kpi-value">2027</div>
                <div className="kpi-label">Expected graduation</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="shell about-layout">
            <div className="about-body">
              <p className="eyebrow">Summary</p>
              <p>
                I'm a B.Tech Data Analytics student who likes the part of the job most people skip:
                cleaning the data until it can be trusted. I work across <strong>SQL, Python, Power BI,
                and Advanced Excel</strong> to build KPI tracking, data models, and predictive models
                that hold up under real questions, not just demo conditions.
              </p>
              <p>
                My flagship projects reflect that — a star-schema <strong>Insurance Analytics
                dashboard</strong> built on Power BI, a <strong>Telecom Churn Prediction</strong> system
                deployed on FastAPI + Streamlit, and an interactive <strong>Online Retail Dashboard</strong> built with Plotly Dash.
                I'm most useful in the space between "the data is a mess" and "here's what leadership should do about it."
              </p>
            </div>
            <div>
              <div className="stat-card">
                <p className="stat-card-title">Currently</p>
                <p className="stat-card-value">B.Tech, Data Analytics</p>
                <p className="stat-card-note">VIT-AP University, Amaravati — CGPA 7.89/10.0, expected March 2027</p>
              </div>
              <div className="stat-card">
                <p className="stat-card-title">Industry exposure</p>
                <p className="stat-card-value">Deloitte AU &amp; Tata simulations</p>
                <p className="stat-card-note">Root-cause analysis, EDA, and client-facing dashboard design via Forage</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="shell">
            <p className="eyebrow">Page 2 — Skills</p>
            <h2 className="section-title">A stack built for the full analytics lifecycle</h2>
            <p className="section-sub">
              From cleaning raw tables to shipping a model behind an API — grouped by where each tool
              shows up in that pipeline.
            </p>
            <div className="skill-groups">
              {SKILL_GROUPS.map((group) => (
                <div className="skill-group" key={group.name}>
                  <p className="skill-group-name">
                    {group.name}
                    <span className="skill-group-count">{String(group.skills.length).padStart(2, '0')}</span>
                  </p>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="shell">
            <p className="eyebrow">Page 3 — Projects</p>
            <h2 className="section-title">Four problems, worked end to end</h2>
            <p className="section-sub">
              Each one starts from a stated problem and ends in something a real user can open and
              use — including live analytical dashboards and scored assessment tools below.
            </p>
            <div className="projects-list">
              {PROJECTS.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-head">
                    <div>
                      <p className="project-index">{project.index} / Business problem</p>
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-problem">{project.problem}</p>
                      <div className="project-stack">
                        {project.stack.map((s) => (
                          <span className="stack-chip" key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ul className="project-points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials">
          <div className="shell credentials-layout">
            <div>
              <p className="eyebrow">Page 4 — Education</p>
              <h2 className="subhead">Academic record</h2>
              <div className="timeline">
                {EDUCATION.map((item) => (
                  <div className="timeline-item" key={item.title}>
                    <p className="timeline-period">{item.period}</p>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow">Certifications</p>
              <h2 className="subhead">Verified &amp; simulated experience</h2>
              <ul className="cert-list">
                {CERTIFICATIONS.map((cert) => (
                  <li className="cert-item" key={cert.name}>
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-tag">{cert.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="shell contact-inner">
            <p className="eyebrow">Page 5 — Contact</p>
            <h2 className="contact-title">Let's talk about your data.</h2>
            <p className="contact-sub">
              Open to Business Intelligence, Data Analyst, and Decision Analytics roles. The fastest way
              to reach me is email — I usually reply within a day.
            </p>
            <div className="contact-grid">
              {CONTACT_LINKS.map((c) => (
                <a className="contact-link" href={c.href} target="_blank" rel="noreferrer" key={c.label}>
                  <span>
                    <span className="contact-link-label">{c.label}</span>
                    <span className="contact-link-value">{c.value}</span>
                  </span>
                  <span className="contact-arrow">↗</span>
                </a>
              ))}
            </div>
            <p className="footer-note">© {new Date().getFullYear()} Shaik Arshad. Built with React.</p>
          </div>
        </section>
      </main>

      <nav className="tabstrip" aria-label="Section navigation">
        <div className="tabstrip-inner">
          {NAV.map((item, i) => (
            <button
              key={item.id}
              data-index={String(i + 1).padStart(2, '0')}
              className={`tab${active === item.id ? ' active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
