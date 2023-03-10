import React, { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  // Toggle Menu
  const [Toggle, showMenu] = useState(false)

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Hol<span>mes</span>
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            
            <li>
              <a href="#home" className="home active">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li>
              <a href="#about" className="about">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li>
              <a href="#skills" className="skills">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li>
              <a href="#contact" className="contact">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
