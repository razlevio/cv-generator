import React from "react";
import Section from "./Section";
import Input from "./Input";
import Subsection from "./Subsection";
import Years from "./Years"
import DegreeType from "./DegreeType";
import {toLower, upperCase} from "lodash";

/**
 * Main React Compoenent
 * @returns JSX of the whole application
 */
function Main() {

  // * State Section
  const [personalInfo, setPersonalInfo] = React.useState({});
  const [education, setEducation] = React.useState([{id: "0", institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}]);
  const [experience, setExprience] = React.useState([]);


  // * Event Handlers Section

  /**
   * Update the personal info form section state
   * @param {object} e the event object generated from the onchange event
   * @param {string} key the personaInfo object key that needed to be updated
   */
  function updatePersonalInfo(e, key) {
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  };

  /**
   * Update the education form section state
   * @param {object} e the event object generated from the onchange event
   * @param {string} key the education object key that needed to be updated
   * @param {number} index the index of the education array that need to be updated
   */
  function updateEducation(e, key, index) {
    const educationToUpdate = education[index];
    educationToUpdate[key] = e.target.value;
    const educationArray = [...education];
    educationArray[index] = educationToUpdate;
    setEducation(educationArray);
  }


  // * Utils Functions

  /**
   * Remove an education section from the education state array
   * @param {object} e the event object generated from the onclick event
   * @param {*} index the index of the education array that need to be removed
   */
  function removeEducation(e, index) {
    const cloneOfEducation = [...education];
    cloneOfEducation.splice(index, 1)
    if(cloneOfEducation.length === 0) setEducation([{id: '0', institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}]);
    else setEducation(cloneOfEducation);
  }

  /**
   * Add new education to the education state array and initialize it to empty strings
   */
  function newEducation() {
    const nextId = (Math.random() + 1).toString(36).substring(2);
    const newObj = {id: nextId, institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""};
    setEducation([...education, newObj]);
  };


  // * Render JSX Functions

  /**
   * @returns div including the personal information inserted into the personal inforamtion form section
   */
  function renderPersonalInformation() {
    return (
      <div className="flex flex-col gap-5 mt-2">
          <Input id="firstName" name="firstName" type="text" value={personalInfo.firstName} placeholder="First Name" handleInputChange={e => updatePersonalInfo(e, "firstName")} />
          <Input id="lastName" name="lastName" type="text" value={personalInfo.lastName} placeholder="Last Name" handleInputChange={e => updatePersonalInfo(e, "lastName")} />
          <Input id="tel" name="tel" type="tel" value={personalInfo.tel} placeholder="Tel" handleInputChange={e => updatePersonalInfo(e, "tel")} />
          <Input id="email" name="email" type="email" value={personalInfo.email} placeholder="Email" handleInputChange={e => updatePersonalInfo(e, "email")} />
          <Input id="website" name="website" type="url"  value={personalInfo.website} placeholder="Website" handleInputChange={e => updatePersonalInfo(e, "website")} />
          <Input id="linkedin" name="linkedin" type="url" value={personalInfo.linkedin} placeholder="LinkedIn" handleInputChange={e => updatePersonalInfo(e, "linkedin")} />
      </div>
    )
  }

  /**
   * @param {string} id 
   * @returns div including the education information inserted into the education form section by id
   */
  function renderEducation(id) {
    const index = education.findIndex(elem => elem.id === id);
    const isTheLastElem = index === education.length-1;
    return(
      <div key={id} className="flex flex-col gap-5">
          <Input id="institutionName" name="institutionName" type="text" value={education[index].institutionName} placeholder="Institution Name" handleInputChange={e => updateEducation(e, "institutionName", index) }/>
          <DegreeType name="degree" value={education[index].degree} handleInputChange={e => updateEducation(e, "degree", id)}/>
          <Input id="major" name="major" type="text" value={education[index].major} placeholder="Major" handleInputChange={e => updateEducation(e, "major", index) }/>
          <Input id="minor" name="minor" type="text" value={education[index].minor} placeholder="Minor" handleInputChange={e => updateEducation(e, "minor", index) }/>
          <Years name="from" value={education[index].from} placeholder="Starting Year" handleInputChange={e => updateEducation(e, "from", index)} />
          <Years name="to" value={education[index].to} placeholder="Ending Year" handleInputChange={e => updateEducation(e, "to", index)} />
          <Input id="gpa" name="gpa" type="text" value={education[index].gpa} placeholder="Cum. GPA" handleInputChange={e => updateEducation(e, "gpa", index) }/>
          <Input id="honors" name="honors" type="text" value={education[index].honors} placeholder="Honors" handleInputChange={e => updateEducation(e, "honors", index) } />
          <div className="flex justify-center items-center gap-3">
            {isTheLastElem && <button onClick={newEducation} className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white active:bg-zinc-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Add</button>} 
            <button onClick={e => {removeEducation(e, index)}} className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Remove</button>
          </div>
      </div>
    )
  }


  // * Main compoenent JSX return statement
  
  return (
    <div className="flex flex-col justify-center items-center 2xl:flex-row">
      <Section>
        <Subsection heading="Personal Information">
          {renderPersonalInformation()}
        </Subsection>
        <Subsection heading="Education">
          {education.map(elem => renderEducation(elem.id))}
        </Subsection>
      </Section>

      <Section>
        <div>
            <h1 className="text-5xl">{`${upperCase(personalInfo.firstName)} ${upperCase(personalInfo.lastName)}`}</h1>
            <p>{personalInfo.tel}</p>
            <p>{toLower(personalInfo.email)}</p>
            <p>{toLower(personalInfo.website)}</p>
            <p>{toLower(personalInfo.linkedin)}</p>
        </div>
      </Section>
    </div>
  );
}

export default Main;