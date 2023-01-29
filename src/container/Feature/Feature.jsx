import React from "react";
import SubHeading from "../../components/SubHeading";
import dummy from "../../constants/dummy";

const Feature = ({ feature }) => {
  const filtered = dummy.filter((item) => item.id === feature);

  return (
    <>
      {filtered.map((item, index) => {
        return (
          <div className="app__feature" key={index}>
            <div className="app__feature_img">
              <img src={item.src} alt="" />
            </div>
            <SubHeading heading={item.title} p={item.text} />
          </div>
        );
      })}
    </>
  );
};

export default Feature;
