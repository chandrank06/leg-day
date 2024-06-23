import React from "react";

const Footer = () => {
  const ldFooterBg = {
    background: "#f24b4b",
  };
  return (
    <footer
      className="flex sm:justify-between flex-wrap sm:flex-nowrap mt-10 p-5 rounded-md uppercase text-center sm:text-left justify-center"
      style={ldFooterBg}
    >
      <div className="mailTo text-center">
        <a href="mailto:founder@legday.app">Mail: founder@legday.app</a>
      </div>
      <div className="copyRightSection z-10 text-center">
        Copyright text - © 2024 LegDay India, Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
