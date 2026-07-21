/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from "react";
import {
  Mic,
  Heart,
  ShoppingBag,
  Bug,
  Camera,
  Headphones,
  Monitor,
  Download,
  ChevronDown,
  ImageIcon,
  Sparkles,
  BarChart2,
} from "lucide-react";
import { PostStack } from "./components/PostStack";

// ── Hệ màu dịu nhẹ ──
// BG chính : #EFF6FF  (Xanh nhạt dịu)
// Card tint : #DBEAFE  (Xanh pastel)
// Accent    : #3B82F6  (Xanh dương dịu)
// Soft Blue : #60A5FA  (Xanh dương nhạt)

// ----- FAQ Item -----
const faqList = [
  {
    question: "Social Sense tương thích với thiết bị nào?",
    answer: "Social Sense hiện tại tối ưu tốt nhất cho hệ điều hành Android (hỗ trợ Android 8.0 trở lên). Bạn có thể tải trực tiếp bản thử nghiệm APK về thiết bị để cài đặt ngay."
  },
  {
    question: "Làm thế nào để cá nhân hoá AI?",
    answer: "Bạn chỉ cần cung cấp các bài viết mẫu hoặc lựa chọn giọng văn mong muốn (hài hước, chuyên nghiệp, truyền cảm hứng...). AI sẽ tự học và tinh chỉnh phong cách viết đúng theo thương hiệu của bạn."
  },
  {
    question: "Dữ liệu của tôi có bảo mật không?",
    answer: "Tuyệt đối an toàn. Tất cả dữ liệu bài viết, ý tưởng và thông tin cá nhân của bạn đều được mã hóa theo tiêu chuẩn bảo mật cao và không chia sẻ cho bên thứ ba."
  },
  {
    question: "Tôi có thể dùng thử miễn phí không?",
    answer: "Hoàn toàn miễn phí! Bạn có thể tải tệp APK và trải nghiệm các tính năng cốt lõi của Social Sense mà không cần đăng ký thẻ thanh toán."
  }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300" style={{ border: "1px solid #BFDBFE" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full min-h-[50px] flex items-center justify-between px-5 text-left py-3"
      >
        <span className="text-[13px] font-semibold text-slate-700 leading-snug pr-2">{question}</span>
        <ChevronDown
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-blue-600" : "text-slate-400"}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 text-[11.5px] text-slate-500 leading-relaxed border-t border-blue-50 bg-blue-50/30">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const registrationRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [stickmanReady, setStickmanReady] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStickmanReady(true), 120);
    return () => { clearTimeout(t1); };
  }, []);

  const scrollToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const focusRegistration = () => {
    scrollToSection("contact");
    window.setTimeout(() => registrationRef.current?.focus(), 450);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) {
      alert(`Cảm ơn bạn đã đăng ký với email: ${email}`);
      setEmail("");
      registrationRef.current?.blur();
    }
  };

  return (
    <div
      className="min-h-screen font-sans text-black selection:bg-blue-300 selection:text-white flex flex-col w-full relative overflow-x-hidden"
      style={{ background: "#EFF6FF" }}
    >

      {/* ══════════ NAV ══════════ */}
      <div className="sticky top-4 z-50 px-4 mt-4 w-full max-w-[480px] md:max-w-4xl lg:max-w-6xl mx-auto">
        <nav className="w-full h-12 md:h-14 bg-slate-500/60 backdrop-blur-md border border-white/20 rounded-[20px] md:rounded-full flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Social Sense" className="h-7 md:h-8 w-auto object-contain" />
          </div>
          <div className="flex items-center gap-3 md:gap-8">
            {[
              { label: "Về chúng tôi", target: "about" },
              { label: "Bài viết", target: "posts" },
              { label: "F&Q", target: "faq" },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-white text-xs md:text-sm font-medium tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap px-2 py-1.5"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* ══════════ HERO ══════════ */}
      <section
        id="about"
        className="pt-6 md:pt-12 pb-8 flex flex-col w-full max-w-[480px] md:max-w-4xl lg:max-w-6xl mx-auto relative z-10 px-4 md:px-8"
        style={{ background: "#EFF6FF" }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-8">

          {/* Hero Left Content */}
          <div className="md:col-span-7 flex flex-col items-start z-20">
            <div className="mb-4 hidden md:block">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-600 border border-blue-200">
                🚀 Trợ lý AI sáng tạo nội dung 2026
              </span>
            </div>

            <h1 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-black leading-[1.15] tracking-tight text-slate-900 mb-6">
              Trợ lí tí hon <br />
              <span className="text-blue-600">cho các nhà sáng tạo</span>
            </h1>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8 hidden md:block max-w-lg">
              Tự động hóa gợi ý nội dung, tối ưu hóa ý tưởng và theo dõi các chỉ số tương tác quan trọng nhất dành riêng cho cá nhân bạn.
            </p>

            {/* Android CTA button */}
            <a
              href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-full max-w-[290px] h-14 px-5 rounded-2xl active:scale-95 transition-all duration-150 shadow-lg"
              style={{
                background: "#A4C639",
                boxShadow: "0 4px 16px rgba(164,198,57,0.35)",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 48 48" fill="#1A1A1A" className="shrink-0">
                <line x1="16" y1="9" x2="11" y2="3" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="32" y1="9" x2="37" y2="3" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M8 22 C8 13.16 15.16 6 24 6 C32.84 6 40 13.16 40 22 L8 22 Z"/>
                <circle cx="17.5" cy="17" r="2" fill="#A4C639"/>
                <circle cx="30.5" cy="17" r="2" fill="#A4C639"/>
                <rect x="8" y="23" width="32" height="18" rx="3"/>
                <rect x="1" y="23" width="6" height="14" rx="3"/>
                <rect x="41" y="23" width="6" height="14" rx="3"/>
                <rect x="12" y="40" width="8" height="7" rx="3"/>
                <rect x="28" y="40" width="8" height="7" rx="3"/>
              </svg>

              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-semibold text-slate-800/70">Tải về cho Android</span>
                <span className="text-[14px] font-bold tracking-tight text-[#1A1A1A]">Dùng thử miễn phí</span>
              </span>
            </a>
          </div>

          {/* Hero Right: Stickman Container */}
          <div className="md:col-span-5 relative w-full h-[300px] md:h-[420px] flex justify-center items-center overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
              <img
                src="/stickman.png"
                alt="Social Sense Stickman"
                className={stickmanReady ? "stickman-animate" : ""}
                style={{
                  position: "absolute",
                  width: "900px",
                  maxWidth: "none",
                  height: "auto",
                  top: "-210px",
                  left: "-250px",
                  opacity: stickmanReady ? undefined : 0,
                  transform: stickmanReady ? undefined : "translateX(500px)",
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.10))",
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ CORE BELIEFS ══════════ */}
      <section className="py-10 md:py-16 flex flex-col items-center w-full z-10" style={{ background: "#EFF6FF" }}>
        <div
          className="relative w-full max-w-[420px] md:max-w-[480px]"
          style={{ aspectRatio: "1 / 1" }}
        >
          {/* 8 icons */}
          {[
            { Icon: Mic,         pos: { left: "4%",  top: "43%",   transform: "translateY(-50%)" }, size: "13%" },
            { Icon: Heart,       pos: { left: "20%", top: "13%"  },                                 size: "15%" },
            { Icon: ShoppingBag, pos: { right:"20%", top: "10%"  },                                 size: "15%" },
            { Icon: Bug,         pos: { right:"4%",  top: "30%"  },                                 size: "13%" },
            { Icon: Download,    pos: { right:"5%",  top: "57%"  },                                 size: "13%" },
            { Icon: Monitor,     pos: { right:"20%", bottom:"9%" },                                 size: "16%" },
            { Icon: Headphones,  pos: { left: "20%", bottom:"9%" },                                 size: "16%" },
            { Icon: Camera,      pos: { left: "4%",  top: "57%"  },                                 size: "13%" },
          ].map(({ Icon, pos, size }, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center rounded-full transition-transform hover:scale-110"
              style={{
                width: size, aspectRatio: "1/1", ...pos,
                background: "#3B82F6",
                boxShadow: "0 4px 12px rgba(59,130,246,0.25)",
              }}
            >
              <Icon className="text-white" style={{ width: "45%", height: "45%" }} />
            </div>
          ))}

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
            <p className="text-[12px] md:text-[14px] font-semibold mb-2" style={{ color: "#3B82F6" }}>Chúng tôi tin rằng</p>
            <h2 className="text-[22px] md:text-[28px] font-extrabold leading-[1.25] text-slate-800">
              mỗi ý tưởng đều xứng đáng
              <br />được bắt đầu
            </h2>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="flex flex-col items-center w-full z-10 py-8 md:py-16" style={{ background: "#EFF6FF" }}>
        {/* Badge */}
        <div className="mb-8 md:mb-12 px-6 py-2 rounded-full" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
          <p className="text-[11px] md:text-[12px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>SOCIAL SENSE CÓ NHỮNG GÌ?</p>
        </div>

        {/* Cards wrapper */}
        <div className="w-full max-w-[480px] md:max-w-4xl lg:max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

            {/* Feature 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #DBEAFE" }}>
              <div className="p-6 flex md:flex-col gap-4 items-center md:items-start text-left">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#60A5FA,#3B82F6)" }}>
                  <ImageIcon className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-bold text-slate-800 mb-1.5">Không lo bế tắc</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">công cụ gợi ý caption, tạo hình ảnh bài đăng theo ý muốn của bạn</p>
                </div>
              </div>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#60A5FA,#93C5FD)" }} />
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #DBEAFE" }}>
              <div className="p-6 flex md:flex-col gap-4 items-center md:items-start text-left">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}>
                  <BarChart2 className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-bold text-slate-800 mb-1.5">Hỗ trợ qua các con số</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">báo cáo số liệu hữu ích, giúp bạn hiểu nền tảng của mình</p>
                </div>
              </div>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)" }} />
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ border: "1px solid #DBEAFE" }}>
              <div className="p-6 flex md:flex-col gap-4 items-center md:items-start text-left">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#93C5FD,#60A5FA)" }}>
                  <Sparkles className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[17px] md:text-[18px] font-bold text-slate-800 mb-1.5">Xây dựng phong cách mình muốn</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed">cá nhân hoá AI theo người dùng</p>
                </div>
              </div>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#93C5FD,#3B82F6)" }} />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ POSTS ══════════ */}
      <section id="posts" className="pt-10 pb-16 flex flex-col items-center w-full z-10 relative overflow-hidden" style={{ background: "#DBEAFE" }}>
        <div className="bg-white px-6 py-2 rounded-full mb-10" style={{ border: "1px solid #BFDBFE" }}>
          <p className="text-[11px] md:text-[12px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>CÁC BÀI VIẾT MỚI</p>
        </div>
        <div className="w-full max-w-[480px] md:max-w-4xl mx-auto flex justify-center">
          <PostStack />
        </div>
      </section>

      {/* ══════════ FAQ ══════════ */}
      <section id="faq" className="pt-12 pb-16 flex flex-col items-center w-full z-10 px-4 md:px-8" style={{ background: "#EFF6FF" }}>
        <div className="px-6 py-2 rounded-full mb-8" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
          <p className="text-[11px] md:text-[12px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>CÁC CÂU HỎI THƯỜNG GẶP</p>
        </div>
        <div className="w-full max-w-[480px] md:max-w-3xl rounded-3xl p-4 md:p-6 space-y-3" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
          {faqList.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <section id="contact" className="pt-12 pb-10 px-6 md:px-12 text-white w-full z-10" style={{ background: "#3B82F6" }}>
        <div className="w-full max-w-[480px] md:max-w-4xl lg:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">

            {/* Footer Left: Brand & Description */}
            <div className="md:col-span-5 flex flex-col items-start">
              <img src="/logo.png" alt="Social Sense" className="h-9 w-auto mb-4 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }} />
              <p className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Công cụ hỗ trợ các nhà sáng tạo nội dung tạo bài viết, phân tích chỉ số và theo dõi trend cơ bản hiệu quả.
              </p>
            </div>

            {/* Footer Right: Contact & Subscription */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <h3 className="text-sm md:text-base font-bold mb-2 text-white">Liên hệ với chúng tôi</h3>
                <div className="flex h-11 rounded-full overflow-hidden shadow-sm max-w-md">
                  <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "rgba(255,255,255,0.22)", color: "white" }}>
                    Gmail
                  </div>
                  <div className="flex-1 bg-white flex items-center px-4">
                    <a href="mailto:socialsense@gmail.com" className="text-xs md:text-sm font-semibold" style={{ color: "#2563EB" }}>
                      socialsense@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm md:text-base font-bold mb-2 text-white">Hoặc đăng kí để tải bản thử nghiệm</h3>
                <form onSubmit={handleSubmit} className="flex h-11 rounded-full overflow-hidden shadow-sm max-w-md">
                  <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "rgba(255,255,255,0.22)", color: "white" }}>
                    Gmail
                  </div>
                  <div className="flex-1 bg-white flex items-center px-4">
                    <input
                      ref={registrationRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email của bạn"
                      required
                      className="w-full outline-none bg-transparent text-xs md:text-sm text-slate-600 placeholder-slate-400"
                    />
                  </div>
                  <button type="submit" className="hidden">Submit</button>
                </form>
              </div>
            </div>

          </div>

          <p className="text-[10px] md:text-xs pt-8 border-t border-white/20 text-center font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
            © 2026 SocialSense. Bảo lưu mọi quyền.
          </p>
        </div>
      </section>

    </div>

  );
}

