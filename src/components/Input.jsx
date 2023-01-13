import React from "react";

function Input({ type, name, value, placeholder, handleInputChange }) {
  return <input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={handleInputChange} className="border p-2" />;
}

export default Input;
