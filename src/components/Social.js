import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub, FiMail } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Social = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
    className="social ml-8 max-[500px]:ml-1"
    data-aos="fade-right"
    data-aos-easing="linear"
    data-aos-delay="2200"
    data-aos-offset="0"
    >
      <a
      href="http://www.github.com/kibapika"
      >
        <FiGithub />
      </a>
      <a 
      href="http://www.linkedin.com/in/eva-li-rd"
      >
        <BsLinkedin />
      </a>
      <a 
      href="mailto:evali3101@gmail.com"
      >
        <FiMail />
      </a>
    </div>
  );
};

export default Social;
