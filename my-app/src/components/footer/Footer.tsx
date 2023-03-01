import React from "react"
import "./Footer.css"

const Footer = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const d = new Date()
  let month = months[d.getMonth()]
  let year = d.getFullYear()
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="logo">
          <a href="index.html" className="footer__logo">
            Hol<span>mes</span>
          </a>
        </div>
        <div>
          <span className="footer__copy">
            &#169; Tawatchai Holmes.
          </span>
        </div>
        <span className="edited__copy">Last edited On {month} {year}.</span>
      </div>
    </footer>
  )
}

export default Footer
