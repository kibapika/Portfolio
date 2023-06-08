import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Intro = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div
        className="flex flex-col justify-center items-start w-[70vw] max-[500px]:w-[60%]"
      >
        <span
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1350"
          data-aos-offset="0"
          className="trial text-[#FCA311] tracking-wider text-[25px] max-[500px]:w-full max-[500px]:text-[19px] max-[500px]:text-center"
          style={{fontFamily: "Share Tech Mono" }}
        >
          Hi there, I am . . .
        </span>
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1450"
          data-aos-offset="0"
          className="text-[#E5E5E5] tracking-widest font-bold text-[72px] max-[500px]:text-[63px] max-[500px]:text-center max-[500px]:w-full max-[500px]:text-[19px] max-[500px]:"
          style={{ fontFamily: "Roboto" }}
        >
          Eva Li
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1550"
          data-aos-offset="0"
          className="text-[#9A8C98] tracking-widest text-[50px] max-[500px]:text-[40px] max-[500px]:text-center"
          style={{fontFamily: "Roboto" }}
        >
          Software Engineer
        </h1>
        <p
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1650"
          data-aos-offset="0"
          className="text-[#C9ADA7] tracking-widest text-[18px] w-[50vw] max-[500px]:w-auto max-[500px]:text-[18.5px] max-[500px]:text-center max-[500px]:pt-[1.5rem]"
          style={{fontFamily: "Roboto"}}
        >
          I'm a recent graduate from Fullstack Academy! I honed my skills for{" "}
          <span className="text-[#FCA311]">front-end</span> and{" "}
          <span className="text-[#FCA311]">back-end</span> software development.
        </p>
        <Link
          to="about"
          smooth={true}
          duration={800}
          className=" cursor-pointer pt-16"
        >
          <svg 
          className="arrows"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="1750"
          data-aos-offset="0"
          >
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </Link>
        
      </div>
  );
};

export default Intro;
