import React, { useState } from "react";
import SubHeading from "../../components/SubHeading";
import Feature from "../Feature/Feature";
import { motion } from "framer-motion";
import { opacityAnimation } from "../../constants/Variants";

const Features = () => {
  const [feature, setFeature] = useState(0);

  const featureHandler = (id) => {
    setFeature(id);
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={opacityAnimation}
      id="features"
      className="app__features margintop"
    >
      <SubHeading
        heading="Features"
        p="Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go."
      />
      <div className="app__features_items">
        <div className="line"></div>
        <p
          className={feature === 0 ? "active" : ""}
          onClick={() => featureHandler(0)}
        >
          Simple Bookmarking
        </p>
        <div className="line"></div>
        <p
          className={feature === 1 ? "active" : ""}
          onClick={() => featureHandler(1)}
        >
          Speedy Searching
        </p>
        <div className="line"></div>
        <p
          className={feature === 2 ? "active" : ""}
          onClick={() => featureHandler(2)}
        >
          Easy Sharing
        </p>
        <div className="line"></div>
      </div>
      <Feature feature={feature} />
    </motion.div>
  );
};

export default Features;
