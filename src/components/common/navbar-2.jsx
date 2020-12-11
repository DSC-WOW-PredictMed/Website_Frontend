import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { useHistory,useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Navbar2 = () => {
  let history = useHistory();
  let location = useLocation();

  const handleOnClick = () => {
    history.push("/predict");
  };

  return (
    <>
      <Navbar
        className="header-nav sticky"
        fixed="top"
        collapseOnSelect
        bg="dark"
        expand="lg"
      >
        <Fade top>
          <Navbar.Brand href="/" className="brand-name ml-5">
            PredictMed.
          </Navbar.Brand>
        </Fade>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto mr-5">
            {location.pathname === "/" && (
              <>
                <Nav.Link className="px-3" href="#about">
                  <Fade top> About</Fade>
                </Nav.Link>
                <Nav.Link className="px-3" href="#contact">
                  <Fade top> Contact</Fade>
                </Nav.Link>
              </>
            )}
            <Button
              variant="outline-primary"
              className="button mx-3"
              onClick={handleOnClick}
            >
              <Fade top>Predict Now</Fade>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navbar2;
