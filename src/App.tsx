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

      {/* ════════════════════════════════════════════════════════════════
          MOBILE VIEW ONLY (< md): Keep exact original mobile layout untouched
         ════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden w-full max-w-[480px] mx-auto shadow-2xl relative" style={{ background: "#EFF6FF" }}>
        
        {/* NAV (Mobile) */}
        <div className="sticky top-4 z-50 px-4 mt-4">
          <nav className="w-full h-12 bg-slate-500/60 backdrop-blur-md border border-white/20 rounded-[20px] flex items-center justify-around px-4 shadow-sm">
            {[
              { label: "Về chúng tôi", target: "about" },
              { label: "Bài viết", target: "posts" },
              { label: "F&Q", target: "faq" },
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-white text-xs font-medium tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap px-2 py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* HERO (Mobile) */}
        <section id="about" className="pt-8 flex flex-col relative z-10" style={{ overflow: "hidden", background: "#EFF6FF" }}>
          <div className="px-6 mb-5">
            <img src="/logo.png" alt="Social Sense" className="h-10 w-auto object-contain" />
          </div>

          <div className="px-6 z-20" style={{ width: "60%" }}>
            <h1 className="text-[38px] font-bold leading-[1.1] tracking-tight text-black">
              Trợ lí tí hon <br />cho các nhà<br />sáng tạo
            </h1>
          </div>

          {/* Stickman (Mobile) */}
          <div style={{ position: "absolute", right: "-30px", top: "30px", width: "320px", height: "360px", overflow: "hidden", zIndex: 30, pointerEvents: "none" }}>
            <img
              src="/stickman.png"
              alt="Social Sense Stickman"
              className={stickmanReady ? "stickman-animate" : ""}
              style={{
                position: "absolute", width: "1000px", maxWidth: "none", height: "auto",
                top: "-230px", left: "-272px",
                opacity: stickmanReady ? undefined : 0,
                transform: stickmanReady ? undefined : "translateX(500px)",
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.10))",
              }}
            />
          </div>

          {/* White CTA card (Mobile) */}
          <div className="bg-white w-full relative px-6 pt-10 pb-8 rounded-t-[30px]" style={{ marginTop: "200px", zIndex: 20, boxShadow: "0 -2px 16px rgba(164,198,57,0.08)" }}>
            <a
              href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-full max-w-[290px] h-14 px-5 rounded-2xl active:scale-95 transition-all duration-150"
              style={{
                background: "#A4C639",
                boxShadow: "0 2px 12px rgba(164,198,57,0.30)",
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
                <span className="text-[10px] font-semibold" style={{ color: "rgba(0,0,0,0.55)" }}>Tải về cho Android</span>
                <span className="text-[14px] font-bold tracking-tight text-[#1A1A1A]">Dùng thử miễn phí</span>
              </span>
            </a>
          </div>
        </section>

        {/* CORE BELIEFS (Mobile) */}
        <section className="py-8 flex flex-col items-center z-10" style={{ background: "#EFF6FF" }}>
          <div className="relative w-full max-w-[420px]" style={{ aspectRatio: "1 / 1" }}>
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
              <div key={i} className="absolute flex items-center justify-center rounded-full" style={{ width: size, aspectRatio: "1/1", ...pos, background: "#3B82F6", boxShadow: "0 2px 8px rgba(59,130,246,0.25)" }}>
                <Icon className="text-white" style={{ width: "45%", height: "45%" }} />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
              <p className="text-[11px] font-semibold mb-1.5" style={{ color: "#3B82F6" }}>Chúng tôi tin rằng</p>
              <h2 className="text-[20px] font-bold leading-[1.25] text-slate-800">
                mỗi ý tưởng đều xứng đáng<br />được bắt đầu
              </h2>
            </div>
          </div>
        </section>

        {/* FEATURES (Mobile) */}
        <section className="flex flex-col items-center w-full z-10" style={{ background: "#EFF6FF" }}>
          <div className="mt-2 mb-8 px-5 py-2 rounded-full" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
            <p className="text-[10px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>SOCIAL SENSE CÓ NHỮNG GÌ?</p>
          </div>
          <div className="w-full space-y-3 px-4 pb-10">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBEAFE" }}>
              <div className="p-5 flex gap-4 items-center">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#60A5FA,#3B82F6)" }}>
                  <ImageIcon className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-800 mb-1">Không lo bế tắc</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">công cụ gợi ý caption, tạo hình ảnh bài đăng theo ý muốn của bạn</p>
                </div>
              </div>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#60A5FA,#93C5FD)" }} />
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBEAFE" }}>
              <div className="p-5 flex gap-4 items-center flex-row-reverse">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}>
                  <BarChart2 className="text-white w-7 h-7" />
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-[16px] font-bold text-slate-800 mb-1">Hỗ trợ qua các con số</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">báo cáo số liệu hữu ích, giúp bạn hiểu nền tảng của mình</p>
                </div>
              </div>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)" }} />
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBEAFE" }}>
              <div className="p-5 flex gap-4 items-center">
                <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#93C5FD,#60A5FA)" }}>
                  <Sparkles className="text-white w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-slate-800 mb-1">Xây dựng phong cách mình muốn</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">cá nhân hoá AI theo người dùng</p>
                </div>
              </div>
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg,#93C5FD,#3B82F6)" }} />
            </div>
          </div>
        </section>

        {/* POSTS (Mobile) */}
        <section id="posts" className="pt-8 pb-14 flex flex-col items-center w-full z-10 relative overflow-hidden" style={{ background: "#DBEAFE" }}>
          <div className="bg-white px-5 py-2 rounded-full mb-10" style={{ border: "1px solid #BFDBFE" }}>
            <p className="text-[10px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>CÁC BÀI VIẾT MỚI</p>
          </div>
          <PostStack />
        </section>

        {/* FAQ (Mobile) */}
        <section id="faq" className="pt-10 pb-12 flex flex-col items-center w-full z-10 px-5" style={{ background: "#EFF6FF" }}>
          <div className="px-5 py-2 rounded-full mb-8" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
            <p className="text-[10px] font-bold tracking-widest" style={{ color: "#3B82F6" }}>CÁC CÂU HỎI THƯỜNG GẶP</p>
          </div>
          <div className="w-full rounded-3xl p-4 space-y-3" style={{ background: "#DBEAFE", border: "1px solid #BFDBFE" }}>
            {faqList.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* FOOTER (Mobile) */}
        <section id="contact" className="pt-10 pb-8 px-6 text-white w-full z-10" style={{ background: "#3B82F6" }}>
          <div className="flex gap-4 items-start mb-8">
            <img src="/logo.png" alt="Social Sense" className="h-8 w-auto mt-1 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }} />
            <p className="text-[10px] leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.85)" }}>
              Công cụ hỗ trợ các nhà sáng tạo nội dung tạo bài viết, phân tích chỉ số và theo dõi trend cơ bản
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-base font-bold mb-2 text-white">Liên hệ với chúng tôi</h3>
              <div className="flex h-11 rounded-full overflow-hidden shadow-sm">
                <div className="w-20 flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "rgba(255,255,255,0.22)", color: "white" }}>
                  Gmail
                </div>
                <div className="flex-1 bg-white flex items-center px-4">
                  <a href="mailto:socialsense@gmail.com" className="text-sm font-semibold" style={{ color: "#2563EB" }}>
                    socialsense@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold mb-2 text-white">Hoặc đăng kí để tải bản thử nghiệm</h3>
              <form onSubmit={handleSubmit} className="flex h-11 rounded-full overflow-hidden shadow-sm">
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
                    className="w-full outline-none bg-transparent text-sm text-slate-600 placeholder-slate-400"
                  />
                </div>
                <button type="submit" className="hidden">Submit</button>
              </form>
            </div>
          </div>

          <p className="text-[9px] mt-14 text-center font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>
            © 2026 SocialSense. Bảo lưu mọi quyền.
          </p>
        </section>

      </div>


      {/* ════════════════════════════════════════════════════════════════
          DESKTOP VIEW ONLY (>= md): Brand-new Modern Desktop Landing Page
         ════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col w-full min-h-screen" style={{ background: "#EFF6FF" }}>
        
        {/* DESKTOP HEADER */}
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-blue-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Social Sense" className="h-10 w-auto object-contain" />
            </div>

            <div className="flex items-center gap-10">
              <button onClick={() => scrollToSection("about-desktop")} className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors">Về chúng tôi</button>
              <button onClick={() => scrollToSection("features-desktop")} className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors">Tính năng</button>
              <button onClick={() => scrollToSection("posts-desktop")} className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors">Bài viết</button>
              <button onClick={() => scrollToSection("faq-desktop")} className="text-slate-700 hover:text-blue-600 font-semibold text-sm transition-colors">F&Q</button>
            </div>

            <div>
              <a
                href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-slate-900 font-bold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
                style={{ background: "#A4C639" }}
              >
                <Download className="w-4 h-4 text-slate-900" />
                <span>Tải APK Android</span>
              </a>
            </div>
          </div>
        </header>

        {/* DESKTOP HERO */}
        <section id="about-desktop" className="pt-20 pb-24 px-8 max-w-7xl mx-auto w-full grid grid-cols-12 gap-12 items-center">
          <div className="col-span-7 flex flex-col items-start pr-6">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight mb-8">
              Trợ lí tí hon <br />
              <span className="text-blue-600">cho các nhà sáng tạo</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              Social Sense mang tới bộ công cụ AI thông minh hỗ trợ bạn lên ý tưởng, tự động tạo bài viết hấp dẫn, phân tích chỉ số truyền thông và nắm bắt sớm các xu hướng nóng nhất.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://drive.google.com/drive/folders/1Cyp88viSs6DUMPWnxFKvtknxyuWIaxMy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl text-slate-900 font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-95"
                style={{ background: "#A4C639" }}
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
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-xs font-semibold text-slate-800/70">Tải về cho Android</span>
                  <span className="text-base font-extrabold text-[#1A1A1A]">Dùng thử miễn phí</span>
                </div>
              </a>

              <button
                onClick={focusRegistration}
                className="px-7 py-4 rounded-2xl bg-white border border-blue-200 text-blue-600 font-bold text-base hover:bg-blue-50 transition-all shadow-sm"
              >
                Đăng ký trải nghiệm
              </button>
            </div>
          </div>

          {/* Desktop Stickman Showcase Frame */}
          <div className="col-span-5 relative w-full h-[460px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-sky-200/30 rounded-3xl filter blur-2xl -z-10" />
            <div className="w-full h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl p-6 relative overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full pointer-events-none">
                <img
                  src="/stickman.png"
                  alt="Social Sense Stickman"
                  className={stickmanReady ? "stickman-animate" : ""}
                  style={{
                    position: "absolute",
                    width: "950px",
                    maxWidth: "none",
                    height: "auto",
                    top: "-210px",
                    left: "-250px",
                    opacity: stickmanReady ? undefined : 0,
                    transform: stickmanReady ? undefined : "translateX(500px)",
                    filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.12))",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP CORE BELIEFS */}
        <section className="py-24 bg-gradient-to-b from-[#EFF6FF] via-[#DBEAFE]/40 to-[#EFF6FF]">
          <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
            <div className="relative w-full max-w-[500px]" style={{ aspectRatio: "1 / 1" }}>
              {[
                { Icon: Mic,         pos: { left: "4%",  top: "43%",   transform: "translateY(-50%)" }, size: "14%" },
                { Icon: Heart,       pos: { left: "20%", top: "12%"  },                                 size: "15%" },
                { Icon: ShoppingBag, pos: { right:"20%", top: "10%"  },                                 size: "15%" },
                { Icon: Bug,         pos: { right:"4%",  top: "30%"  },                                 size: "14%" },
                { Icon: Download,    pos: { right:"5%",  top: "57%"  },                                 size: "14%" },
                { Icon: Monitor,     pos: { right:"20%", bottom:"8%" },                                 size: "16%" },
                { Icon: Headphones,  pos: { left: "20%", bottom:"8%" },                                 size: "16%" },
                { Icon: Camera,      pos: { left: "4%",  top: "57%"  },                                 size: "14%" },
              ].map(({ Icon, pos, size }, i) => (
                <div
                  key={i}
                  className="absolute flex items-center justify-center rounded-full transition-transform hover:scale-125 duration-300 cursor-pointer shadow-lg"
                  style={{
                    width: size, aspectRatio: "1/1", ...pos,
                    background: "#3B82F6",
                    boxShadow: "0 6px 16px rgba(59,130,246,0.30)",
                  }}
                >
                  <Icon className="text-white" style={{ width: "48%", height: "48%" }} />
                </div>
              ))}

              <div className="absolute inset-0 flex flex-col items-center justify-center px-12 text-center">
                <p className="text-base font-bold mb-3 tracking-wide" style={{ color: "#3B82F6" }}>Chúng tôi tin rằng</p>
                <h2 className="text-3xl lg:text-4xl font-extrabold leading-snug text-slate-800">
                  mỗi ý tưởng đều xứng đáng<br />được bắt đầu
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* DESKTOP FEATURES */}
        <section id="features-desktop" className="py-24 px-8 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <span className="px-6 py-2.5 rounded-full text-sm font-extrabold tracking-widest bg-blue-100 text-blue-600 border border-blue-200 inline-block">
              SOCIAL SENSE CÓ NHỮNG GÌ?
            </span>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg,#60A5FA,#3B82F6)" }}>
                  <ImageIcon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Không lo bế tắc</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Công cụ gợi ý caption sáng tạo, xây dựng kịch bản bài đăng theo ý muốn của bạn.</p>
              </div>
              <div className="h-1.5 w-full rounded-full mt-8" style={{ background: "linear-gradient(90deg,#60A5FA,#93C5FD)" }} />
            </div>

            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg,#3B82F6,#2563EB)" }}>
                  <BarChart2 className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Hỗ trợ qua các con số</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Báo cáo số liệu hữu ích, giúp bạn hiểu sâu sắc nền tảng và khán giả của mình.</p>
              </div>
              <div className="h-1.5 w-full rounded-full mt-8" style={{ background: "linear-gradient(90deg,#3B82F6,#60A5FA)" }} />
            </div>

            <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 duration-300 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg,#93C5FD,#60A5FA)" }}>
                  <Sparkles className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">Xây dựng phong cách</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Cá nhân hoá AI theo từng người dùng để truyền tải đúng giọng văn độc bản.</p>
              </div>
              <div className="h-1.5 w-full rounded-full mt-8" style={{ background: "linear-gradient(90deg,#93C5FD,#3B82F6)" }} />
            </div>
          </div>
        </section>

        {/* DESKTOP POSTS */}
        <section id="posts-desktop" className="py-24 bg-blue-100/60 border-y border-blue-200/50">
          <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
            <span className="px-6 py-2.5 rounded-full text-sm font-extrabold tracking-widest bg-white text-blue-600 border border-blue-200 mb-14 shadow-sm">
              CÁC BÀI VIẾT MỚI
            </span>
            <div className="w-full max-w-4xl flex justify-center">
              <PostStack />
            </div>
          </div>
        </section>

        {/* DESKTOP FAQ */}
        <section id="faq-desktop" className="py-24 px-8 max-w-7xl mx-auto w-full flex flex-col items-center">
          <span className="px-6 py-2.5 rounded-full text-sm font-extrabold tracking-widest bg-blue-100 text-blue-600 border border-blue-200 mb-12">
            CÁC CÂU HỎI THƯỜNG GẶP
          </span>

          <div className="w-full max-w-4xl bg-blue-100/60 rounded-3xl p-8 border border-blue-200 space-y-4">
            {faqList.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* DESKTOP FOOTER */}
        <footer id="contact-desktop" className="bg-[#3B82F6] text-white pt-20 pb-12 px-8 mt-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-start pb-16 border-b border-white/20">
            <div className="col-span-5 pr-8">
              <img src="/logo.png" alt="Social Sense" className="h-11 w-auto mb-6 object-contain" style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }} />
              <p className="text-sm text-blue-50 leading-relaxed max-w-md">
                Social Sense - Công cụ hỗ trợ các nhà sáng tạo nội dung tự động tạo bài viết, phân tích chỉ số và theo dõi xu hướng hiệu quả nhất.
              </p>
            </div>

            <div className="col-span-7 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-base font-bold mb-4 text-white">Liên hệ với chúng tôi</h3>
                <div className="flex h-12 rounded-full overflow-hidden shadow-md">
                  <div className="w-24 flex items-center justify-center text-xs font-bold shrink-0 bg-white/20 text-white">
                    Gmail
                  </div>
                  <div className="flex-1 bg-white flex items-center px-5">
                    <a href="mailto:socialsense@gmail.com" className="text-sm font-bold text-blue-600 hover:underline">
                      socialsense@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold mb-4 text-white">Đăng ký bản thử nghiệm</h3>
                <form onSubmit={handleSubmit} className="flex h-12 rounded-full overflow-hidden shadow-md">
                  <div className="w-24 flex items-center justify-center text-xs font-bold shrink-0 bg-white/20 text-white">
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
                      className="w-full outline-none bg-transparent text-sm text-slate-700 placeholder-slate-400"
                    />
                  </div>
                  <button type="submit" className="hidden">Submit</button>
                </form>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto pt-8 flex items-center justify-between text-xs text-blue-100 font-medium">
            <p>© 2026 SocialSense. Bảo lưu mọi quyền.</p>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection("about-desktop")} className="hover:underline">Về chúng tôi</button>
              <button onClick={() => scrollToSection("features-desktop")} className="hover:underline">Tính năng</button>
              <button onClick={() => scrollToSection("faq-desktop")} className="hover:underline">Hỏi đáp</button>
            </div>
          </div>
        </footer>

      </div>

    </div>


  );
}

