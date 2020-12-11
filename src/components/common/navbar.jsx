import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
// import { useHistory,useLocation } from 'react-router-dom';
import Fade from "react-reveal/Fade";

const Navbar1 = () => {
  // let history = useHistory();
  // let location = useLocation();

  const changeBackground = () => {
    let header = document.querySelector(".header-nav");
    if (window.scrollY < 200) {
      header.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
    }
  };

  window.addEventListener("scroll", changeBackground);

  const handleOnClick = () => {
    
  };

  return (
    <>
      <Navbar
        className="header-nav"
        fixed="top"
        collapseOnSelect
        bg="dark"
        expand="lg"
      >
        <Fade top><Navbar.Brand href="/" className="brand-name ml-5">
          PredictMed.
        </Navbar.Brand></Fade>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link className="px-3" href="/">
              <Fade top>
                Home
              </Fade>
            </Nav.Link>
            <Nav.Link className="px-3" href="#about">
              <Fade top>
                {" "}
                About
              </Fade>
            </Nav.Link>
            <Nav.Link className="px-3" href="#contact">
              <Fade top>
                {" "}
                Contact
              </Fade>
            </Nav.Link>
            <Button
              variant="outline-primary"
              className="button mx-3"
              onClick={handleOnClick}
            >
              <Fade top>
                Predict Now
              </Fade>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navbar1;
