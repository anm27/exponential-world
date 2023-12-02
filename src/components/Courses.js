import React, { useState } from "react";

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
      <div className="md:flex block gap-6 justify-center items-center px-5 -my-5">
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
          <div className="flex gap-3 justify-center items-center my-20">
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">Investing </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div className="md:flex grid gap-4 md:mx-20 justify-center mb-20">
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tradingClicked && (
        <>
          <div className="flex gap-3 justify-center items-center my-20">
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">Trading </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div className="md:flex grid gap-4 md:mx-20 justify-center mb-20">
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {businessClicked && (
        <>
          <div className="flex gap-3 justify-center items-center my-20">
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">Business </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div className="md:flex grid gap-4 md:mx-20 justify-center mb-20">
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {personalClicked && (
        <>
          <div className="flex gap-3 justify-center items-center my-20">
            {/* Content for Investing */}
            <p className="text-3xl font-semibold font-pacifico">
              Personal Dev{" "}
            </p>
            <div className="text-center font-extrabold text-black title-stroke">
              <h2 className="lg:text-4xl sm:text-xl">Courses</h2>
            </div>
          </div>
          <div className="md:flex grid gap-4 md:mx-20 justify-center mb-20">
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="/img/card-top.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
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
