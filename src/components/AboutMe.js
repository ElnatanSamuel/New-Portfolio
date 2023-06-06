import React from "react";
import AboutSVG from "../assets/undraw_welcoming_re_x0qo.svg";

const AboutMe = () => {
  return (
    <div className="aboutsec  max-w-7xl m-auto flex items-center">
      <div className="aboutdiv">
        <div>
          <img className="heroimgabout" src={AboutSVG} alt="" />
        </div>
        <div className="aboutdata mt-8">
          <p className="abouthead font-bold opacity-80 text-lg">ABOUT ME</p>
          <p className="abouttext text-xl font-bold mt-4">
            A dedicated Front-end Developer based in Belgrade, Serbia
          </p>
          <p className="aboutmaintext text-sm opacity-60 mt-4">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
