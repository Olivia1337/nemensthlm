import React, { useState, useEffect } from "react";

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center min-h-screen bg-stone-900">
      <div className="text-center text-white">
        {/* NEMEN Text with fill effect */}
        <div className="relative w-full">
          <div className="text-[8rem] font-header font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-400 ">
            NEMEN
          </div>

          {/* Fill effect behind the text */}
          <div
            className="absolute top-0 left-0 text-[8rem] font-bold bg-orange-400 text-orange-400 overflow-hidden mix-blend-difference"
            style={{ width: `${progress}%` }}
          >
            NEMEN
          </div>
        </div>{" "}
        <p className="text-lg mb-4 font-text">{progress}%</p>
      </div>
    </div>
  );
}

export default Loading;
