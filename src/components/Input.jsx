import React from "react";

/**
 * Input component for rendering input tag element
 * @param {object} props
 * @param {string} type the input tag type
 * @param {string} name the input tag id and name
 * @param {string} value the current value in the state of the input tag
 * @param {string} palceholder the input tag placeholder
 * @param {function} handleInputChange function to update the state on input change event
 * @returns input tag element
 */
function Input({ type, name, value, placeholder, handleInputChange }) {
  return <input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={handleInputChange} className="text-black border p-2 rounded" />;
}

export default Input;
