import { startCase, toUpper } from "lodash";
import React from "react";

/**
 * @param {object} props
 * @param {string} institutionName the university/institution name
 * @param {string} degree the degree type
 * @param {string} major the degree major
 * @param {string} minor the degree minor
 * @param {string} from starting date
 * @param {string} to ending date
 * @param {string} gpa the grade point average
 * @param {string} honors honors if any
 * @returns div containting one education section in the actual CV
 */
function CVEducation({institutionName, degree, major, minor, from, to, gpa, honors}) {
    return (
        <div>
            <p className="text-xl font-bold">{toUpper(institutionName)}</p>
            <p className="text-lg">{degree} in {startCase(major)} {minor ? `and ${startCase(minor)}` : null}</p>
            <p>{from.substring(0, 4)} - {to.substring(0,4)}</p>
            <p><span className="font-medium">Cum. GPA:</span> {gpa}</p>
            {honors ? <p><span className="font-medium">Honors: </span>{honors}</p> : null}
        </div>
    )
};

export default CVEducation;