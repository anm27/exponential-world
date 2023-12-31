// Header.js
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import rocket from "../images/rocket.png";
import logoLight from "../images/logo_light_primary.png";

function Header() {
  const scrollToCourses = () => {
    // scroll.scrollToBottom({
    //   duration: 800, // Adjust the duration based on your preference
    //   smooth: true,
    // }); // You can adjust this based on your layout

    scroll.scrollTo(640); // Scrolling to 100px from the top of the page.
  };

  return (
    <>
      <div className="bg-header w-full h-screen font-dm-sans">
        <div className="lg:flex hidden items-center fixed top-0 w-full">
          <div className="px-10 py-5">
            {/* <h2 className="text-3xl uppercase text-gradient-primary font-bold">
              Exponential World
            </h2> */}
            <div className="flex justify-center items-center">
              <img src={logoLight} alt="Sample" className="w-20 h-20 my-auto" />
              <div>
                <p className="text-lg text-white">Exponential</p>
                <p className="text-lg text-white">World</p>
              </div>
            </div>
          </div>
          <div className="flex ml-auto justify-center gap-4 items-center px-10 py-5 text-lg text-black">
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-black px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToCourses}>Login</h2>
            </Link>
            {/* Use Link from react-scroll for smooth scrolling */}
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-black px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToCourses}>Courses</h2>
            </Link>
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-black px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToCourses}>About us</h2>
            </Link>
            <Link
              className="cursor-pointer lg:text-lg md:text-base hover:text-black px-3 py-2 hover:rounded-md hover:shadow"
              to="courses"
              smooth={true}
              duration={500}
            >
              <h2 onClick={scrollToCourses}>Testimonials</h2>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-3 py-2 lg:pt-8 lg:pb-10 items-center md:text-5xl text-xl font-bold my-20">
          <h2 className="text-white">Take off your </h2>
          <img src={rocket} alt="Sample" className="w-20 h-20 my-auto" />
          <h2 className="text-gradient-primary py-5 font-pacifico">
            Trading Journey
          </h2>
        </div>
      </div>
    </>
  );
}

export default Header;
