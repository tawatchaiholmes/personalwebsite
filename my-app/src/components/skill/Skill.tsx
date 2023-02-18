import React from "react"
import "./Skill.css"
import Languages from "./Languages"
import Tools from "./Tools"

const Skill = () => {
  return (
    <section className="skills__section" id="skills">
      <h2 className="skill__titlemain">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        <Languages />
        <Tools />
      </div>
    </section>
  )
}

export default Skill
