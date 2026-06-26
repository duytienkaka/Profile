import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
import homeScreen from "./assests/Screenshot_20260626-204720.jpg";
import toolsScreen from "./assests/Screenshot_20260626-204742.jpg";
import walletScreen from "./assests/Screenshot_20260626-204804.jpg";

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: "Phạm Đức Duy Tiến",
  role: "Flutter Developer",
  focus: "Mobile Developer / Flutter",
  email: "duytienkaka123az@gmail.com",
  github: "https://github.com/duytienkaka",
  zalo: "tel:0382381164",
  projectUrl: "https://github.com/duytienkaka/TietKiem",
  aiVisionUrl: "https://github.com/duytienkaka/AI-Vision-Service",
  location: "TP Hà Nội",
  headline: "Xây dựng ứng dụng Flutter mượt, rõ kiến trúc và sẵn sàng mở rộng.",
  tagline:
    "Tôi là lập trình viên Mobile tập trung vào Flutter, xây dựng giao diện chỉn chu, luồng dữ liệu ổn định và kiến trúc dễ bảo trì. Mục tiêu của tôi là tạo ra những ứng dụng Android có trải nghiệm mượt, xử lý offline tốt và đủ rõ ràng để phát triển tiếp trong môi trường thực tế.",
};

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}&su=${encodeURIComponent("Trao đổi cơ hội hợp tác Mobile Developer")}&body=${encodeURIComponent(
  "Chào Duy Tiến,\n\nMình muốn trao đổi với bạn về một cơ hội/dự án mobile.\n\n",
)}`;

const stackBadges = [
  {
    label: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  {
    label: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    label: "Material 3",
    fallback: "M3",
  },
  {
    label: "Riverpod",
    fallback: "RP",
  },
  {
    label: "go_router",
    fallback: "Go",
  },
  {
    label: "Drift SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    label: "Supabase",
    icon: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
  {
    label: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    label: "RESTful API",
    fallback: "API",
  },
  {
    label: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    label: "GitHub",
    icon: "https://cdn.simpleicons.org/github/FFFFFF",
  },
];

const techCards = [
  {
    title: "UI & Navigation",
    text: "Flutter, Material 3, go_router và component tái sử dụng để giữ trải nghiệm nhất quán giữa các màn hình.",
  },
  {
    title: "State & Data",
    text: "Riverpod, Drift SQLite, SharedPreferences và mô hình offline-first để app phản hồi nhanh khi mạng không ổn định.",
  },
  {
    title: "Backend Integration",
    text: "Supabase, Firebase, RESTful API và luồng đồng bộ dữ liệu giúp dự án gần với môi trường sản phẩm thật.",
  },
  {
    title: "Product Handoff",
    text: "GitHub, README, ảnh demo và cấu trúc repo rõ ràng để nhà tuyển dụng có thể đọc nhanh năng lực kỹ thuật.",
  },
];

const caseSteps = [
  {
    title: "Bài toán sản phẩm",
    text: "Tiết Kiệm Chi Tiêu giúp người dùng quản lý nhiều ví, ghi nhận thu nhập, chi tiêu, chuyển tiền, ngân sách, mục tiêu tiết kiệm và giao dịch định kỳ.",
  },
  {
    title: "Kiến trúc ứng dụng",
    text: "Ứng dụng dùng Flutter, Material 3, Riverpod, go_router và Drift SQLite, kết hợp Supabase để đồng bộ dữ liệu và giữ codebase dễ mở rộng.",
  },
  {
    title: "Điểm kỹ thuật nổi bật",
    text: "Luồng phát hiện giao dịch ngân hàng từ thông báo Android giúp người dùng kiểm tra và ghi nhận giao dịch nhanh hơn.",
  },
  {
    title: "Giá trị thể hiện",
    text: "Dự án có offline-first, backup/restore JSON, khóa PIN, đính kèm ảnh hóa đơn, chia sẻ ví và giao diện đủ hoàn thiện để demo.",
  },
];

const skillMarquee = [
  "Flutter",
  "Dart",
  "Riverpod",
  "Drift SQLite",
  "Supabase",
  "Material 3",
  "Offline-first",
  "RESTful API",
  "Firebase",
  "GitHub",
];

function PhoneMockup({ src, alt, className = "", mediaType = "image" }) {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-speaker" />
      <div className="phone-screen">
        {mediaType === "video" ? (
          <video src={src} aria-label={alt} autoPlay loop muted playsInline />
        ) : (
          <img src={src} alt={alt} />
        )}
      </div>
    </div>
  );
}

function App() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .stack-badges", {
        y: 42,
        opacity: 0,
        duration: 0.95,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(".hero-device", {
        y: 80,
        rotate: 4,
        scale: 0.88,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.12,
      });

      gsap.utils.toArray(".image-lift").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.88, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: image,
              start: "top 90%",
              end: "bottom 35%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray(".case-step").forEach((card, index) => {
        gsap.to(card, {
          yPercent: -6 * index,
          scale: 1 - index * 0.018,
          scrollTrigger: {
            trigger: card,
            start: "top 78%",
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
      <nav className="nav-shell" aria-label="Điều hướng chính">
        <a className="brand-mark" href="#home" aria-label="Về đầu trang">
          DT
        </a>
        <div className="nav-center">
          <a href="#home">Trang chủ</a>
          <a href="#stack">Kỹ năng</a>
          <a href="#projects">Dự án</a>
          <a href="#about">Giới thiệu</a>
        </div>
        <a className="nav-action" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>

      <section id="home" className="hero-section">
        <div className="glow glow-one" />
        <div className="glow glow-two" />

        <div className="hero-content">
          <p className="hero-kicker">{profile.focus} / {profile.location}</p>
          <h1 className="hero-title">{profile.headline}</h1>
          <p className="hero-copy">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={gmailUrl} target="_blank" rel="noreferrer">
              Gửi email
            </a>
            <a className="button button-primary" href={profile.projectUrl} target="_blank" rel="noreferrer">
              Xem GitHub
            </a>
          </div>
          <div className="stack-badges" aria-label="Tech stack chính">
            {stackBadges.slice(0, 7).map((badge) => (
              <span className="tech-badge" key={badge.label}>
                <span className="tech-badge-icon">
                  {badge.icon ? <img src={badge.icon} alt="" aria-hidden="true" /> : badge.fallback}
                </span>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-device image-lift">
          <PhoneMockup src={homeScreen} alt="Màn hình trang chủ ứng dụng Tiết Kiệm Chi Tiêu" />
          <div className="device-caption">
            <span>{profile.name}</span>
            <strong>{profile.role}</strong>
            <p>Ứng dụng quản lý tài chính cá nhân viết bằng Flutter, tối ưu cho Android và trải nghiệm offline-first.</p>
          </div>
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="section-heading">
          <h2>
            Tech Stack <span className="inline-media" /> gọn, rõ, đúng chất Mobile.
          </h2>
          <p>
            Các công nghệ được gom theo nhóm năng lực thay vì trình bày thành đoạn chữ dài. Mỗi badge có
            thể thay bằng Devicon hoặc Simple Icons khi bạn muốn dùng icon thật.
          </p>
        </div>

        <div className="badge-wall">
          {stackBadges.map((badge) => (
            <span className="tech-badge tech-badge-large" key={badge.label}>
              <span className="tech-badge-icon">
                {badge.icon ? <img src={badge.icon} alt="" aria-hidden="true" /> : badge.fallback}
              </span>
              {badge.label}
            </span>
          ))}
        </div>

        <div className="tech-grid">
          <article className="tech-card tech-card-large">
            <span>Định hướng chính</span>
            <h3>Flutter mobile development</h3>
            <p>
              Tập trung vào Flutter để xây dựng ứng dụng Android có giao diện mượt, mã nguồn dễ đọc,
              dữ liệu offline-first và khả năng phát triển tiếp trong môi trường thực tế.
            </p>
          </article>
          {techCards.map((card) => (
            <article className="tech-card" key={card.title}>
              <span>{card.title}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="project-section">
        <div className="section-heading compact">
          <h2>Case Study: Tiết Kiệm Chi Tiêu</h2>
          <p>
            Dự án mobile nổi bật nhất của tôi: ứng dụng quản lý tài chính cá nhân viết bằng Flutter,
            tối ưu cho Android, hỗ trợ offline-first và theo dõi thu chi hằng ngày.
          </p>
        </div>

        <div className="case-layout">
          <div className="case-visual image-lift">
            <PhoneMockup src={walletScreen} alt="Màn hình tạo ví trong ứng dụng Tiết Kiệm Chi Tiêu" />
          </div>
          <div className="case-timeline">
            {caseSteps.map((step, index) => (
              <article className="case-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
            <div className="case-actions">
              <a className="button button-primary" href={profile.projectUrl} target="_blank" rel="noreferrer">
                Xem code trên GitHub
              </a>
              <a className="button button-outlined" href={profile.zalo}>
                Gọi Zalo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Kỹ năng lập trình mobile">
        <div className="marquee-track">
          {[...skillMarquee, ...skillMarquee].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-card">
          <p className="section-kicker">Giới thiệu</p>
          <h2>Tôi chọn Mobile vì đây là nơi phần mềm chạm vào thói quen hằng ngày của người dùng.</h2>
          <p>
            Tôi là sinh viên chuẩn bị ra trường và đang định hướng trở thành Mobile Developer chuyên về
            Flutter. Tôi ưu tiên cách viết code rõ ràng, kiến trúc dễ bảo trì, quản lý state có kiểm
            soát, luồng API dễ theo dõi và giao diện đặt trải nghiệm người dùng lên đầu. Mục tiêu hiện
            tại của tôi là tiếp tục hoàn thiện kỹ năng Flutter, làm tốt trong môi trường đội nhóm và xây
            dựng các sản phẩm mobile có giá trị thực tế.
          </p>
        </div>
        <div className="proof-card">
          <div className="proof-badges" aria-label="Các điểm chứng minh năng lực">
            <span>GitHub</span>
            <span>Tiết Kiệm Chi Tiêu</span>
            <span>AI Vision Service</span>
          </div>
          <blockquote>
            Điểm mạnh của tôi là hoàn thành sản phẩm đến mức có thể demo, tối ưu giao diện responsive,
            tích hợp xác thực và dữ liệu, đồng thời giữ tinh thần làm việc nhóm tốt.
          </blockquote>
        </div>
      </section>

      <section className="secondary-project-section">
        <div className="secondary-project-card">
          <span>Dự án khác</span>
          <h2>AI-Vision-Service</h2>
          <p>
            Dịch vụ nhận diện đối tượng cho nền tảng Smart Campus: nhận ảnh từ camera, chạy YOLO, lưu
            kết quả vào PostgreSQL, gửi sự kiện nhận diện sang Core Service và cung cấp REST API,
            OpenAPI cùng giao diện web demo trực tiếp.
          </p>
          <a className="button button-tonal" href={profile.aiVisionUrl} target="_blank" rel="noreferrer">
            Xem dự án AI Vision
          </a>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <div>
          <p className="footer-kicker">Liên hệ</p>
          <h2>Sẵn sàng trao đổi về một cơ hội Mobile Developer?</h2>
          <p>
            Nếu bạn đang tìm một sinh viên chuẩn bị ra trường có định hướng rõ về Flutter, có sản phẩm
            demo thật và sẵn sàng học nhanh trong môi trường thực tế, hãy liên hệ với tôi qua email,
            GitHub hoặc Zalo 0382381164.
          </p>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href={gmailUrl} target="_blank" rel="noreferrer">
            Gửi email
          </a>
          <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
            Xem GitHub
          </a>
          <a className="button button-outlined" href={profile.zalo}>
            Gọi Zalo
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
