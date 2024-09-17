import React from "react";

function Contact() {
  return (
    <section
      className="sticky h-full overflow-hidden bg-stone-200 flex flex-col justify-center items-center pb-[5%]"
      aria-label="Contact section"
    >
      <h1 className="text-[5em] md:text-[10em] text-black font-header">
        Contact us
      </h1>
      <p className="text-[1.3em] md:text-[2em] font-text text-black text-center">
        And we'll get back to you as soon as we can!
      </p>
      <p className="text-[1.3em] md:text-[2em] font-text text-black">
        <strong> info@nemen.se</strong>
      </p>
      <div className="flex gap-10 mt-[3%] mx-5" aria-label="Contact team">
        <div
          className="flex flex-col"
          aria-label="Director and Editor contact information"
        >
          <p className="font-text text-[1.3em]">Director/Editor</p>
          <h2 className="font-text text-[1.3em] md:text-[2em]">
            Tomas Svensson
          </h2>
          <p className="font-text text-[1em] md:text-[1.3em]">
            +46 73 726 68 37
          </p>
        </div>
        <div aria-label="Producer and DoP contact information">
          <p className="font-text text-[1.3em]">Producer/DoP</p>
          <h2 className="font-text text-[1.3em] md:text-[2em]">Adam Bassari</h2>
          <p className="font-text text-[1em] md:text-[1.3em]">
            +46 70 013 03 90
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
