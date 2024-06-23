import React from "react";
import "../buttons.css";
import "../fonts.css";
const Header = () => {
  return (
    <nav className="w-full ms-2 md:ms-2 ">
      <div className="flex content-center w-full mt-6">
        <div className="content-center">
          <img className="w-10 h-10 mr-4 " src="images/logo.png" alt="logo" />
        </div>
        <div className="text-3xl font-normal text-left content-center text-nowrap uppercase">
          leg day
        </div>
        {/* <div className="oswald-font text-sm font-semibold content-center w-full flex justify-end">
          <div className="oswald-font text-sm font-semibold px-4 content-center">
            <button
              type="button"
              className="oswald-font uppercase ld-button-blue"
            >
              For Trainers
            </button>
          </div>
          <div className="py-2.5 content-center">|</div>
          <div className="oswald-font text-sm font-semibold px-4 text-left content-center">
            <button
              type="button"
              className="oswald-font text-sm font-semibold ps-4 text-left content-cente uppercase ld-button-orange"
            >
              For Athletes
            </button>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
