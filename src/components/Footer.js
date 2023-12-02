import React from "react";
import fb from "../images/fb.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

function Footer() {
  return (
    <>
      <div className="md:flex gap-10 justify-around items-center py-20 px-10 bg-black text-white">
        <div className="">
          <h2 className="text-3xl uppercase text-gradient-primary font-bold py-4">
            Exponential World
          </h2>
          <p>Login</p>
          <p>Courses</p>
          <p>About Us</p>
          <p>Testimonials</p>
        </div>
        <div>
          <h2 className="text-3xl text-gradient-primary font-bold py-4">
            Contact Us
          </h2>
          <p>Login</p>
          <p>Courses</p>
          <p>About Us</p>
          <p>Testimonials</p>
        </div>
        <div>
          <h2 className="text-3xl text-gradient-primary font-bold py-4">
            Connect with us
          </h2>
          <div className="flex justify-start items-center gap-5">
            <img className="w-10" src={fb} alt="Facebook" />
            <img className="w-10" src={instagram} alt="Instagtam" />
            <img className="w-10" src={twitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
