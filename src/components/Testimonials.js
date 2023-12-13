import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data";
// import PreviousBtn from "./PreviousBtn";
// import NextBtn from "./NextBtn";
import Card from "./Card";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

function cards(data) {
  return (
    <Card
      key={data.id}
      avatar={data.avatar}
      name={data.name}
      message={data.message}
      designation={data.designation}
      location={data.location}
    />
  );
}
function Testimonials() {
  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextBtn />,
    // prevArrow: <PreviousBtn />,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="testimonial" style={{ marginBottom: "6%" }}>
      <div style={{ width: "80%" }}>
        <div className="text-center font-extrabold text-black title-stroke">
          <h2 className="lg:text-4xl sm:text-xl mb-20">Our Testimonials</h2>
        </div>
        <Slider {...settings}>{data.map(cards)}</Slider>
      </div>
    </div>
  );
}
export default Testimonials;
