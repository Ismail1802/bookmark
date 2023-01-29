import React from "react";

const SubHeading = ({ heading, p }) => {
  return (
    <div className="app__subheading">
      <h1 className="app__subheading-heading">{heading}</h1>
      <p className="app__subheading-p">{p}</p>
    </div>
  );
};

export default SubHeading;
