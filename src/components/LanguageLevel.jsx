import React from "react";

/**
 * Language Levels compoenent that returns dropdown list of different languages levels
 * @param {object} props object
 * @param {string} name string for name and id of the the select element
 * @param {string} value the value currently selected and stored in the state
 * @param {function} handleInputChange function to update the state
 * @returns select html element with all language level possibilities
 */
function LanguageLevel({name, value, placeholder, handleInputChange}) {
    const options = ["---","Elementary proficiency", "Limited working proficiency", "Professional working proficiency", "Full professional proficiency", "Native or bilingual"];
    return (
        <div className="flex flex-col gap-1">
        <label htmlFor={name}>{placeholder}</label>
        <select value={value} name={name} id={name} onChange={handleInputChange} className="text-black border p-2 rounded">
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        </div>
        );
};

export default LanguageLevel;
