import React from "react";


/**
 * Rendering a dropdown list of year months
 * @param {object} props 
 * @param {string} placeholder the text placeholder describe the nature of the dropdown list
 * @param {string} value the current state value
 * @param {string} name the field name
 * @param {function} handleInputChange function to update the state onchange
 * @returns select html element with the year months
 */
function Months({ placeholder, value, name, handleInputChange }) {
    const months = ["---" ,"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{placeholder}</label>
            <select id={name} name={name} onChange={handleInputChange} className="text-black border p-2 rounded">
                {months.map(month => <option key={month} value={month}>{month}</option>)}
            </select>
        </div>
    )
};

export default Months;