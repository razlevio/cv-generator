import React from "react";

/**
 * @param {string} language the language
 * @param {string} level the proficiency of that language
 * @returns div element with the provided language and level
 */
function CVLanguages({id, language, level}) {
    console.log(level)
    return (
        <div key={id}>
            <p className="text-xl font-bold">{language}</p>
            <p>{level}</p>
        </div>
    );
};

export default CVLanguages;