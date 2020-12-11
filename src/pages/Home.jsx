import React from 'react';
import Navbar1 from "../components/common/navbar";
import About from '../components/homepage/about';
import Cover from "../components/homepage/cover";
import Quote from "../components/homepage/quote";
import Contact from "../components/homepage/contact";

const Home = () => {
    return (
      <>
        <Navbar1/>
        <Cover />
        <About />
        <Quote />
        <Contact />
      </>
    );
}

export default Home;
