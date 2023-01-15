import React from "react";

function CVColumn(props) {
    const masterClassName = (props.directon === "left" ? "min-w-fit flex flex-col gap-1" : "flex flex-col gap-1")

    return(
        <div className={masterClassName}>
            <p className="text-2xl font-extralight">{props.heading}</p>
            <div className="flex flex-col gap-8">
                {props.children}
            </div>
        </div>
    );
};

export default CVColumn;