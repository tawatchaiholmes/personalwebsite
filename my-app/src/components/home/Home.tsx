import React from "react"
import Data from "./Data"
import "./Home.css"
import Social from "./Social"

document.addEventListener("mousemove", function (event: MouseEvent) {
  const images = document.querySelectorAll(
    ".home__img"
  ) as NodeListOf<HTMLImageElement>

  images.forEach(image => {
    const movingValue = image.getAttribute("data-value")
    if (movingValue) {
      const mouseX = (event.clientX * parseInt(movingValue)) / 250
      const mouseY = (event.clientY * parseInt(movingValue)) / 250
      image.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`
    }
  })
})

const Home = () => {
  return (
    <section className="home__section home-background-color" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" data-value="-5"></div>
          <div className="home__img one" data-value="-2"></div>
          <div className="home__img two" data-value="-1"></div>
          <div className="home__img three" data-value="-2"></div>
          <div className="home__img four" data-value="-1"></div>
          <div className="home__img five" data-value="-1"></div>
          <Data />
        </div>
      </div>
    </section>
  )
}

export default Home
