import React, { useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const profile = {
  name: "Nguyễn Duy Tiến",
  role: "Lập trình viên Mobile",
  focus: "Cross-platform Mobile Developer",
  email: "duytienkaka123az@gmail.com",
  github: "https://github.com/duytienkaka",
  headline: "Xây dựng ứng dụng di động mượt, rõ luồng và dễ mở rộng.",
  tagline:
    "Tôi tập trung phát triển ứng dụng Flutter và React Native với kiến trúc sạch, giao diện chỉn chu, tích hợp API ổn định và trải nghiệm người dùng nhất quán.",
};

const headlineOptions = [
  {
    title: "Ứng dụng mobile nhanh, sạch và đáng tin cậy.",
    text: "Định hướng cross-platform với Flutter, React Native, Firebase, RESTful API và cấu trúc mã nguồn dễ bảo trì.",
  },
  {
    title: "Biến ý tưởng mobile thành sản phẩm có thể trình bày.",
    text: "Tôi xây dựng giao diện mượt, quản lý state rõ ràng, dữ liệu offline-first và repo sẵn sàng để nhà tuyển dụng xem nhanh.",
  },
];

const stackGroups = [
  {
    title: "Ngôn ngữ",
    items: ["Dart", "JavaScript", "TypeScript", "Kotlin cơ bản"],
  },
  {
    title: "Framework",
    items: ["Flutter", "React Native", "Bloc", "Provider"],
  },
  {
    title: "Công cụ",
    items: ["Firebase", "RESTful API", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Chất lượng Mobile",
    items: ["Clean Architecture", "Offline-first", "Caching", "Performance UI"],
  },
];

const project = {
  name: "Ứng dụng Quản lý Chi tiêu",
  functions: "Theo dõi thu chi, đặt hạn mức theo tháng, thống kê biểu đồ và xuất báo cáo.",
  architecture: "MVVM, local caching, RESTful API, Firebase Auth, luồng dữ liệu offline-first.",
  overview:
    "Đây là ứng dụng tài chính cá nhân giúp người dùng nắm được thói quen chi tiêu hằng ngày qua giao diện nhập liệu nhanh, biểu đồ rõ ràng và khả năng sử dụng ổn định khi kết nối mạng không tốt.",
  challenges: [
    {
      title: "Xử lý dữ liệu bất đồng bộ",
      text: "Tôi tách rõ UI, business logic và repository để quá trình gọi API, cập nhật cache và hiển thị trạng thái tải dữ liệu dễ kiểm soát hơn.",
    },
    {
      title: "Trải nghiệm offline-first",
      text: "Ứng dụng ưu tiên đọc dữ liệu cục bộ trước, sau đó đồng bộ với dịch vụ từ xa khi có mạng, giúp giảm màn hình trống và tăng cảm giác phản hồi nhanh.",
    },
    {
      title: "Giao diện mobile mượt mà",
      text: "Các widget được tái sử dụng, vùng rebuild được giới hạn hợp lý và animation được dùng vừa đủ để danh sách giao dịch vẫn mượt khi dữ liệu tăng lên.",
    },
  ],
};

const aboutText =
  "Tôi chọn lập trình Mobile vì ứng dụng trên điện thoại là sản phẩm phần mềm rất gần với đời sống hằng ngày của người dùng. Một ứng dụng tốt không chỉ cần chạy đúng, mà còn phải nhanh, dễ hiểu, ổn định và tạo cảm giác tin cậy. Triết lý viết code của tôi là giữ mọi thứ rõ ràng: kiến trúc dễ bảo trì, state management có kiểm soát, luồng API dễ theo dõi và giao diện đặt trải nghiệm người dùng lên đầu. Khi xây dựng một màn hình Flutter, kết nối Firebase, xử lý RESTful API hay chuẩn bị repo trên GitHub, tôi luôn nghĩ đến ba câu hỏi: người dùng có thao tác dễ không, lập trình viên khác có bảo trì được không, và sản phẩm này có đủ chỉn chu để demo thực tế không.";

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
        y: 70,
        rotate: -6,
        scale: 0.86,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.16,
      });

      gsap.to(".aura-one", {
        x: 82,
        y: -48,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".aura-two", {
        x: -72,
        y: 54,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".image-lift").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 0.84, opacity: 0.45, filter: "brightness(0.95) contrast(0.92) saturate(0.72)" },
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
      <nav className="nav-shell" aria-label="Điều hướng chính">
        <a className="brand-mark" href="#home" aria-label="Về đầu trang">
          DT
        </a>
        <div className="nav-center">
          <a href="#home">Trang chủ</a>
          <a href="#projects">Dự án</a>
          <a href="#about">Giới thiệu</a>
          <a href="#contact">Liên hệ</a>
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
              Xem case study
            </a>
            <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
              Xem GitHub
            </a>
          </div>
          <div className="headline-options" aria-label="Hai phiên bản định vị cá nhân">
            {headlineOptions.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="phone-stage image-lift" aria-label="Khung xem trước ứng dụng mobile">
          <div className="phone-frame">
            <div className="phone-notch" />
            <img src="https://picsum.photos/seed/mobile-app-showcase-vietnam/820/1420" alt="Mockup giao diện ứng dụng mobile" />
            <div className="phone-overlay">
              <span>{profile.name}</span>
              <strong>Mobile app có kiến trúc sạch, giao diện mượt và luồng dữ liệu rõ ràng.</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="stack-section">
        <div className="section-heading">
          <h2>
            Tổng quan <span className="inline-media" /> Tech Stack.
          </h2>
          <p>
            Các công nghệ nên được nhóm theo vai trò: Ngôn ngữ, Framework, Công cụ và Chất lượng Mobile.
            Cách trình bày này giúp nhà tuyển dụng quét nhanh năng lực thay vì nhìn một danh sách rời rạc.
          </p>
        </div>

        <div className="bento-grid">
          <article className="bento-card bento-main">
            <div className="bento-image">
              <img className="image-lift" src="https://picsum.photos/seed/mobile-clean-architecture/1400/980" alt="Không gian lập trình mobile" />
            </div>
            <div>
              <span>Định hướng chính</span>
              <h3>Phát triển ứng dụng cross-platform có cấu trúc sẵn sàng mở rộng.</h3>
              <p>
                Flutter và React Native giúp tôi xây dựng trải nghiệm mobile nhanh, đồng bộ và dễ phát triển
                tiếp mà vẫn giữ được tính rõ ràng của kiến trúc.
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
          <h2>Case Study Mobile Nổi Bật</h2>
          <p>
            Một repo GitHub sẽ thuyết phục hơn khi được kể như một câu chuyện sản phẩm: ứng dụng giải quyết
            điều gì, bài toán kỹ thuật nằm ở đâu và mã nguồn chứng minh năng lực như thế nào.
          </p>
        </div>

        <div className="case-study">
          <div className="case-media image-lift">
            <img src="https://picsum.photos/seed/expense-tracker-mobile-vn/900/1300" alt="Mockup ứng dụng quản lý chi tiêu" />
            <p>Gợi ý: đặt một ảnh GIF ngắn tại đây để thể hiện thao tác nhập chi tiêu, cập nhật biểu đồ và xuất báo cáo.</p>
          </div>
          <div className="case-copy">
            <span>{project.architecture}</span>
            <h3>{project.name}</h3>
            <p>{project.overview}</p>
            <dl>
              <div>
                <dt>Chức năng chính</dt>
                <dd>{project.functions}</dd>
              </div>
              <div>
                <dt>Kiến trúc và thư viện</dt>
                <dd>{project.architecture}</dd>
              </div>
            </dl>
            <div className="case-actions">
              <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
                Xem code trên GitHub
              </a>
              <a className="button button-secondary" href="#contact">
                Trao đổi demo
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

      <section className="marquee-section" aria-label="Kỹ năng lập trình mobile">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-layout">
          <div>
            <p className="section-kicker">Giới thiệu</p>
            <h2>Vì sao tôi chọn lập trình Mobile.</h2>
          </div>
          <p className="about-story">{aboutText}</p>
        </div>

        <div className="proof-card">
          <div className="avatar-stack">
            <img src="https://picsum.photos/seed/mobile-lead-vietnam/240/240" alt="Chân dung người đánh giá" />
            <img src="https://picsum.photos/seed/recruiter-mobile-vietnam/240/240" alt="Chân dung nhà tuyển dụng" />
            <img src="https://picsum.photos/seed/product-mobile-vietnam/240/240" alt="Chân dung đồng đội" />
          </div>
          <blockquote>
            Gợi ý tăng độ tin cậy: đặt lời nhận xét ngắn từ mentor, đồng đội hoặc leader tại đây, đồng thời
            nhúng GitHub Contribution Graph để thể hiện sự đều đặn trong quá trình học và xây dựng dự án.
          </blockquote>
        </div>
      </section>

      <footer id="contact" className="footer-section">
        <div>
          <p className="footer-kicker">Liên hệ</p>
          <h2>Bạn đang tìm một lập trình viên Mobile có thể xây, hoàn thiện và triển khai sản phẩm?</h2>
          <p>
            Tôi sẵn sàng trao đổi về cơ hội thực tập, cộng tác dự án hoặc các ý tưởng ứng dụng mobile.
            Hãy liên hệ qua email hoặc GitHub để cùng biến một ý tưởng tốt thành trải nghiệm di động chỉn chu.
          </p>
        </div>
        <div className="footer-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
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
