import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="500"
      data-aos-offset="0"
      className="flex flex-col justify-center items-start"
      style={{ width: "70vw" }}
    >
      <h1
        className="text-[#FCA311] tracking-wide pb-2"
        style={{ fontSize: "5vw", fontFamily: "Share Tech Mono" }}
      >
        Contact
      </h1>
      <p
        className="text-[#C9ADA7] tracking-widest pb-2"
        style={{ fontSize: "1.5vw", fontFamily: "Roboto" }}
      >
        Get in touch or shoot me an email directly on evali3101@gmail.com
      </p>
      <form
        action="mailto:evali3101@gmail.com"
        method="get"
        enctype="text/plain"
        className="flex flex-col justify-center items-start"
      >
        <input 
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-[38rem] rounded-md p-2 mt-2"/>
        <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="w-[38rem] rounded-md p-2 mt-4"/>
        <textarea 
        name="comments"
        rows="8"
        // cols="68"
        placeholder="Message"
        className="w-[38rem] rounded-md p-2 mt-4"/>
        <div 
        className="flex flex-row justify-between items-center w-[38rem] mt-4"
        style={{ fontSize: "17.5px", fontFamily: "Share Tech Mono" }}
        >
          <button 
          type="submit" 
          name="submit" 
          value="Send"
          className="text-[#FCA311] group border-2 border-[#FCA311] rounded-sm px-3 py-1.5 flex items-center cursor-point hover:bg-[#FCA311] hover:border-[#FCA311] hover:bg-opacity-20 hover:duration-300"
          >
            Say Hello
          </button>
          <button 
          type="reset" 
          name="reset" 
          value="Clear Form"
          className="text-[#FCA311] group border-2 border-[#FCA311] rounded-sm px-3 py-1.5 flex items-center cursor-point hover:bg-[#FCA311] hover:border-[#FCA311] hover:bg-opacity-20 hover:duration-300"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
