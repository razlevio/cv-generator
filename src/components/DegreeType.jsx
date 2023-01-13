import React from "react";

function DegreeType({name, value, handleInputChange}) {
  const degreeTypes = [
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
    <select name={name} id={name} onChange={handleInputChange} className="text-black border p-2 rounded">
      <option>{value ? value : "Degree Type"}</option>
      {degreeTypes.map(type => <option key={type} value={type}>{type}</option>)}
    </select>
  );
}

export default DegreeType;
