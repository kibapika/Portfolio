import React from "react";

const Footer = () => {
  return (
    <div 
    className="flex flex-col justify-center center py-4 mt-[10px]"
    style={{ width: "70vw" }}
    >
      <a
      href="https://github.com/kibapika/Portfolio"
      className="text-center cursor-point text-[#C9ADA7] hover:text-[#FCA311] hover:duration-500"
      style={{ fontSize: "17px", fontFamily: "Share Tech Mono" }}
      >
        Designed & Built by Eva Li
      </a>
    </div>
  );
};

export default Footer;