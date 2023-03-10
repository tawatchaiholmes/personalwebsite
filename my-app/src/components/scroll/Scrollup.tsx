import React from "react"
import "./Scrollup.css"

const Scrollup = () => {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector<HTMLElement>(".scrollup")
    if (scrollUp && window.scrollY >= 850) {
      scrollUp.classList.add("show-scroll")
    } else {
      scrollUp?.classList.remove("show-scroll")
    }
  })

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup
