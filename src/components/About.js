import React from "react";
import aboutBanner from "../images/banner-one.jpg";

function About() {
  return (
    <>
      <div className="text-center font-extrabold text-black title-stroke">
        <h2 className="lg:text-4xl sm:text-xl mb-20">About Us</h2>
      </div>
      <div className="lg:flex gap-0 items-center mb-20">
        <div className="lg:w-1/2">
          <img src={aboutBanner} className="lg:w-2/3  mx-auto" alt="About Us" />
        </div>
        <div className="lg:w-2/3 lg:mr-20 mx-5">
          <h2 className="text-base py-2">
            We are one of the rapidly growing institutes for learning the Stock
            Market in India. Its roots can be traced back to 2017 and today, we
            are successful in being able to roll out our knowledge to numerous
            students across India and abroad. We, here at Exponential World not
            only train budding traders but also, provides the best aide towards
            the practical strategic real-time implementations, which are put
            into execution.
          </h2>
          <h2 className="font-semibold text-base py-2">
            In addition to this, we provide assistance for Portfolio management,
            Finance & Risk, Derivatives trading and Advisory services. We have
            been successfully managing our client’s database, in order for them
            to fetch out best returns from their investment. We help you manage
            the asset, provide financial advice.
          </h2>
          <h2 className="font-bold text-base py-2">
            Leave money issues with us and focus on your core business. We’ll
            handle everything for you!
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;
