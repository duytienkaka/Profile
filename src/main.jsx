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
  focus: "Mobile Developer / Flutter Developer",
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

const techGroups = [
  {
    title: "Ngôn ngữ",
    lead: "Dart",
    text: "Dart là ngôn ngữ chính; có nền tảng JavaScript và TypeScript để làm việc với API, tooling và các dự án liên quan.",
  },
  {
    title: "Flutter Stack",
    lead: "Flutter",
    text: "Flutter, Material 3, Riverpod, go_router, Provider và Bloc cho giao diện, điều hướng và quản lý trạng thái.",
  },
  {
    title: "Dữ liệu và API",
    lead: "SQLite",
    text: "Drift (SQLite), Supabase, Firebase, RESTful API, SharedPreferences và luồng dữ liệu offline-first.",
  },
  {
    title: "Quy trình",
    lead: "Git",
    text: "Git, GitHub, README, demo project, quản lý mã nguồn và tinh thần làm việc nhóm rõ ràng.",
  },
];

const caseSteps = [
  {
    title: "Bài toán sản phẩm",
    text: "Tiết Kiệm Chi Tiêu giúp người dùng quản lý nhiều ví như tiền mặt, tài khoản ngân hàng và tiết kiệm; ghi nhận thu nhập, chi tiêu, chuyển tiền, ngân sách, mục tiêu tiết kiệm và giao dịch định kỳ.",
  },
  {
    title: "Giải pháp kỹ thuật",
    text: "Ứng dụng được xây bằng Flutter, Material 3, Riverpod, go_router và Drift (SQLite), kết hợp Supabase để đồng bộ dữ liệu. Cấu trúc tách rõ UI, state, dữ liệu cục bộ và dịch vụ đồng bộ.",
  },
  {
    title: "Điểm kỹ thuật nổi bật",
    text: "Luồng phát hiện giao dịch ngân hàng từ thông báo Android là điểm đáng chú ý: ứng dụng có thể đọc tín hiệu từ thông báo, hỗ trợ người dùng kiểm tra và ghi nhận giao dịch nhanh hơn.",
  },
  {
    title: "Giá trị thể hiện",
    text: "Dự án cho thấy khả năng xây dựng app mobile có giao diện hoàn chỉnh, dữ liệu offline, backup/restore JSON, khóa PIN, đính kèm ảnh hóa đơn và chia sẻ ví theo người dùng.",
  },
];

const skills = [
  "Flutter",
  "Dart",
  "Riverpod",
  "go_router",
  "Drift SQLite",
  "Supabase",
  "Material 3",
  "Offline-first",
  "RESTful API",
  "Firebase",
  "GitHub",
];

function App() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-shell", {
        y: -26,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions", {
        y: 46,
        opacity: 0,
        duration: 1,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.from(".app-window", {
        y: 72,
        scale: 0.9,
        opacity: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.18,
      });

      gsap.utils.toArray(".image-lift").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.86, opacity: 0.45, filter: "brightness(0.92) contrast(0.9) saturate(0.75)" },
          {
            scale: 1,
            opacity: 1,
            filter: "brightness(1) contrast(1.05) saturate(0.95)",
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
          scale: 1 - index * 0.02,
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
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-content">
          <p className="hero-kicker">{profile.focus} / {profile.location}</p>
          <h1 className="hero-title">{profile.headline}</h1>
          <p className="hero-copy">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Xem case study
            </a>
            <a className="button button-secondary" href={gmailUrl} target="_blank" rel="noreferrer">
              Gửi email
            </a>
          </div>
        </div>

        <div className="launch-board" aria-label="Bảng trình bày ứng dụng mobile">
          <article className="app-window app-window-main image-lift">
            <div className="window-bar">
              <span />
              <span />
              <span />
            </div>
            <img src={homeScreen} alt="Màn hình trang chủ ứng dụng quản lý chi tiêu" />
          </article>
          <article className="app-window phone-preview">
            <img src={toolsScreen} alt="Màn hình công cụ trong ứng dụng quản lý chi tiêu" />
            <div>
              <span>{profile.name}</span>
              <strong>{profile.role} tại Hà Nội</strong>
            </div>
          </article>
          <article className="app-window launch-note">
            <span>Giá trị mang lại</span>
            <h2>Ứng dụng Flutter rõ luồng, chạy ổn và đủ chỉn chu để demo.</h2>
          </article>
        </div>
      </section>

      <section id="stack" className="stack-section">
        <div className="section-heading">
          <h2>
            Tech Stack <span className="inline-media" /> được trình bày theo năng lực thật.
          </h2>
          <p>
            Tôi không chỉ liệt kê công nghệ. Mỗi nhóm kỹ năng thể hiện một phần của quá trình xây dựng
            ứng dụng Flutter: giao diện, điều hướng, dữ liệu cục bộ, đồng bộ và quy trình bàn giao.
          </p>
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
          {techGroups.map((group) => (
            <article className="tech-card" key={group.title}>
              <span>{group.title}</span>
              <h3>{group.lead}</h3>
              <p>{group.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="project-section">
        <div className="section-heading compact">
          <h2>Case Study: Tiết Kiệm Chi Tiêu</h2>
          <p>
            Dự án mobile nổi bật nhất của tôi: một ứng dụng quản lý tài chính cá nhân viết bằng Flutter,
            tối ưu cho Android, hỗ trợ offline-first và theo dõi thu chi hằng ngày.
          </p>
        </div>

        <div className="case-layout">
          <div className="case-visual image-lift">
            <img src={walletScreen} alt="Màn hình tạo ví trong ứng dụng quản lý chi tiêu" />
            <p>Ảnh chụp giao diện thật của Tiết Kiệm Chi Tiêu: tạo ví, chọn loại ví, tùy chỉnh màu sắc và biểu tượng.</p>
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
              <a className="button button-secondary" href={gmailUrl} target="_blank" rel="noreferrer">
                Hẹn trao đổi demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Kỹ năng lập trình mobile">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
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
            Flutter. Với tôi, một ứng dụng tốt không chỉ cần chạy đúng, mà còn phải nhanh, dễ hiểu, ổn
            định và tạo cảm giác tin cậy. Tôi ưu tiên cách viết code rõ ràng, kiến trúc dễ bảo trì,
            quản lý state có kiểm soát, luồng API dễ theo dõi và giao diện đặt trải nghiệm người dùng
            lên đầu. Mục tiêu hiện tại của tôi là tiếp tục hoàn thiện kỹ năng Flutter, làm tốt trong môi
            trường đội nhóm và xây dựng các sản phẩm mobile có giá trị thực tế.
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
          <a className="button button-primary" href={profile.aiVisionUrl} target="_blank" rel="noreferrer">
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
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
            Xem GitHub
          </a>
          <a className="button button-secondary" href={profile.zalo}>
            Gọi Zalo
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
