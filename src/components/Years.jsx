import React from "react";

function Years({placeholder, name, handleInputChange }) {
  const currentYear = new Date().getFullYear();
  const years = []

  if(name === "from") for(let i = 1930; i <= currentYear; i++) years.push(i);
  else for(let i = 1930; i <= currentYear+7; i++) years.push(i);

  return (
    <select id={name} name={name} onChange={handleInputChange} className="text-black border p-2 rounded">
      <option>{placeholder}</option>
      {years.map(year => <option key={year} value={year}>{year}</option>)}
    </select>
  );
}

export default Years;
