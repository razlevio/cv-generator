import React from "react";

/**
 * @param {object} props 
 * @returns main section div
 */
function Section(props) {
  return <div className={`shadow border w-1/2 h-full m-5 p-5 rounded ${props.size ? "A4 2xl:self-start": null}`}>{props.children}</div>;
}

export default Section;
