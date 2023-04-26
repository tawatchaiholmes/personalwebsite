import Aos from "aos"
import "aos/dist/aos.css"
import React from "react"
import Languages from "./Languages"
import "./Skill.css"
import Tools from "./Tools"

const Skill = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <section className="skills__section skill-background-color" id="skills">
      <h2 data-aos="zoom-in" data-aos-once="true" className="skill__titlemain">
        Skills
      </h2>
      <span
        data-aos="zoom-in"
        data-aos-once="true"
        className="section__subtitle"
      >
        My Technical Level
      </span>
      <div className="skills__container container grid">
        <Languages />
        <Tools />
      </div>
    </section>
  )
}

export default Skill
