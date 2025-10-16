/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Nguyen Van Dat />";
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 1000);
      }
    }, 140); // chậm nhẹ để đọc rõ chữ hơn

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0a0a0a] text-gray-100 flex flex-col items-center justify-center transition-opacity duration-700 ${
        isDone ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Dòng chữ chính */}
      <div className="mb-8 text-4xl md:text-5xl font-mono font-bold flex items-center gap-1 tracking-wide">
        <span className="text-white drop-shadow-[0_0_8px_#3b82f6] transition-all duration-300">
          {text}
        </span>
        <span className="animate-blink text-blue-400 drop-shadow-[0_0_6px_#60a5fa]">
          |
        </span>
      </div>

      {/* Thanh loading */}
      <div className="w-[260px] h-[4px] bg-gray-800 rounded-full relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 w-[45%] h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-300 shadow-[0_0_20px_#3b82f6] animate-loading-bar" />
      </div>
    </div>
  );
};
