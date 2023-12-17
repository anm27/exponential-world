import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import bannerOne from "../images/banner-one.jpg";
import bannerTwo from "../images/banner-two.jpg";
import bannerThree from "../images/banner-three.jpg";

export default function SliderIndicatorsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with indicators outside --> */}
      <div className="relative w-full glide-05 border-x-2 border-black bg-black">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={bannerOne}
                className="lg:w-3/4 max-w-full m-auto"
                alt="slide1"
              />
            </li>
            <li>
              <img
                src={bannerTwo}
                className="lg:w-3/4 max-w-full max-h-full m-auto"
                alt="slide2"
              />
            </li>
            <li>
              <img
                src={bannerThree}
                className="lg:w-3/4 max-w-full max-h-full m-auto"
                alt="slide3"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex items-center justify-center w-full gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="p-4 group"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button
            className="p-4 group"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          {/* <button
            className="p-4 group"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button> */}
        </div>
      </div>
      {/*<!-- End Slider with indicators outside --> */}
    </>
  );
}
