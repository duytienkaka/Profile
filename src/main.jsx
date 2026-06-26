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
  name: "Nguyễn Duy Tiến",
  role: "Lập trình viên Mobile",
  focus: "Cross-platform Mobile Developer",
  email: "duytienkaka123az@gmail.com",
  github: "https://github.com/duytienkaka",
  headline: "Thiết kế và xây dựng ứng dụng mobile mượt mà, dễ dùng, dễ mở rộng.",
  tagline:
    "Tôi phát triển ứng dụng Flutter và React Native với tư duy sản phẩm, kiến trúc sạch, tích hợp API ổn định và trải nghiệm người dùng được chăm chút từ những chi tiết nhỏ.",
};

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  profile.email,
)}&su=${encodeURIComponent("Trao đổi cơ hội hợp tác Mobile Developer")}&body=${encodeURIComponent(
  "Chào Tiến,\n\nMình muốn trao đổi với bạn về một cơ hội/dự án mobile.\n\n",
)}`;

const techGroups = [
  {
    title: "Ngôn ngữ",
    lead: "Dart",
    text: "Dart, JavaScript, TypeScript, Kotlin cơ bản",
  },
  {
    title: "Framework",
    lead: "Flutter",
    text: "Flutter, React Native, Bloc, Provider",
  },
  {
    title: "Dữ liệu và API",
    lead: "Firebase",
    text: "Firebase Auth, RESTful API, local caching, offline-first flow",
  },
  {
    title: "Quy trình",
    lead: "Git",
    text: "Git, GitHub, CI/CD, README, workflow deploy",
  },
];

const caseSteps = [
  {
    title: "Bài toán sản phẩm",
    text: "Người dùng cần ghi lại thu chi nhanh, xem xu hướng chi tiêu rõ ràng và theo dõi hạn mức hằng tháng mà không bị rối bởi quá nhiều thao tác.",
  },
  {
    title: "Giải pháp kỹ thuật",
    text: "Ứng dụng được tổ chức theo MVVM, tách UI, state, repository và service để luồng dữ liệu bất đồng bộ dễ kiểm soát, dễ mở rộng và dễ kiểm thử.",
  },
  {
    title: "Trải nghiệm offline-first",
    text: "Dữ liệu cục bộ được ưu tiên để người dùng vẫn xem được giao dịch khi mạng yếu, sau đó đồng bộ lại với API hoặc Firebase khi kết nối ổn định.",
  },
  {
    title: "Kết quả mong muốn",
    text: "Một case study rõ ràng trên website: có mockup điện thoại, mô tả chức năng, giải thích kỹ thuật và nút dẫn thẳng về GitHub để xem mã nguồn.",
  },
];

const skills = [
  "Flutter",
  "React Native",
  "Dart",
  "Firebase",
  "Bloc",
  "RESTful API",
  "MVVM",
  "Offline-first",
  "Clean Architecture",
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
          <p className="hero-kicker">{profile.focus} / Flutter / React Native</p>
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
              <strong>{profile.role}</strong>
            </div>
          </article>
          <article className="app-window launch-note">
            <span>Giá trị mang lại</span>
            <h2>Ứng dụng rõ luồng, chạy ổn và đủ chỉn chu để demo.</h2>
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
            ứng dụng mobile: giao diện, dữ liệu, kiến trúc và quy trình bàn giao.
          </p>
        </div>

        <div className="tech-grid">
          <article className="tech-card tech-card-large">
            <span>Định hướng chính</span>
            <h3>Cross-platform mobile development</h3>
            <p>
              Tập trung vào Flutter và React Native để xây dựng ứng dụng có giao diện mượt, cấu trúc mã
              nguồn dễ đọc và khả năng phát triển tiếp trong môi trường thực tế.
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
          <h2>Case Study: Ứng dụng Quản lý Chi tiêu</h2>
          <p>
            Bố cục mới kể dự án theo hành trình: bài toán, giải pháp, trải nghiệm offline-first và kết
            quả. Cách này giúp nhà tuyển dụng hiểu nhanh vai trò kỹ thuật của bạn trong sản phẩm.
          </p>
        </div>

        <div className="case-layout">
          <div className="case-visual image-lift">
            <img src={walletScreen} alt="Màn hình tạo ví trong ứng dụng quản lý chi tiêu" />
            <p>Ảnh chụp giao diện thật của ứng dụng: tạo ví, chọn loại ví, tùy chỉnh màu sắc và biểu tượng.</p>
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
              <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
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
            Một ứng dụng tốt không chỉ cần chạy đúng, mà còn phải nhanh, dễ hiểu, ổn định và tạo cảm
            giác tin cậy. Triết lý viết code của tôi là giữ mọi thứ rõ ràng: kiến trúc dễ bảo trì,
            state management có kiểm soát, luồng API dễ theo dõi và giao diện đặt trải nghiệm người
            dùng lên đầu. Khi xây dựng một màn hình Flutter, kết nối Firebase, xử lý RESTful API hay
            chuẩn bị repo trên GitHub, tôi luôn nghĩ đến việc người dùng có thao tác dễ không, lập
            trình viên khác có bảo trì được không và sản phẩm có đủ chỉn chu để demo thực tế không.
          </p>
        </div>
        <div className="proof-card">
          <div className="proof-badges" aria-label="Các điểm chứng minh năng lực">
            <span>GitHub</span>
            <span>Demo App</span>
            <span>UI Mobile</span>
          </div>
          <blockquote>
            Có thể đặt lời nhận xét từ mentor, đồng đội hoặc leader tại đây, kèm GitHub Contribution
            Graph để tăng độ tin cậy cho hồ sơ cá nhân.
          </blockquote>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <div>
          <p className="footer-kicker">Liên hệ</p>
          <h2>Sẵn sàng trao đổi về một cơ hội Mobile Developer?</h2>
          <p>
            Nếu bạn đang tìm một lập trình viên có thể xây dựng giao diện mobile, tích hợp API, chăm
            chút trải nghiệm và trình bày sản phẩm rõ ràng, hãy gửi email cho tôi.
          </p>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href={gmailUrl} target="_blank" rel="noreferrer">
            Gửi email
          </a>
          <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
            Xem GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
