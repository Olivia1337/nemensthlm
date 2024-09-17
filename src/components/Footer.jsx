import React, { useEffect } from "react";

import logo1 from "../assets/images/alice.png";
import logo2 from "../assets/images/flx.png";
import logo3 from "../assets/images/mentimeter.png";
import logo4 from "../assets/images/mn.png";
import logo5 from "../assets/images/NOK.png";
import logo6 from "../assets/images/pl.png";
import logo7 from "../assets/images/podme.png";
import logo8 from "../assets/images/ssf.png";
import logo9 from "../assets/images/svt.png";
import logo10 from "../assets/images/systembolaget.png";
import logo11 from "../assets/images/wwf.png";

const Footer = () => {
  useEffect(() => {
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <footer
      className="scroller"
      data-direction="right"
      data-speed="slow"
      aria-label="Footer with scrolling logos"
    >
      <div className="scroller__inner">
        <img src={logo1} alt="Alice logo" aria-label="Alice logo" />
        <img src={logo2} alt="FLX logo" aria-label="FLX logo" />
        <img src={logo5} alt="NOK logo" aria-label="NOK logo" />
        <img src={logo3} alt="Mentimeter logo" aria-label="Mentimeter logo" />
        <img src={logo6} alt="PL logo" aria-label="PL logo" />
        <img src={logo4} alt="MN logo" aria-label="MN logo" />
        <img src={logo7} alt="Podme logo" aria-label="Podme logo" />
        <img src={logo8} alt="SSF logo" aria-label="SSF logo" />
        <img src={logo9} alt="SVT logo" aria-label="SVT logo" />
        <img
          src={logo10}
          alt="Systembolaget logo"
          aria-label="Systembolaget logo"
        />
        <img src={logo11} alt="WWF logo" aria-label="WWF logo" />
      </div>
    </footer>
  );
};

export default Footer;
