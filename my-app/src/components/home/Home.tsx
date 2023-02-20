import React from 'react';
import "./Home.css";
import Data from "./Data";
import Social from './Social';
import Scroll from './Scroll';

document.addEventListener('mousemove', function(x: MouseEvent){
  const img = document.querySelector(".home__img") as HTMLElement;
  const movingValue = img.getAttribute("data-value");
  const mouseX = (x.clientX * parseInt(movingValue || "0")) / 250;
  const mouseY = (x.clientY * parseInt(movingValue || "0")) / 250;
  img.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;
});

const Home = () => {

  console.log("loading Home")
  return (
    <section className="home__section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img" data-value="-5"></div>
          <Data />
        </div>
        <Scroll/>
        
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Home