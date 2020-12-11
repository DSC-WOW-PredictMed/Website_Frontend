import React from "react";
import { Row,Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Img from "../../assets/img/service_guy.png";
import Fade from "react-reveal/Fade";

const About = () => {

  let history = useHistory();

  const handleOnClick = () => {
    history.push("/predict");
  };
  
return (
  <div className="main-div" id="about">
    <Fade left cascade>
      <section className="div-1 about">
        <h1 className="heading">What we do?</h1>
        <div>
          <p className="text mt-4">
            PredictMed is a healthcare system that tells you whether or not, you
            are at risk of diseases such as various Heart diseases, Liver and
            Kidney diseases. PredictMed uses Machine lerning models trained of
            data collected from various parts of worlds to predict the outcomes,
            the models are trained to gain &gt;90% accuracy.
          </p>
        </div>
        <Row className="inner-section">
          <Col lg={8} className="align-center">
            <div className="text">
              Here at PredictMed we believe the lesser you worry, the healthier
              you are, thus our primary focus is to assure you whether you have
              the disease or not, before you spend money on various doctors and
              tests. Yet our model does not provide 100% true results and all
              the patients are advised to consult there doctos if the system has
              predicted them to be at risk, no medications of any sorts should
              be taken without consulting doctors. Stay healthy and stay safe!!
            </div>
          </Col>
          <Col lg={4} className="center">
            <img src={Img} alt="Service Guy Img" />
          </Col>
        </Row>
        <p className="text my-3">
          Worried about the possibility of a chronic disease?
        </p>
        <span
          onClick={handleOnClick}
          className="py-1 px-2"
          style={{ cursor: "pointer", color: "white", background: "black" }}
        >
          {" "}
          Check now ➡
        </span>
      </section>
    </Fade>
  </div>
);
};

export default About;
