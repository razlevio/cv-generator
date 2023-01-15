import React from "react";

/**
 * SkillTypes compoenent that returns dropdown list of different degree types 
 * @param {object} props object
 * @param {string} name string for name and id of the the select element
 * @param {string} value the value currently selected and stored in the state
 * @param {function} handleInputChange function to update the state
 * @returns select html element with all degree types possibilities
 */
function SkillType({placeholder, value, name, handleInputChange}) {
  const skillTypes = ["---", "Technical", "Soft", "Proffesional"];
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{placeholder}</label>
      <select name={name} id={name} onChange={handleInputChange} className="text-black border p-2 rounded">
        {skillTypes.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}

export default SkillType;
