import React from 'react'

const Scroll = () => {
  return (
     <div className="home__scroll">
        <a href="#about" className="home__scroll-button 
        button--flex">
            <span className="home__scroll-name">
                Scroll Down
            </span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
     </div>
  )
}

export default Scroll