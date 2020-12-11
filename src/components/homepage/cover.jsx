import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faMedium,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

const Cover = () => {
    return (
      <div className="bg-div" id="home">
        <div className="head mx-5">
          <div className="head-div mx-auto main-div">
            <Fade top cascade>
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Hello there!</h1>
              <h1 className="head-div-second-text">We're PredictMed.</h1>
              <h1 className="head-div-third-text">Better. Accurate.</h1>
              <p className="head-div-fourth-text">
                PredictMed is a healthcare system that tells you whether or not,
                you are at risk of diseases such as various Heart diseases,
                Liver and Kidney diseases.
              </p>
            </section>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <span className="scroll-btn">
              <span className="mouse">
                <span></span>
              </span>
          </span>
        </Fade>
          <div className="social-media">
          <Fade left cascade>
            <ul className="social-media-list">
              {SocialData.map((data, ind) => {
                return (
                  <li key={data + ind}>
                    <a
                      className="social-media-list-link"
                      href="/"
                    >
                      <FontAwesomeIcon icon={data.icon} className="media-icons" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Fade>
          </div>
      </div>
    );
}

export default Cover;

const SocialData = [
  {
    icon: faInstagram,
  },
  {
    icon: faFacebook,
  },
  {
    icon: faMedium,
  },
  {
    icon: faLinkedin,
  },
];