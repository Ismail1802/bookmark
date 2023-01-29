import React from "react";
import images from "../../constants/images";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer_text">
        <div className="app__footer_logo">
          <img src={images.footer} alt="" />
        </div>
        <ul className="app__footer_list">
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="app__footer_socials">
        <img src={images.facebook} alt="facebook" />
        <img src={images.twitter} alt="twitter" />
      </div>
    </div>
  );
};

export default Footer;
