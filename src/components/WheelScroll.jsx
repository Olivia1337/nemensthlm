import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import BackgroundImage from "../assets/images/image.png";

function WheelScroll() {
  const Slide = (props) => {
    const direction = props.direction === "left" ? -1 : 1;

    const translateX = useTransform(
      props.progress,
      [0, 1],
      [150 * direction, -150 * direction]
    );

    return (
      <motion.div
        style={{ x: translateX, left: props.left }}
        className="relative flex whitespace-nowrap"
        aria-label={`The text "Cases" scrolling ${props.direction}`}
      >
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
      </motion.div>
    );
  };

  const Phrase = ({ src }) => {
    return (
      <div className="px-5 flex gap-5 items-center">
        <p className="text-[3em] font-text">Cases</p>
        <span
          className="relative h-[1rem] w-[1rem] rounded-full bg-black overflow-hidden"
          aria-label="Black dot"
        ></span>
      </div>
    );
  };

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section className="overflow-hidden bg-stone-200">
      <div ref={container} aria-label="Text container">
        <Slide
          src={BackgroundImage}
          direction={"left"}
          left={"0%"}
          progress={scrollYProgress}
        />
        <Slide
          src={BackgroundImage}
          direction={"right"}
          left={"0%"}
          progress={scrollYProgress}
        />
      </div>
    </section>
  );
}

export default WheelScroll;
