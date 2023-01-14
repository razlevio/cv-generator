import React from "react";

/**
 * @param {object} props 
 * @returns subsection that should be rendered within a section
 */
function Subsection(props) {
  return (
    <div className="p-3 flex flex-col gap-5">
      <h1 className="text-xl font-bold">{props.heading}</h1>
      {props.children}
    </div>
  );
}

export default Subsection;
