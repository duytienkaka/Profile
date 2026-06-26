import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: "Nguyen Developer",
  role: "Full-stack Developer",
  email: "nguyen.dev@example.com",
  location: "Ho Chi Minh City, Vietnam",
  summary:
    "Tôi xây dựng giao diện web, API và luồng tích hợp có thể demo thật: rõ vai trò, rõ dữ liệu, dễ chạy và dễ bàn giao.",
};

const projects = [
  {
    name: "Academic Service Platform",
    type: "Full-stack system",
    description:
      "Hệ thống quản lý sinh viên, khóa học, điểm danh và thanh toán theo kiến trúc nhiều dịch vụ.",
    stack: "React, .NET, SQL Server, JWT",
    image: "https://picsum.photos/seed/academic-platform-ui/1400/1000",
  },
  {
    name: "Teacher Demo Workspace",
    type: "Product UI",
    description:
      "Giao diện demo theo vai trò giảng viên, tối ưu cho thuyết trình và kiểm thử luồng nghiệp vụ.",
    stack: "Vue, REST API, Swagger",
    image: "https://picsum.photos/seed/teacher-dashboard-tech/1200/900",
  },
  {
    name: "Payment Integration Flow",
    type: "Service integration",
    description:
      "Luồng thanh toán, công nợ và xác thực token giữa frontend và backend trong môi trường nội bộ.",
    stack: "Axios, JWT, API Gateway",
    image: "https://picsum.photos/seed/payment-code-flow/1200/900",
  },
];

const capabilities = [
  "Interface systems",
  "REST API design",
  "JWT authentication",
  "Database modeling",
  "Service integration",
  "Deployment workflow",
  "Technical docs",
  "Demo polish",
];

const process = [
  {
    title: "Discover",
    text: "Chốt mục tiêu, người dùng chính, dữ liệu cần hiển thị và tiêu chí demo thành công.",
  },
  {
    title: "Design",
    text: "Dựng nhịp giao diện, hierarchy, interaction states và responsive layout trước khi polish.",
  },
  {
    title: "Build",
    text: "Triển khai frontend, API contract, cấu hình môi trường và kiểm tra trực tiếp trên URL thật.",
  },
  {
    title: "Ship",
    text: "Đóng gói README, workflow deploy, kiểm thử build và chuẩn bị repo để đưa lên GitHub.",
  },
];

function App() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-note", {
        y: 56,
        opacity: 0,
        duration: 1,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.from(".hero-portrait", {
        y: 46,
        scale: 0.88,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.18,
      });

      gsap.to(".orb-one", {
        x: 80,
        y: -60,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-two", {
        x: -70,
        y: 70,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".word").forEach((word, index) => {
        gsap.to(word, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".manifesto",
            start: `top+=${index * 8} 82%`,
            end: "bottom 38%",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 84, scale: 0.92, opacity: 0.45 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "bottom 52%",
              scrub: true,
            },
            delay: index * 0.04,
          },
        );
      });

      gsap.utils.toArray(".stack-card").forEach((card, index) => {
        gsap.to(card, {
          yPercent: -8 * index,
          scale: 1 - index * 0.035,
          scrollTrigger: {
            trigger: card,
            start: "top 72%",
            end: "bottom 24%",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".image-lift").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.82, opacity: 0.35, filter: "brightness(0.46) contrast(1.35)" },
          {
            scale: 1,
            opacity: 1,
            filter: "brightness(0.9) contrast(1.18)",
            scrollTrigger: {
              trigger: image,
              start: "top 90%",
              end: "bottom 28%",
              scrub: true,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="site-shell">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand-mark" href="#home" aria-label="Back to top">
          ND
        </a>
        <div className="nav-center">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#process">Process</a>
        </div>
        <a className="nav-action" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </nav>

      <section id="home" className="hero-section">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-background image-lift" />

        <div className="hero-content">
          <p className="hero-kicker">{profile.role} / Portfolio 2026</p>
          <h1 className="hero-title">
            Building digital products with code, clarity and motion.
          </h1>
          <p className="hero-copy">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#projects">
              View projects
            </a>
            <a className="button button-dark" href={`mailto:${profile.email}`}>
              Hire me
            </a>
          </div>
          <p className="hero-note">{profile.location} / Available for internship and freelance work</p>
        </div>

        <aside className="hero-portrait image-lift" aria-label="Developer profile card">
          <img src="https://picsum.photos/seed/developer-portrait-workstation/1000/1300" alt="Developer workspace portrait" />
          <div className="portrait-glass">
            <span>{profile.name}</span>
            <strong>System-minded developer</strong>
          </div>
        </aside>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading">
          <h2>
            Selected <span className="inline-media" /> work shaped for real deployment.
          </h2>
          <p>
            Một profile tốt không chỉ kể rằng bạn biết code. Nó cho thấy bạn hiểu sản phẩm, luồng dữ
            liệu, trải nghiệm người dùng và cách đưa dự án lên môi trường public.
          </p>
        </div>

        <div className="bento-grid">
          <article className="bento-card bento-hero">
            <div className="bento-image">
              <img className="image-lift" src={projects[0].image} alt={projects[0].name} />
            </div>
            <div>
              <span>{projects[0].type}</span>
              <h3>{projects[0].name}</h3>
              <p>{projects[0].description}</p>
            </div>
          </article>
          <article className="bento-card metric-card">
            <strong>4</strong>
            <p>giai đoạn rõ ràng từ phân tích, thiết kế, triển khai đến deploy.</p>
          </article>
          <article className="bento-card code-card">
            <code>npm run build && deploy</code>
            <p>Repo được chuẩn bị để build tĩnh và publish bằng GitHub Pages.</p>
          </article>
          <article className="bento-card">
            <span>{projects[1].type}</span>
            <h3>{projects[1].name}</h3>
            <p>{projects[1].description}</p>
          </article>
          <article className="bento-card">
            <span>{projects[2].type}</span>
            <h3>{projects[2].name}</h3>
            <p>{projects[2].description}</p>
          </article>
        </div>
      </section>

      <section className="manifesto-section">
        <p className="manifesto">
          {"I care about interfaces that feel premium, systems that run predictably, and repositories that another developer can clone, build and trust."
            .split(" ")
            .map((word, index) => (
              <span className="word" key={`${word}-${index}`}>
                {word}{" "}
              </span>
            ))}
        </p>
      </section>

      <section id="skills" className="capability-section">
        <div className="section-heading compact">
          <h2>Technical range</h2>
          <p>Những mảng năng lực được trình bày trực quan để người xem nắm nhanh thế mạnh của profile.</p>
        </div>
        <div className="accordion-row">
          {projects.map((project) => (
            <article className="accordion-card" key={project.name}>
              <img src={project.image} alt={project.name} />
              <div className="accordion-copy">
                <span>{project.stack}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-section" aria-label="Capabilities">
        <div className="marquee-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-copy">
          <h2>From idea to public URL.</h2>
          <p>
            Profile này đã được chuẩn bị như một repo thật: source rõ ràng, build được, deploy được và
            có hướng dẫn để đưa lên GitHub Pages.
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

      <footer id="contact" className="footer-section">
        <div>
          <p className="footer-kicker">Ready to publish</p>
          <h2>Let this profile become your public developer identity.</h2>
          <p>
            Thay tên, email, ảnh và dự án trong source là bạn có một portfolio sẵn sàng gửi nhà tuyển
            dụng hoặc dùng làm trang cá nhân.
          </p>
        </div>
        <a className="button button-light" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
