import React from "react";
import {toUpper, toLower, truncate} from "lodash";

/**
 * Returning a CV Header component
 * @param {object} props 
 * @param {string} firstName the first name state
 * @param {string} lastName the last name state
 * @param {string} tel the tel state
 * @param {string} email the email state
 * @param {string} website the website state
 * @param {string} linkedin the linkedin state
 * @returns div containting the header section of personal information in the actual CV
 */
function CVHeader({firstName, lastName, tel, email, website, linkedin}) {
    function formatPhoneNumber(phoneNumber) {
        // Remove any non-numeric characters from the phone number
        var cleaned = phoneNumber.replace(/\D/g, '');
        // Check if the phone number is the correct length
        if (cleaned.length === 10) {
          // Format the phone number as (123) 456-7890
          return '(' + cleaned.substring(0, 3) + ') ' + cleaned.substring(3, 6) + '-' + cleaned.substring(6);
        } else {
          // Return the original phone number if it is not the correct length
          return phoneNumber;
        }
    }
    
    function formatName(fName, lName) {
        let combined = toUpper(`${fName} ${lName}`);
        let truncted;
        if(combined.length > 24) {
            truncted = combined.substring(0, 25);
            [first, last] = truncted.split(" ");
            return [first, last]
        } else {
            return [fName, lName]
        }
    }

    return (
        <div className="flex flex-col gap-3">
            <p className="text-5xl font-thin text-center">{toUpper(firstName)} <span className="font-bold">{toUpper(lastName)}</span></p>
            <div className="flex gap-5 justify-center">
                <p>{tel ? formatPhoneNumber(tel) : null}</p>
                <p>|</p>
                <p>{toLower(email)}</p>
                <p>|</p>
                <p>{toLower(website)}</p>
                <p>|</p>
                <p>{toLower(linkedin)}</p>
            </div>
            <hr className="hr-style"/>
        </div>
    );
};

export default CVHeader;