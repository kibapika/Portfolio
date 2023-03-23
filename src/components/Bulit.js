import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Built = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="built w-[70vw]"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="2600"
      data-aos-offset="0"
    >
      <a
        href="https://github.com/kibapika/Portfolio"
        className="text-center cursor-point text-[#C9ADA7] hover:text-[#FCA311] hover:duration-500"
        style={{ fontSize: "17px", fontFamily: "Share Tech Mono", writingMode: "vertical-rl", textOrientation: "sideways" }}
      >
        Designed & Built by Eva Li
      </a>
    </div>
  );
};

export default Built;
