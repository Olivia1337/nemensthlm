import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Lenis from "lenis";
import About from "../components/About";
import WheelScroll from "../components/WheelScroll";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <WheelScroll />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
