import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Lenis from "lenis";
import About from "../components/About";
import WheelScroll from "../components/WheelScroll";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const minimumLoadingTime = 2000;

    const timer = new Promise((resolve) =>
      setTimeout(resolve, minimumLoadingTime)
    );

    Promise.all([document.fonts.ready, timer]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

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
