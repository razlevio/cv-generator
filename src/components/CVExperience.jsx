import React from "react";
import {toUpper, startCase} from "lodash";

function CVExperience({company, position, from, to, description}) {
    function toIsToday() {
        let today = new Date();
        let year = today.getFullYear();
        let month = (today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : (today.getMonth() + 1);
        let day = today.getDate();
        let [providedToYear, providedToMonth, providedToDay] = to.split("-");
        if(`${year} ${month} ${day}` === `${providedToYear} ${providedToMonth} ${providedToDay}`) return true;
        else return false
    }

    return (
        <div>
            <p className="text-xl font-bold">{toUpper(company)}</p>
            <p className="text-lg">{startCase(position)}</p>
            {(from && to) ? <p>{from.substring(0, 4)} - {toIsToday() ? "Present" : to.substring(0,4)}</p> : null}
            <p>{description}</p>
        </div>
    )
};

export default CVExperience;