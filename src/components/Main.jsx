import React from "react";
import Section from "./Section";
import Input from "./Input";
import Subsection from "./Subsection";
import Years from "./Years"
import Months from "./Months"
import DegreeType from "./DegreeType";
import {toLower, toUpper} from "lodash";

/**
 * Main React Compoenent
 * @returns JSX of the whole application
 */
function Main() {

  // * State Section
  const [personalInfo, setPersonalInfo] = React.useState({});
  const [education, setEducation] = React.useState([{id: "0", institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}]);
  const [experience, setExperience] = React.useState([{id: "0", company: "", position: "", from: "", to: "", description: ""}]);


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

  /**
   * Update the experience form section state
   * @param {object} e the event object generated from the onchange event
   * @param {string} key the experience object key that needed to be updated
   * @param {number} index the index of the education array that need to be updated
   */
  function updateExperience(e, key, index) {
      const experienceToUpdate = experience[index];
      experienceToUpdate[key] = e.target.value;
      const experienceArray = [...experience];
      experienceArray[index] = experienceToUpdate;
      setExperience(experienceArray);
  }


  // * Utils Functions

  /**
   * Remove an education section from the education state array
   * @param {object} e the event object generated from the onclick event
   * @param {number} index the index of the education array that need to be removed
   */
  function removeEducation(e, index) {
    const cloneOfEducation = [...education];
    cloneOfEducation.splice(index, 1)
    if(cloneOfEducation.length === 0) setEducation([{id: "0", institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}]);
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

  /**
   * Remove an experience section from the expereince state array
   * @param {object} e the event object generated from the onclick event
   * @param {number} index the index of the expereince array that need to be removed
   */
  function removeExperience(e, index) {
    const cloneOfExpereince = [...experience];
    cloneOfExpereince.splice(index, 1)
    if(cloneOfExpereince.length === 0) setExprience([{id: "0", company: "", position: "", fromMonth: "", toMonth: "", fromYear: "", toYear: "", description: ""}]);
    else setExperience(cloneOfExpereince);
  }

  /**
   * Add new experience to the expereince state array and initialize it to empty strings
   */
  function newExperience() {
    const nextId = (Math.random() + 1).toString(36).substring(2);
    const newObj = {id: nextId, company: "", position: "", fromMonth: "", toMonth: "", fromYear: "", toYear: "", description: ""};
    setExperience([...experience, newObj]);
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
          <DegreeType name="degree" value={education[index].degree} placeholder="Degree Type" handleInputChange={e => updateEducation(e, "degree", id)}/>
          <Input id="major" name="major" type="text" value={education[index].major} placeholder="Major" handleInputChange={e => updateEducation(e, "major", index) }/>
          <Input id="minor" name="minor" type="text" value={education[index].minor} placeholder="Minor" handleInputChange={e => updateEducation(e, "minor", index) }/>
          <div className="flex flex-col gap-1">
              <label htmlFor="from">From Date</label>
              <Input id="from" name="from" type="date" value={education[index].from} placeholder="From Date" handleInputChange={e => updateEducation(e, "from", index)} />
          </div>
          <div className="flex flex-col gap-1">
              <label htmlFor="to">To Date</label>
              <Input id="to" name="to" type="date" value={education[index].to} placeholder="To Date" handleInputChange={e => updateEducation(e, "to", index)} />
          </div>
          <Input id="gpa" name="gpa" type="text" value={education[index].gpa} placeholder="Cum. GPA" handleInputChange={e => updateEducation(e, "gpa", index) }/>
          <Input id="honors" name="honors" type="text" value={education[index].honors} placeholder="Honors" handleInputChange={e => updateEducation(e, "honors", index) } />
          <div className="flex justify-center items-center gap-3">
            {isTheLastElem && <button onClick={newEducation} className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white active:bg-zinc-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Add</button>} 
            <button onClick={e => {removeEducation(e, index)}} className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Remove</button>
          </div>
      </div>
    )
  }

  /**
   * @param {string} id 
   * @returns div including the experience information inserted into the experience form section by id
   */
    function renderExperience(id) {
      const index = experience.findIndex(elem => elem.id === id);
      const isTheLastElem = index === experience.length-1;
      return(
        <div key={id} className="flex flex-col gap-5">
            <Input id="company" name="company" type="text" value={experience[index].company} placeholder="Company Name" handleInputChange={e => updateExperience(e, "company", index) }/>
            <Input id="position" name="position" type="text" value={experience[index].position} placeholder="Position" handleInputChange={e => updateExperience(e, "position", index) }/>
            <div className="flex flex-col gap-1">
              <label htmlFor="from">From Date</label>
              <Input id="from" name="from" type="date" value={experience[index].from} placeholder="From Date" handleInputChange={e => updateExperience(e, "from", index)} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="to">To Date</label>
              <Input id="to" name="to" type="date" value={experience[index].to} placeholder="To Date" handleInputChange={e => updateExperience(e, "to", index)} />
            </div>
            <Input id="description" name="description" type="text" value={experience[index].description} placeholder="Position Description" handleInputChange={e => updateExperience(e, "description", index) } />
            <div className="flex justify-center items-center gap-3">
              {isTheLastElem && <button onClick={newExperience} className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white active:bg-zinc-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Add</button>} 
              <button onClick={e => {removeExperience(e, index)}} className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Remove</button>
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
        <Subsection heading="Experience">
          {experience.map(elem => renderExperience(elem.id))}
        </Subsection>
      </Section>

      <Section size="size: 21cm 29.7cm">
        <div>
            <h1 className="text-5xl">{`${toUpper(personalInfo.firstName)} ${toUpper(personalInfo.lastName)}`}</h1>
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