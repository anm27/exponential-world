import React, { useState } from "react";
import thumb1 from "../images/THUMBNAILS/1.png";
import thumb2 from "../images/THUMBNAILS/2.png";
import thumb3 from "../images/THUMBNAILS/3.png";
import thumb4 from "../images/THUMBNAILS/4.png";
import thumb5 from "../images/THUMBNAILS/5.png";
import thumb6 from "../images/THUMBNAILS/6.png";
import thumb7 from "../images/THUMBNAILS/7.png";
import thumb8 from "../images/THUMBNAILS/8.png";
import thumb9 from "../images/THUMBNAILS/9.png";
import thumb10 from "../images/THUMBNAILS/10.png";
import thumb11 from "../images/THUMBNAILS/11.png";
import thumb12 from "../images/THUMBNAILS/12.png";
import thumb13 from "../images/THUMBNAILS/13.png";
import thumb14 from "../images/THUMBNAILS/14.png";
import thumb15 from "../images/THUMBNAILS/15.png";
import thumb16 from "../images/THUMBNAILS/16.png";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

function Courses() {
  const [investingClicked, setInvestingCliked] = useState(true);
  const [tradingClicked, setTradingCliked] = useState(false);
  const [businessClicked, setBusinessCliked] = useState(false);
  const [personalClicked, setPersonalCliked] = useState(false);

  function showInvesting() {
    setInvestingCliked(true);
    setTradingCliked(false);
    setBusinessCliked(false);
    setPersonalCliked(false);
  }

  function showTrading() {
    setInvestingCliked(false);
    setTradingCliked(true);
    setBusinessCliked(false);
    setPersonalCliked(false);
  }

  function showBusiness() {
    setInvestingCliked(false);
    setTradingCliked(false);
    setBusinessCliked(true);
    setPersonalCliked(false);
  }

  function showPersonal() {
    setInvestingCliked(false);
    setTradingCliked(false);
    setBusinessCliked(false);
    setPersonalCliked(true);
  }

  return (
    <>
      <div
        data-aos="fade-right"
        className="md:flex block gap-6 justify-center items-center px-5 mt-10 z-50"
      >
        <button
          onClick={showInvesting}
          //   className="w-full mb-2 text-lg px-4 py-2 bg-gradient-primary shadow rounded-md"
          className={`w-full mb-2 text-lg px-4 py-2 ${
            !investingClicked
              ? "bg-gradient-primary"
              : "bg-purple-800 text-white"
          } shadow rounded-md`}
        >
          Investing
        </button>
        <button
          onClick={showTrading}
          className={`w-full mb-2 text-lg px-4 py-2 ${
            !tradingClicked ? "bg-gradient-primary" : "bg-purple-800 text-white"
          } shadow rounded-md`}
        >
          Trading
        </button>
        <button
          onClick={showBusiness}
          className={`w-full mb-2 text-lg px-4 py-2 ${
            !businessClicked
              ? "bg-gradient-primary"
              : "bg-purple-800 text-white"
          } shadow rounded-md`}
        >
          Business
        </button>
        <button
          onClick={showPersonal}
          className={`w-full mb-2 text-lg px-4 py-2 ${
            !personalClicked
              ? "bg-gradient-primary"
              : "bg-purple-800 text-white"
          } shadow rounded-md`}
        >
          Personal Dev
        </button>
      </div>

      {investingClicked && (
        <>
          <div
            className="flex gap-3 justify-center items-center my-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">Investing </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div
            className="md:flex grid gap-4 md:mx-20 justify-center mb-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb1}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb2}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb3}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb4}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tradingClicked && (
        <>
          <div
            className="flex gap-3 justify-center items-center my-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">Trading </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div
            className="md:flex grid gap-4 md:mx-20 justify-center mb-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb5}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb6}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb7}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb8}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {businessClicked && (
        <>
          <div
            className="flex gap-3 justify-center items-center my-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">Business </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div
            className="md:flex grid gap-4 md:mx-20 justify-center mb-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb9}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb10}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb11}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb12}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {personalClicked && (
        <>
          <div
            className="flex gap-3 justify-center items-center my-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">
              Personal Dev{" "}
            </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div
            className="md:flex grid gap-4 md:mx-20 justify-center mb-20"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb13}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb14}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb15}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src={thumb16}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <h2 className={`text-base font-semibold text-gray-500 px-2`}>
                    By Paras Sir
                  </h2>
                  <div className={`flex-row justify-beeen items-center w-75`}>
                    <div
                      className={`grid justify-between items-center my-2 px-2`}
                    >
                      <div className={`flex items-center gap-.5 my-1`}>
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStar name="star" size={15} color="darkcyan" />
                        <FaStarHalfAlt
                          name="star-half-empty"
                          size={15}
                          color="darkcyan"
                        />
                        <h2 className="ml-4">4.9 (15 ratings)</h2>
                      </div>

                      <div className={`flex gap-2 my-1`}>
                        <h2 className={`text-cyan-700 line-through`}>
                          Rs. 7999
                        </h2>
                        <h2 className={`text-cyan-700`}>Rs. 5499</h2>
                      </div>
                    </div>
                    <button className={`px-3 py-2 bg-cyan-700 rounded-md`}>
                      <h2
                        className={`text-white font-bold text-xs text-center`}
                      >
                        ENROLL NOW!
                      </h2>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stock
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #market
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #training
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Courses;
