import React from "react";
import logo from "../images/exponential-world-logo.png";
import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";

function Footer() {
  return (
    <>
      <div className="md:flex gap-10 justify-around items-center py-20 px-10 bg-black text-white">
        <div className="grid gap-4">
          <img
            src={logo}
            alt="Exponential World"
            className="w-48 mb-2 shadow-indigo-500/50 shadow rounded-md px-2"
          />
          <p>Login</p>
          <p>Courses</p>
          <p>About Us</p>
          <p>Testimonials</p>
        </div>
        <div className="grid gap-4">
          <h2 className="text-3xl text-gradient-primary font-bold py-4">
            Contact Us
          </h2>
          <p className="text-white text-lg">
            Call us at :
            <a
              href="tel:+917017538193"
              className="text-blue-500 hover:underline ml-2"
            >
              +91 (701) 753-8193
            </a>
          </p>
          <p className="text-white text-center">OR</p>
          <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Write your message"
              className="bg-gray-700 text-white border-none px-4 py-2 rounded-l-md w-64 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Send
            </button>
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-3xl text-gradient-primary font-bold py-4">
            Connect with us
          </h2>
          <div className="flex justify-start items-center gap-5">
            <a
              href="https://www.facebook.com/worldexponential"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <img alt="facebook" src={fb} className="w-full" />
            </a>
            <a
              href="https://www.instagram.com/exponential_world/"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <img alt="instagram" src={instagram} className="w-full" />
            </a>
            <a
              href="https://twitter.com/aroraparas3008"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <img alt="x" src={twitter} className="w-full bg-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/aroraparas3008/"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <img alt="linkedin" src={linkedin} className="w-full" />
            </a>
            <a
              href="https://www.youtube.com/c/EXPONENTIALWORLD"
              target="_blank"
              rel="noopener noreferrer"
              className=" cursor-pointer"
            >
              <img alt="youtube" src={youtube} className="w-full" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
