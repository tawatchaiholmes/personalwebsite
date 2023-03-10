import React from "react";
import "./Skill.css";
import Languages from "./Languages";
import Tools from "./Tools";
import Aos from "aos";
import "aos/dist/aos.css";

const Skill = () => {


  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <section className="skills__section skill-background-color" id="skills">
      <h2 data-aos="zoom-in" className="skill__titlemain">Skills</h2>
      <span data-aos="zoom-in" className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Languages />
        <Tools />
      </div>
    </section>
  )
}

export default Skill
