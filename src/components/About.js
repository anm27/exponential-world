import React from "react";
import aboutBanner from "../images/aboutExponentialWorld.png";

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
          <h2 className="text-base py-2 font-dm-sans">
            We are one of the rapidly growing institutes for learning the Stock
            Market in India. Its roots can be traced back to 2017 and today, we
            are successful in being able to roll out our knowledge to numerous
            students across India and abroad. We, here at Exponential World not
            only train budding traders but also, provides the best aide towards
            the practical strategic real-time implementations, which are put
            into execution.
          </h2>
          <h2 className="font-semibold text-base py-2 font-dm-sans">
            Trading and investing isn’t a game of gambling where your chances of
            winning are uncertain. To minimize the losses, and win big and
            consistently over years, you need a skillset to understand this
            industry and not mere luck. After practicing for more than 7 years
            and experiencing all the ups and downs of the stock market industry,
            I figured out the perfect roadmap that can lead anyone to succeed in
            the stock market. It’s not about betting on luck but following the
            lessons, developing the knowledge and skills that you can be
            confident to make a lot of money from this giant industry.
          </h2>
          <h2 className="font-semibold text-base py-2 font-dm-sans">
            In addition to this, we provide assistance for Portfolio management,
            Finance & Risk, Derivatives trading and Advisory services. We have
            been successfully managing our client’s database, in order for them
            to fetch out best returns from their investment. We help you manage
            the asset, provide financial advice.
          </h2>
          <h2 className="font-bold text-xl font-dm-sans py-2">
            Leave money issues with us and focus on your core business. We’ll
            handle everything for you!
          </h2>
        </div>
      </div>
    </>
  );
}

export default About;
