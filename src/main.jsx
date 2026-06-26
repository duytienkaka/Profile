import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: "Nguyen Duy Tien",
  role: "Full-stack Developer",
  email: "duytienkaka123az@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  tagline: "Build clean web products. Ship real outcomes.",
  intro:
    "I design and build modern web interfaces, reliable APIs, and deployable product demos for recruiters, teams, and real users. My work focuses on clarity, performance, and a polished experience from first screen to public URL.",
};

const highlights = [
  {
    value: "Full-stack",
    title: "Product mindset",
    text: "I connect frontend, backend, data, auth, and deployment into one understandable product flow.",
  },
  {
    value: "Public-ready",
    title: "GitHub Pages deployment",
    text: "This profile is not a static mockup. It builds, deploys, and updates automatically after every push.",
  },
  {
    value: "Demo-first",
    title: "Clear presentation",
    text: "Projects are shaped so recruiters and teammates can quickly see what the system does and why it matters.",
  },
  {
    value: "Clean handoff",
    title: "Readable repo",
    text: "Code structure, README, workflow, and build scripts are kept simple enough for another developer to continue.",
  },
];

const projects = [
  {
    name: "Academic Service Platform",
    type: "Full-stack system",
    description:
      "A student, course, attendance, and payment workflow designed around role-based usage and service integration.",
    stack: "React / .NET / SQL Server / JWT",
    image: "https://picsum.photos/seed/light-academic-dashboard/1400/1000",
  },
  {
    name: "Teacher Demo Workspace",
    type: "Interactive UI",
    description:
      "A teacher-facing workspace focused on clean navigation, fast understanding, and confident live presentation.",
    stack: "Vue / REST API / Swagger",
    image: "https://picsum.photos/seed/bright-teacher-interface/1200/900",
  },
  {
    name: "Payment Integration Flow",
    type: "API integration",
    description:
      "A payment and debt-checking flow with token-based communication between frontend and backend services.",
    stack: "Axios / JWT / API Contracts",
    image: "https://picsum.photos/seed/fintech-api-board/1200/900",
  },
];

const skills = [
  "React",
  "Vite",
  "JavaScript",
  "HTML/CSS",
  ".NET APIs",
  "SQL Server",
  "JWT Auth",
  "Swagger",
  "GitHub Pages",
  "GSAP Motion",
];

const process = [
  {
    title: "Frame the product",
    text: "Define the audience, core flow, data needs, and what the final demo must prove.",
  },
  {
    title: "Design the experience",
    text: "Create a visual hierarchy that feels sharp, readable, responsive, and memorable.",
  },
  {
    title: "Build the system",
    text: "Implement UI, API contracts, authentication flow, build scripts, and deployment workflow.",
  },
  {
    title: "Publish and refine",
    text: "Ship to a public URL, test the live page, then keep improving through normal git pushes.",
  },
];

function App() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .signal-strip", {
        y: 52,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".hero-device", {
        y: 58,
        rotateX: 12,
        scale: 0.88,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.18,
      });

      gsap.to(".aura-one", {
        x: 96,
        y: -54,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".aura-two", {
        x: -76,
        y: 60,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".reveal-word").forEach((word, index) => {
        gsap.to(word, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".brand-statement",
            start: `top+=${index * 7} 84%`,
            end: "bottom 40%",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".image-lift").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.84, opacity: 0.45, filter: "brightness(1.08) contrast(0.92) saturate(0.72)" },
          {
            scale: 1,
            opacity: 1,
            filter: "brightness(1) contrast(1.04) saturate(0.9)",
            scrollTrigger: {
              trigger: image,
              start: "top 90%",
              end: "bottom 32%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray(".stack-card").forEach((card, index) => {
        gsap.to(card, {
          yPercent: -8 * index,
          scale: 1 - index * 0.03,
          scrollTrigger: {
            trigger: card,
            start: "top 74%",
            end: "bottom 24%",
            scrub: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="site-shell">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Back to top">
          DT
        </a>
        <div className="nav-center">
          <a href="#profile">Profile</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </div>
        <a className="nav-action" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </nav>

      <section id="home" className="hero-section">
        <div className="aura aura-one" />
        <div className="aura aura-two" />
        <div className="hero-grid-bg" />

        <div className="hero-content">
          <p className="hero-kicker">{profile.role} / Personal Portfolio</p>
          <h1 className="hero-title">{profile.tagline}</h1>
          <p className="hero-copy">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore work
            </a>
            <a className="button button-secondary" href={`mailto:${profile.email}`}>
              Start a conversation
            </a>
          </div>
          <div className="signal-strip" aria-label="Profile highlights">
            <span>{profile.location}</span>
            <span>Available for internship</span>
            <span>Public GitHub workflow</span>
          </div>
        </div>

        <aside className="hero-device image-lift" aria-label="Developer identity card">
          <div className="device-topbar">
            <span />
            <span />
            <span />
          </div>
          <img src="https://picsum.photos/seed/clean-developer-studio/1000/1180" alt="Clean developer workspace" />
          <div className="identity-card">
            <p>{profile.name}</p>
            <strong>System-minded developer with an eye for product detail.</strong>
          </div>
        </aside>
      </section>

      <section id="profile" className="profile-section">
        <div className="section-heading">
          <h2>
            A profile <span className="inline-media" /> built to feel bright, sharp and credible.
          </h2>
          <p>
            Instead of a dark one-page card, this version presents a stronger personal brand: clearer
            positioning, brighter visual energy, and proof that the portfolio is deployable.
          </p>
        </div>

        <div className="bento-grid">
          <article className="bento-card bento-main">
            <div className="bento-image">
              <img className="image-lift" src="https://picsum.photos/seed/whiteboard-product-code/1400/980" alt="Product planning and code workspace" />
            </div>
            <div>
              <span>Personal brand</span>
              <h3>Clean web products, from interface to deployment.</h3>
              <p>
                I bring together UI craft, API thinking, deployment discipline, and demo clarity so a
                project can move from local code to a public URL with confidence.
              </p>
            </div>
          </article>

          <article className="bento-card metric-card">
            <strong>01</strong>
            <p>public portfolio with automatic GitHub Pages deployment.</p>
          </article>

          <article className="bento-card glow-card">
            <span>Core value</span>
            <h3>Build it clearly. Ship it properly.</h3>
            <p>Good code should be readable, useful, and easy to present.</p>
          </article>

          <article className="bento-card">
            <span>Strength</span>
            <h3>Frontend polish</h3>
            <p>Responsive layouts, readable hierarchy, meaningful motion, and strong first impressions.</p>
          </article>

          <article className="bento-card">
            <span>Strength</span>
            <h3>Integration logic</h3>
            <p>REST APIs, auth flow, data contracts, Swagger checks, and practical deployment habits.</p>
          </article>
        </div>
      </section>

      <section className="statement-section">
        <p className="brand-statement">
          {"I want every project in my portfolio to prove three things: I understand users, I can build the system, and I can ship it to a real public link."
            .split(" ")
            .map((word, index) => (
              <span className="reveal-word" key={`${word}-${index}`}>
                {word}{" "}
              </span>
            ))}
        </p>
      </section>

      <section id="work" className="work-section">
        <div className="section-heading compact">
          <h2>Selected work</h2>
          <p>Three project directions that make the profile useful for recruiters, teammates, and future clients.</p>
        </div>
        <div className="project-rail">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <img className="image-lift" src={project.image} alt={project.name} />
              <div>
                <span>{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-section" aria-label="Skills">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-copy">
          <h2>How I move from idea to live product.</h2>
          <p>
            The strongest portfolio is not only beautiful. It shows a working habit: understand the
            problem, shape the experience, build the system, and publish it cleanly.
          </p>
        </div>
        <div className="stack-list">
          {process.map((item, index) => (
            <article className="stack-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="quote-card">
          <div className="avatar-stack">
            <img src="https://picsum.photos/seed/recruiter-review/240/240" alt="Reviewer portrait" />
            <img src="https://picsum.photos/seed/team-lead-review/240/240" alt="Team lead portrait" />
            <img src="https://picsum.photos/seed/client-review/240/240" alt="Client portrait" />
          </div>
          <blockquote>
            A memorable developer profile should make the viewer think: this person can communicate,
            build, deploy, and keep improving.
          </blockquote>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <div>
          <p className="footer-kicker">Ready for the next update</p>
          <h2>Push new code, and the public profile updates itself.</h2>
          <p>
            This portfolio is already connected to GitHub Pages. Future changes only need a commit and
            push to refresh the live website.
          </p>
        </div>
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
