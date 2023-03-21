import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Languages = () => {
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])
  return (
    <div data-aos="fade-up" className="skills__content">
      <h3 className="skills__title">Programming Languages</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="bar">
                <span className="four">
                </span>
              </span>
            </div>
              <h3 className="level">4/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="bar">
                <span className="four">
                </span>
              </span>
            </div>
                <h3 className="level">4/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="bar">
                <span className="four">
                </span>
              </span>
            </div>
                <h3 className="level">4/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="bar">
                <span className="three_five">
                </span>
              </span>
            </div>
                <h3 className="level">3.5/5</h3>
          </div>


          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">CSS/HTML</h3>
              <span className="bar">
                <span className="three_five">
                </span>
              </span>
            </div>
                <h3 className="level">3.5/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Javascript</h3>
              <span className="bar">
                <span className="three">
                </span>
              </span>
            </div>
                <h3 className="level">3/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">R Programming</h3>
              <span className="bar">
                <span className="three">
                </span>
              </span>
            </div>
                <h3 className="level">3/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Vue.js</h3>
              <span className="bar">
                <span className="two">
                </span>
              </span>
            </div>
                <h3 className="level">2/5</h3>
          </div>


          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="bar">
                <span className="two">
                </span>
              </span>
            </div>
                <h3 className="level">2/5</h3>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">C</h3>
              <span className="bar">
                <span className="one">
                </span>
              </span>
            </div>
                <h3 className="level">1/5</h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Languages
