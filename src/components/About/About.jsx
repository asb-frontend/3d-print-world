import React from "react";
import s from "./About.module.css";
import Reviews from "../Reviews/Reviews"
import Newsletter from "../Newsletter/Newsletter";
import Process from "../Process/Process";

const About = () => {
 
  return (
    <div className={s.about}>
      <div className={s.aboutSectionA}><Newsletter></Newsletter></div>
      <div className={s.aboutSectionB}><Reviews></Reviews></div>
      <div className={s.aboutSectionC}><Process></Process></div>
    </div>
  );
};

export default About;