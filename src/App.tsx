/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { 
  Lightbulb, 
  BarChart3, 
  Wand2, 
  Mail,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Smartphone,
  Mic,
  MapPin,
  ShoppingBag,
  Bug,
  Camera,
  Headphones,
  Wine,
  Anchor
} from "lucide-react";
import { PostStack } from "./components/PostStack";

export default function App() {
  const registrationRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");

  const scrollToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
    <div className="min-h-screen bg-[#d9d9d9] font-sans text-black selection:bg-gray-400 selection:text-white flex flex-col w-full max-w-[480px] mx-auto relative shadow-2xl">
      
      {/* Navigation */}
      <div className="sticky top-6 z-50 px-6 mt-6">
        <nav className="w-full h-14 bg-gray-500/70 backdrop-blur-md border border-gray-400/30 rounded-[20px] flex items-center justify-around px-4 shadow-sm">
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

      {/* Hero Section */}
      <section id="about" className="pt-10 flex flex-col relative overflow-hidden bg-[#d9d9d9] z-10">
        <div className="px-6 mb-6">
          <img src="/rectangle-29.png" alt="Social Sense" className="w-[180px] h-auto object-contain" />
        </div>
        
        <div className="px-6 w-2/3 z-20">
          <h1 className="text-[38px] font-bold leading-[1.1] tracking-tight text-black">
            Trợ lí tí hon <br/>cho các nhà<br/>sáng tạo
          </h1>
        </div>

        {/* Stickman with Slide-in Animation */}
        <img src="/untitled-30-202607141232-57245-1.png" alt="Trợ lí" className="absolute right-[-20px] top-[100px] w-[260px] h-auto z-30 object-contain drop-shadow-md" />

        {/* Bottom half of hero (White box) */}
        <div className="bg-white w-full h-[200px] mt-24 relative z-20 px-6 pt-10 rounded-t-[30px]">
          <button 
            onClick={focusRegistration}
            className="w-full max-w-[280px] bg-[#d9d9d9] text-black h-14 rounded-2xl font-bold text-base shadow-sm hover:opacity-90 transition-opacity"
          >
            Đăng ký dùng thử ngay
          </button>
          <p className="text-[#f90c0c] text-[10px] font-medium mt-3">
            *Hiện tại chỉ tương thích với android
          </p>
        </div>
      </section>

      {/* Core Beliefs Section */}
      <section className="bg-[#d9d9d9] py-16 relative flex flex-col items-center justify-center overflow-hidden z-10 min-h-[400px]">
        <div className="w-[320px] h-[320px] relative flex items-center justify-center">
          {/* Circular Icons */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <MapPin className="w-6 h-6" />
          </div>
          <div className="absolute top-[20px] right-[40px] w-14 h-14 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <ShoppingBag className="w-6 h-6" />
          </div>
          <div className="absolute top-[80px] right-[-10px] w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <Bug className="w-5 h-5" />
          </div>
          <div className="absolute bottom-[90px] right-[-10px] w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <Anchor className="w-5 h-5" />
          </div>
          <div className="absolute bottom-[20px] right-[40px] w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <Wine className="w-7 h-7" />
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <Headphones className="w-7 h-7" />
          </div>
          <div className="absolute bottom-[20px] left-[40px] w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <Camera className="w-5 h-5" />
          </div>
          <div className="absolute top-[80px] left-[-10px] w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
             <Mic className="w-5 h-5" />
          </div>

          <div className="text-center relative z-20 flex flex-col items-center justify-center mt-4 bg-white/40 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/60 shadow-sm mx-8">
             <p className="text-[13px] font-medium text-gray-700 text-center">Chúng tôi tin rằng</p>
             <h2 className="text-[24px] font-bold leading-[1.2] mt-1 text-center">
               mỗi ý tưởng đều xứng đáng<br/>được bắt đầu
             </h2>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white pt-10 pb-16 flex flex-col items-center w-full z-10">
        <div className="bg-[#d9d9d9] px-6 py-2 rounded-full mb-12">
          <p className="text-[11px] font-medium text-black">SOCIAL SENSE CÓ NHỮNG GÌ?</p>
        </div>

        {/* Feature 1 */}
        <div className="w-full px-8 flex justify-between items-center mb-16">
          <div className="w-[55%]">
            <h3 className="text-[22px] font-bold leading-tight mb-2">Không lo bế tắc</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              công cụ gợi ý caption, tạo hình ảnh bài đăng theo ý muốn của bạn
            </p>
          </div>
          <div className="w-[100px] h-[100px] border-2 border-black rounded-lg flex flex-col justify-center gap-3 p-3 relative bg-white">
             <div className="w-full h-2 bg-gray-200 rounded-full"></div>
             <div className="w-full h-2 bg-gray-200 rounded-full"></div>
             <div className="w-2/3 h-2 bg-gray-200 rounded-full"></div>
             <div className="absolute -top-4 -left-4 w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center overflow-hidden relative">
                   <div className="absolute bottom-0 left-0 w-4 h-4 bg-black rounded-tr-full"></div>
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-tl-full"></div>
                   <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="w-full px-8 flex justify-between items-center bg-[#d9d9d9] pt-16 pb-16">
          <div className="w-[80px] h-[80px] bg-[#2a2a2a] rounded-lg flex items-center justify-center relative">
             <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 30 L15 20 L25 25 L35 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
          <div className="w-[60%] text-right">
            <h3 className="text-[22px] font-bold leading-tight mb-2">Hỗ trợ qua các con số</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              các báo cáo số liệu hữu ích, đơn giản giúp bạn hiểu nền tảng của mình
            </p>
          </div>
        </div>

        {/* Feature 3: Xây dựng phong cách mình muốn */}
        <div className="w-full px-8 flex justify-between items-center bg-white pt-16 pb-12 relative z-20">
          <div className="w-[55%]">
            <h3 className="text-[22px] font-bold leading-tight mb-2">Xây dựng phong cách mình muốn</h3>
            <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
              cá nhân hoá AI theo người dùng
            </p>
          </div>
          <div className="relative w-[110px] h-[110px] flex items-center justify-center">
            <img src="/rectangle-26.png" alt="Profile Style" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Posts Section with Flip Effect */}
      <section id="posts" className="bg-[#d9d9d9] pt-10 pb-16 flex flex-col items-center w-full z-10 relative overflow-hidden">
        <div className="bg-white px-6 py-2 rounded-full mb-12">
          <p className="text-[11px] font-medium text-black tracking-wide">CÁC BÀI VIẾT MỚI</p>
        </div>
        
        <PostStack />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white pt-10 pb-16 flex flex-col items-center w-full z-10 px-6">
        <div className="bg-[#d9d9d9] px-6 py-2 rounded-full mb-8">
          <p className="text-[11px] font-medium text-black">CÁC CÂU HỎI THƯỜNG GẶP</p>
        </div>

        <div className="w-full bg-[#d9d9d9] rounded-[40px] p-6 space-y-4">
          {[
            "Social Sense tương thích với thiết bị nào?",
            "Làm thế nào để cá nhân hoá AI?",
            "Dữ liệu của tôi có bảo mật không?",
            "Tôi có thể dùng thử miễn phí không?"
          ].map((q, i) => (
             <div key={i} className="w-full h-12 bg-white rounded-full flex items-center px-6">
                <span className="text-xs font-medium text-gray-500 line-clamp-1">{q}</span>
             </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-500 pt-12 pb-8 px-6 text-white w-full z-10">
        <div className="flex gap-4 items-start mb-10">
          <img src="/rectangle-29.png" alt="Social Sense" className="w-24 h-auto mt-1 opacity-90 object-contain" />
          <p className="text-[10px] text-gray-200 leading-relaxed flex-1">
            Công cụ hỗ trợ các nhà sáng tạo nội dung tạo bài viết, phân tích chỉ số và theo dõi trend cơ bản
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Liên hệ với chúng tôi</h3>
            <div className="flex h-11 rounded-full overflow-hidden">
               <div className="w-20 bg-gray-400 flex items-center justify-center text-xs font-bold text-black">
                 Gmail
               </div>
               <div className="flex-1 bg-white flex items-center px-4">
                 <a href="mailto:socialsense@gmail.com" className="text-gray-400 text-sm">socialsense@gmail.com</a>
               </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Hoặc đăng kí để tải bản thử nghiệm</h3>
            <form onSubmit={handleSubmit} className="flex h-11 rounded-full overflow-hidden">
               <div className="w-20 bg-gray-400 flex items-center justify-center text-xs font-bold text-black">
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
                   className="w-full outline-none bg-transparent text-gray-400 text-sm placeholder-gray-400"
                 />
               </div>
               <button type="submit" className="hidden">Submit</button>
            </form>
          </div>
        </div>

        <p className="text-[9px] text-gray-300 mt-16 text-center font-medium">
          © 2026 SocialSense. Bảo lưu mọi quyền.
        </p>
      </section>

    </div>
  );
}

