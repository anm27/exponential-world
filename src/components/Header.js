// Header.js
import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import rocket from "../images/rocket.png";
// import logoLight from "../images/logo_light_primary.png";
import logo from "../images/exponential-world-logo.png";
import SliderIndicatorsOutside from "./Slides";
import { MdMenuOpen } from "react-icons/md";

function Header() {
  const scrollToCourses = () => {
    // scroll.scrollToBottom({
    //   duration: 800, // Adjust the duration based on your preference
    //   smooth: true,
    // }); // You can adjust this based on your layout

    scroll.scrollTo(1110); // Scrolling to 100px from the top of the page.
  };

  const scrollToCoursesMobile = () => {
    scroll.scrollTo(570); // Scrolling to 100px from the top of the page.
  };

  const scrollToAboutUs = () => {
    scroll.scrollTo(920 * 2);
  };

  const scrollToAboutUsMobile = () => {
    scroll.scrollTo(920 * 3.5);
  };

  const scrollToTestimonials = () => {
    scroll.scrollTo(2360);
  };

  const scrollToTestimonialsMobile = () => {
    scroll.scrollTo(2360 * 1.78);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div
        className="bg-header w-full font-dm-sans pt-2"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="lg:hidden flex justify-between mx-6 items-center">
          <div>
            <img src={logo} className="w-32 m-auto" alt="Exponential World" />
          </div>
          <MdMenuOpen onClick={handleMenuClick} size={28} color="white" />
        </div>
        {isClicked ? (
          <>
            <div data-aos="fade-right" className="grid gap-5 lg:hidden">
              <Link
                className="cursor-pointer lg:text-lg md:text-base text-center text-white px-3 py-2 rounded-md shadow"
                to="courses"
                smooth={true}
                duration={500}
              >
                <h2>Login</h2>
              </Link>
              <Link
                className="cursor-pointer lg:text-lg md:text-base text-center text-white px-3 py-2 rounded-md shadow"
                to="courses"
                smooth={true}
                duration={500}
              >
                <h2 onClick={scrollToCoursesMobile}>Courses</h2>
              </Link>
              <Link
                className="cursor-pointer lg:text-lg md:text-base text-center text-white px-3 py-2 rounded-md shadow"
                to="courses"
                smooth={true}
                duration={500}
              >
                <h2 onClick={scrollToAboutUsMobile}>About us</h2>
              </Link>
              <Link
                className="cursor-pointer lg:text-lg md:text-base text-center text-white px-3 py-2 rounded-md hover:shadow"
                to="courses"
                smooth={true}
                duration={500}
              >
                <h2 onClick={scrollToTestimonialsMobile}>Testimonials</h2>
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="lg:flex hidden justify-around items-center top-0 w-full">
          <div className="px-10">
            {/* <text className="text-3xl uppercase text-gradient-primary font-bold">
              Exponential World
            </text> */}
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt="Exponential World"
                className="w-32 my-auto ml-20"
              />
              {/* <div>
                <p className="text-lg text-white">Exponential</p>
                <p className="text-lg text-white">World</p>
              </div> */}
            </div>
          </div>
          <div className="flex ml-auto justify-center gap-4 items-center px-10 py-5 text-lg text-white mr-20">
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-white px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2>Login</h2>
            </Link>
            {/* Use Link from react-scroll for smooth scrolling */}
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-white px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToCourses}>Courses</h2>
            </Link>
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-white px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToAboutUs}>About us</h2>
            </Link>
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-white px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToTestimonials}>Testimonials</h2>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <SliderIndicatorsOutside />
        </div>
        <div className="flex bg-black justify-center gap-3 py-2 lg:pt-4 items-center md:text-5xl text-lg lg:text-5xl font-bold pt-6 mb-12">
          <h2 className="text-white">Take off your </h2>
          <img
            src={rocket}
            alt="Sample"
            className="lg:w-20 lg:h-20 md:w-20 md:h-20 w-10 h-10 my-auto"
          />
          <h2 className="text-gradient-primary py-5 font-pacifico">
            Trading Journey
          </h2>
        </div>
        {/* <SliderIndicatorsOutside /> */}
      </div>
    </>
  );
}

export default Header;
