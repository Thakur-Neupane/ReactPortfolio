import React from "react";
import Thakur from "../assets/Profile.jpg";

export const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left">
            <div>
              Hi I’m <span>Thakur Neupane</span>
            </div>
            <div className="tag">Software Engineer</div>
            <p>I love coding and making projects.</p>
            <div>
              <a href={Thakur} download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};
