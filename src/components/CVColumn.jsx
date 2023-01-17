import React from "react";

/**
 * One column from the two columns layout output CV
 * @param {object} props 
 * @returns div containing the one column of the CV
 */
function CVColumn(props) {
    return(
        <div className="max-w-[50%] flex flex-col">
            <div className="flex flex-col gap-14">
                {props.children}
            </div>
        </div>
    );
};

export default CVColumn