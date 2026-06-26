import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: "Nguyen Duy Tien",
  role: "Mobile Developer",
  focus: "Cross-platform Mobile Developer",
  email: "duytienkaka123az@gmail.com",
  github: "https://github.com/duytienkaka",
  headline: "Cross-platform Mobile Developer building smooth, scalable apps.",
  tagline:
    "I craft Flutter and React Native mobile experiences with clean architecture, responsive UI, reliable API integration, and a strong focus on performance.",
};

const headlineOptions = [
  {
    title: "Mobile apps that feel fast, clean, and reliable.",
    text: "Cross-platform developer focused on Flutter, React Native, Firebase, RESTful API integration, and maintainable app architecture.",
  },
  {
    title: "Turning mobile ideas into polished product experiences.",
    text: "I build user-centered applications with smooth UI, clean state management, offline-aware data flows, and production-ready code structure.",
  },
];

const stackGroups = [
  {
    title: "Languages",
    items: ["Dart", "JavaScript", "TypeScript", "Kotlin basics"],
  },
  {
    title: "Frameworks",
    items: ["Flutter", "React Native", "Bloc", "Provider"],
  },
  {
    title: "Tools",
    items: ["Firebase", "RESTful API", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Mobile Quality",
    items: ["Clean Architecture", "Offline-first", "Caching", "Performance UI"],
  },
];

const project = {
  name: "Expense Tracker Mobile App",
  functions: "Track income and expenses, set monthly budgets, analyze spending, and export reports.",
  architecture: "MVVM, local caching, RESTful API, Firebase Auth, offline-first data flow.",
  overview:
    "A personal finance mobile app designed to help users understand daily spending habits through clean charts, fast input flows, and reliable offline usage. The project section is built to support a phone mockup GIF, so recruiters can understand the product in seconds.",
  challenges: [
    {
      title: "Asynchronous data flow",
      text: "I separated UI state, business logic, and repository layers so API calls, local cache updates, and loading states remain predictable and easy to test.",
    },
    {
      title: "Offline-first experience",
      text: "The app prioritizes local data access first, then syncs with remote services when a connection is available, reducing blank screens and improving perceived performance.",
    },
    {
      title: "Smooth mobile UI",
      text: "Reusable widgets, optimized rebuild boundaries, and simple animation patterns help the interface stay responsive even when transaction lists grow.",
    },
  ],
};

const aboutWords =
  "I chose mobile development because a smartphone app is often the closest software product to a user's daily life. A good app must be fast, useful, intuitive, and trustworthy. My coding philosophy is simple: write clean, maintainable code that supports a smooth user experience. I care about readable architecture, clear state management, predictable API integration, and UI details that make an app feel professional. Whether I am building a Flutter screen, connecting Firebase, handling RESTful APIs, or preparing a GitHub repository, I try to think beyond the feature itself: how will another developer maintain it, how will a user experience it, and how confidently can it be presented in a real demo?";

const skills = [
  "Flutter",
  "React Native",
  "Dart",
  "Firebase",
  "Bloc",
  "RESTful API",
  "Clean Architecture",
  "Offline-first",
  "Git",
  "CI/CD",
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

      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .headline-options", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".phone-stage", {
        y: 60,
        rotate: 4,
        scale: 0.88,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.18,
      });

      gsap.to(".aura-one", {
        x: 86,
        y: -52,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".aura-two", {
        x: -74,
        y: 58,
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
            trigger: ".about-story",
            start: `top+=${index * 6} 84%`,
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

      gsap.utils.toArray(".challenge-card").forEach((card, index) => {
        gsap.to(card, {
          yPercent: -7 * index,
          scale: 1 - index * 0.028,
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
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-action" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>

      <section id="home" className="hero-section">
        <div className="aura aura-one" />
        <div className="aura aura-two" />
        <div className="hero-grid-bg" />

        <div className="hero-content">
          <p className="hero-kicker">{profile.focus} / Flutter / React Native</p>
          <h1 className="hero-title">{profile.headline}</h1>
          <p className="hero-copy">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View case study
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </div>
          <div className="headline-options" aria-label="Alternative profile headlines">
            {headlineOptions.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="phone-stage image-lift" aria-label="Mobile app preview">
          <div className="phone-frame">
            <div className="phone-notch" />
            <img src="https://picsum.photos/seed/mobile-app-dashboard/820/1420" alt="Mobile app dashboard mockup" />
            <div className="phone-overlay">
              <span>{profile.name}</span>
              <strong>Mobile apps with clean architecture and smooth UX.</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="stack-section">
        <div className="section-heading">
          <h2>
            Tech Stack <span className="inline-media" /> Overview.
          </h2>
          <p>
            Logos and skills should be grouped by role: Languages, Frameworks, Tools, and Mobile
            Quality. This makes the stack easy to scan instead of feeling like a random list.
          </p>
        </div>

        <div className="bento-grid">
          <article className="bento-card bento-main">
            <div className="bento-image">
              <img className="image-lift" src="https://picsum.photos/seed/flutter-code-mobile/1400/980" alt="Mobile development workspace" />
            </div>
            <div>
              <span>Main direction</span>
              <h3>Cross-platform mobile development with product-ready structure.</h3>
              <p>
                Flutter and React Native help me build mobile experiences that can move fast without
                sacrificing maintainability, UI consistency, or deployment readiness.
              </p>
            </div>
          </article>

          {stackGroups.map((group) => (
            <article className="bento-card stack-card-mini" key={group.title}>
              <span>{group.title}</span>
              <h3>{group.items[0]}</h3>
              <p>{group.items.join(" / ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="project-section">
        <div className="section-heading compact">
          <h2>Featured Mobile Case Study</h2>
          <p>
            A GitHub repository becomes more impressive when it is framed as a product story: what the
            app does, what technical problems were solved, and how the code proves your ability.
          </p>
        </div>

        <div className="case-study">
          <div className="case-media image-lift">
            <img src="https://picsum.photos/seed/expense-tracker-phone/900/1300" alt="Expense tracker app phone mockup" />
            <p>Suggested placement: add a short GIF mockup here showing budget input, chart updates, and report export.</p>
          </div>
          <div className="case-copy">
            <span>{project.architecture}</span>
            <h3>{project.name}</h3>
            <p>{project.overview}</p>
            <dl>
              <div>
                <dt>Main features</dt>
                <dd>{project.functions}</dd>
              </div>
              <div>
                <dt>Architecture and libraries</dt>
                <dd>{project.architecture}</dd>
              </div>
            </dl>
            <div className="case-actions">
              <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
                View Code on GitHub
              </a>
              <a className="button button-secondary" href="#contact">
                Request demo
              </a>
            </div>
          </div>
        </div>

        <div className="challenge-grid">
          {project.challenges.map((item, index) => (
            <article className="challenge-card" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-section" aria-label="Mobile development skills">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-layout">
          <div>
            <p className="section-kicker">About Me</p>
            <h2>Why I choose Mobile Development.</h2>
          </div>
          <p className="about-story">
            {aboutWords.split(" ").map((word, index) => (
              <span className="reveal-word" key={`${word}-${index}`}>
                {word}{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="proof-card">
          <div className="avatar-stack">
            <img src="https://picsum.photos/seed/mobile-lead-review/240/240" alt="Team lead portrait" />
            <img src="https://picsum.photos/seed/recruiter-mobile-review/240/240" alt="Recruiter portrait" />
            <img src="https://picsum.photos/seed/product-review-mobile/240/240" alt="Product reviewer portrait" />
          </div>
          <blockquote>
            Social proof suggestion: place a short testimonial from a mentor, teammate, or team lead
            here, and embed your GitHub Contribution Graph nearby to reinforce consistency.
          </blockquote>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <div>
          <p className="footer-kicker">Contact</p>
          <h2>Looking for a mobile developer who can build, polish, and ship?</h2>
          <p>
            I am open to internship opportunities, collaboration, and mobile product ideas. Reach out
            via email or GitHub, and let us turn a strong concept into a clean mobile experience.
          </p>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
            GitHub profile
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
