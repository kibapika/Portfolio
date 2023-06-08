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
      className="flex flex-col justify-center items-start w-[70vw] max-[500px]:w-[65%] max-[500px]:items-center max-[500px]:mt-[15rem]"
    >
      <h1
        className="text-[#FCA311] tracking-wide pb-2 text-[4rem] max-[500px]:text-[3rem]"
        style={{ fontFamily: "Share Tech Mono" }}
      >
        Contact
      </h1>
      <p
        className="text-[#C9ADA7] tracking-widest pb-2 text-[1rem] max-[500px]:text-[0.75rem] max-[500px]:pb-4 max-[500px]:text-center"
        style={{ fontFamily: "Roboto" }}
      >
        Get in touch or shoot me an email directly on evali3101@gmail.com
      </p>
      <form
        action="mailto:evali3101@gmail.com"
        method="get"
        enctype="text/plain"
        className="flex flex-col justify-center items-start max-[500px]:items-center"
      >
        <input 
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-[38rem] rounded-md p-2 mt-2 max-[500px]:w-[120%]"/>
        <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="w-[38rem] rounded-md p-2 mt-4 max-[500px]:w-[120%]"/>
        <textarea 
        name="comments"
        rows="8"
        // cols="68"
        placeholder="Message"
        className="w-[38rem] rounded-md p-2 mt-4 max-[500px]:w-[120%]"/>
        <div 
        className="flex flex-row justify-between items-center w-[38rem] mt-4 max-[500px]:w-[120%]"
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
