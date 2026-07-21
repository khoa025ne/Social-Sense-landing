import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const posts = [
  { id: 1, color: "bg-white", title: "KHÁM PHÁ CÁC TÍNH NĂNG MỚI", textColor: "text-black" },
  { id: 2, color: "bg-[#9a9a9a]", title: "CÁCH TẠO TREND 2026", textColor: "text-white" },
  { id: 3, color: "bg-[#7a7a7a]", title: "BÍ QUYẾT TĂNG TƯƠNG TÁC", textColor: "text-white" },
];

export const PostStack = () => {
  const [cards, setCards] = useState(posts);

  const flipCard = () => {
    setCards((prev) => {
      const newCards = [...prev];
      const topCard = newCards.shift();
      if (topCard) newCards.push(topCard);
      return newCards;
    });
  };

  return (
    <div className="relative w-full h-[360px] flex justify-center cursor-pointer perspective-1000" onClick={flipCard}>
      <AnimatePresence>
        {cards.map((card, index) => {
          const isTop = index === 0;
          const isMiddle = index === 1;
          const isBottom = index === 2;

          return (
            <motion.div
              key={card.id}
              layout
              initial={false}
              animate={{
                scale: 1,
                y: 0,
                x: isTop ? -30 : isMiddle ? 10 : 50,
                zIndex: 3 - index,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className={`absolute w-[260px] h-[340px] rounded-[16px] shadow-sm flex flex-col items-center justify-center p-8 ${card.color} ${isTop ? "border border-gray-200" : ""}`}
            >
              <h3 className={`text-2xl font-bold text-center ${card.textColor} tracking-tight ${!isTop ? "opacity-0" : ""}`}>
                {card.title}
              </h3>
              {isTop && (
                <div className="absolute bottom-6 right-6 text-black/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  Chạm để lật
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
