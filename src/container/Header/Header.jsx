import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading";
import { motion } from "framer-motion";
import { imageAnimation } from "../../constants/Variants";

const Header = () => {
  return (
    <motion.header
      initial="initial"
      whileInView="animate"
      className="app__header "
    >
      <motion.div className="app__header_image">
        <motion.img
          transition={{ type: "spring" }}
          variants={imageAnimation}
          src={images.hero}
          alt=""
        />
      </motion.div>
      <div className="app__header_text ">
        <SubHeading
          heading="A Simple Bookmark Manager"
          p="A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free."
        />
        <div className="app__header_download">
          <button className="blue">Get it on Chrome</button>
          <button className="white">Get it on Firefox</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
