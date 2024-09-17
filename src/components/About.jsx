import React from "react";

function About() {
  return (
    <section
      className="bg-stone-200 h-[50vh] flex justify-center items-center"
      aria-label="About section"
    >
      <p
        className="text-center font-text w-[90%] md:w-[40%] text-[1.3em] md:text-[2em]"
        aria-label="About description"
      >
        Nemen's vision is to create vibrant stories that feel authentic. We
        tailor the production to match your brand and ensure the result
        highlights your vision. Our focus is to always work closely with our
        clients from pre-production to post-production.
      </p>
    </section>
  );
}

export default About;
