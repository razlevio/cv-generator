import React from "react";

function Subsection(props) {
  return (
    <div className="p-3">
      <h1 className="text-xl font-bold">{props.heading}</h1>
      <div className="flex flex-col gap-5 mt-2">
         {props.children}
      </div>
    </div>
  );
}

export default Subsection;
