import React from "react";
import "./App.css";
import Header from "./components/Header";
// import bannerImage from "./images/banner-1.png";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      {/* <img src={bannerImage} alt="Sample" className="mb-4" /> */}

      <Courses />

      <Footer />
    </>
  );
}

export default App;
