import React from "react";

/**
 * Years compoenent that returns dropdown list of years from 1930
 * @param {object} props object
 * @param {string} placeholder placeholder for the dropdown element 
 * @param {string} name string for name and id of the the select element
 * @param {string} value the value currently selected and stored in the state
 * @param {function} handleInputChange function to update the state
 * @returns select html element with years from 1930
 */
function Years({ placeholder, value, name, handleInputChange }) {
  const currentYear = new Date().getFullYear();
  const years = ["---"]

  if(name === "from") for(let i = 1930; i <= currentYear; i++) years.push(i);
  else for(let i = 1930; i <= currentYear+7; i++) years.push(i);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{placeholder}</label>
      <select id={name} name={name} onChange={handleInputChange} className="text-black border p-2 rounded">
        {years.map(year => <option key={year} value={year}>{year}</option>)}
      </select>
    </div>
  );
}

export default Years;
