import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
        className="text-[#FCA311] tracking-wide pb-5"
        style={{ fontSize: "5vw", fontFamily: "Share Tech Mono" }}
      >
        About Me
      </h1>
      <div
        className="flex flex-row justify-center items-center"
        // style={{ width: "70%" }}
      >
        <p
          className="text-[#C9ADA7] tracking-widest pr-10"
          style={{ fontSize: "1.25vw", fontFamily: "Roboto" }}
        >
          I am a recent graduate from Fullstack Academy and became a Software
          Engineer by honing my skills in Javascript, React, HTML, etc. I
          currently reside within the Greater New York City area.
          <br></br>
          <br></br>
          Prior to this role, I was a Registered Dietitian (RD) and still have
          my credentials. I decided to make this career change because of my
          curiosity of the ever growing and evolving world of technology. I
          wanted to challenge myself to be able to learn the in's and out's of
          it to better use/understand it to eventually use my skills to help/aid
          peoples lives. Technology was helpful and key part of my practice as a
          dietitian and I hope to become a full-fledged Software Engineer to use
          my new skills to further aid people in some ways.
        </p>
        <img
          className="headShot contrast-75"
          style={{ width: "28vw" }}
          alt="head-shot"
          src="/img/evaLi.jpeg"
        />
      </div>
    </div>
  );
};

export default About;
