import React from "react";

import HeroImg from "./HeroComponents/HeroImg";
import About from "./HeroComponents/About";

const Hero = (props) => {
  return <div className={`${props.className}`}>
    <HeroImg />
    <About />
    </div>;
};

export default Hero;
