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
        <p className="text-lg  mb-4">
          Getting Nemen ready <br /> {progress}%
        </p>

        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-400 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
