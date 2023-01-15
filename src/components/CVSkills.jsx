import React from "react";

/**
 * @param {string} id skill unique id 
 * @param {string} skillType the skill type
 * @param {string} skill the actual skill name
 * @param {boolean} lastElementInType indicates if this is the last element in the specific type
 * @returns paragraph element with the provided skill
 */
function CVSkills({id, skillType, skill, lastElementInType}) {
    return (!lastElementInType ? <p key={id}>{skill} •</p> : <p key={id}>{skill}</p>)
};

export default CVSkills;
