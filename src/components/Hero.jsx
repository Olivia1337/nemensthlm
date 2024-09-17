import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bgVideo from "../assets/images/herobg.mov";

function Hero() {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <section
      className="sticky h-screen overflow-hidden bg-black"
      ref={container}
      aria-label="Hero section"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        aria-label="Background video showcasing NEMEN production company"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60"
        aria-label="Overlay"
      ></div>

      <motion.div
        style={{ y }}
        className="relative h-screen flex flex-col items-center justify-center z-10"
        aria-label="Main content"
      >
        <h1
          className="text-[8em] md:text-[10em] text-white font-header text-stone-200"
          aria-label="NEMEN"
        >
          NEMEN
        </h1>
        <p
          className="text-[1.3em] md:text-[2em] text-white font-text text-stone-200"
          aria-label="Description"
        >
          Production company based in Stockholm
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
{
  /* Dark Overlay */
}
