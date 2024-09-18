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

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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
