import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Tools = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div data-aos="fade-up" className="skills__content">
      <h3 className="skills__title">Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Eclipse</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Intellij Idea</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">VSCode</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Webstorm</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Google Collab</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">MatLab</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Anaconda Jupyter</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Pandas</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Numpy</h3>
              <span className="bar">
                <span className="five"></span>
              </span>
              <h3 className="level">5/5</h3>
            </div>
          </div>

          

      
        </div>
      </div>
    </div>
  )
}

export default Tools
