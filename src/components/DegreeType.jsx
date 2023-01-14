import React from "react";

/**
 * DegreeType compoenent that returns dropdown list of different degree types 
 * @param {object} props object
 * @param {string} name string for name and id of the the select element
 * @param {string} value the value currently selected and stored in the state
 * @param {function} handleInputChange function to update the state
 * @returns select html element with all degree types possibilities
 */
function DegreeType({placeholder, value, name, handleInputChange}) {
  const degreeTypes = [
    "---",
    "BA",
    "BAdmin",
    "BASc",
    "BEd",
    "BEng",
    "BES",
    "BSc",
    "BScN",
    "HBA",
    "HBASc",
    "HBCo",
    "HBEd",
    "HBEM",
    "HBES",
    "HBESc",
    "HBFA",
    "HBK",
    "HBMus",
    "HBOR",
    "HBSc",
    "HBScF",
    "HBSW",
    "MA",
    "MBA",
    "MD",
    "MEd",
    "MES",
    "MF",
    "MMgt",
    "MPH",
    "MSc",
    "MScF",
    "MSEng",
    "MSMgt",
    "MSW",
    "PhD",
  ];
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{placeholder}</label>
      <select name={name} id={name} onChange={handleInputChange} className="text-black border p-2 rounded">
        {degreeTypes.map(type => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}

export default DegreeType;
