import React from "react";
import SubHeading from "../../components/SubHeading";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { NavbarVariants, ListVariants } from "../../constants/Variants";

const browsers = [
  {
    logo: images.chrome,
    heading: "Add to Chrome",
    version: "Minimum version 62",
  },
  {
    logo: images.firefox,
    heading: "Add to Firefox",
    version: "Minimum version 55",
  },
  {
    logo: images.opera,
    heading: "Add to Opera",
    version: "Minimum version 46",
  },
];

const Download = () => {
  return (
    <motion.div
      id="pricing"
      initial="initial"
      whileInView="animate"
      className="app__download"
    >
      <SubHeading
        heading="Download the extension"
        p="We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize."
      />

      <motion.div variants={NavbarVariants} className="app__download_browsers">
        {browsers.map((item, index) => {
          return (
            <motion.div variants={ListVariants} key={index}>
              <div className="app__download_browsers_void">
                <img src={item.logo} alt="browser logo" />
                <p className="app__download_browsers_void-add">
                  {item.heading}
                </p>
                <p className="app__download_browsers_void-version">
                  {item.version}
                </p>
              </div>
              <div className="app__download_browsers_button">
                <img src={images.dots} alt="" />
                <button>Add & Install Extension</button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Download;
