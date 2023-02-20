import React from "react";

const SectionTitle = (props) => {
  return (
    <div className="mi-sectiontitle">
      <h2>{props.title}</h2>
      <span>{props.title}</span>
    </div>
  );
};

export default SectionTitle;
