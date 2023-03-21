import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bxs-map-alt about__icon'></i>
            <h3 className="about__title__info">Location</h3>
            <span className="about__subtitle__info">Christchurch, New Zealand</span>
        </div>

        <div className="about__box">
        <i className='bx bxs-flag-alt about__icon'></i>
            <h3 className="about__title__info">Nationality</h3>
            <span className="about__subtitle__info">Thai/Kiwi</span>
        </div>

        <div className="about__box">
        <i className='bx bxs-palette about__icon'></i>
            <h3 className="about__title__info">Interests</h3>
            <span className="about__subtitle__info">Formula 1, Football, and Gym</span>
        </div>
    </div>
  )
}

export default Info