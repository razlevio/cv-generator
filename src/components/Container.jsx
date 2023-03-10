import React from "react";

/**
 * @param {object} props 
 * @returns main section div
 */
function Container(props) {
  return (props.type === "CV" ? <div id="CV" className={`A4 2xl:self-start shadow border w-1/2 h-full m-5 p-5 rounded`}>{props.children}</div> : <div className={`A4 2xl:self-start shadow border w-1/2 h-full m-5 p-5 rounded`}>{props.children}</div>);
}

export default Container;
