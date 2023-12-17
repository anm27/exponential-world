import React from "react";
import { FaFacebook } from "react-icons/fa";
import logo from "../images/exponential-world-logo.png";
import { TiSocialInstagram } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";

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
          <p>Login</p>
          <p>Courses</p>
          <p>About Us</p>
          <p>Testimonials</p>
        </div>
        <div className="grid gap-4">
          <h2 className="text-3xl text-gradient-primary font-bold py-4">
            Connect with us
          </h2>
          <div className="flex justify-start items-center gap-5">
            <a href="www.facebook.com" className=" cursor-pointer">
              <FaFacebook size={32} color="white" />
            </a>
            <a href="www.facebook.com" className=" cursor-pointer">
              <TiSocialInstagram size={35} color="white" />
            </a>
            <a href="www.facebook.com" className=" cursor-pointer">
              <CiLinkedin size={35} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
