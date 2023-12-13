import React from "react";
import "./App.css";
import Header from "./components/Header";
// import bannerImage from "./images/banner-1.png";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
// import SliderIndicatorsOutside from "./components/Slides";

function App() {
  return (
    <>
      <Header />
      {/* <img src={bannerImage} alt="Sample" className="mb-4" /> */}
      <Courses />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
