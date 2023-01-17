import React from "react";
import Container from "./Container";
import Input from "./Input";
import Subsection from "./Subsection";
import DegreeType from "./DegreeType";
import SkillType from "./SkillType";
import LanguageLevel from "./LanguageLevel";
import CVHeader from "./CVHeader";
import CVEducation from "./CVEducation";
import CVExperience from "./CVExperience";
import CVSkills from "./CVSkills";
import CVLanguages from "./CVLanguages";
import CVColumn from "./CVColumn";
import { ErrorBoundary } from 'react-error-boundary'

/**
 * Main React Compoenent
 * @returns JSX of the whole application
 */
function Main() {

// ? --------------------------------------------------------------------------------------------------
// * State Section
// ? --------------------------------------------------------------------------------------------------

  const [personalInfo, setPersonalInfo] = React.useState(localStorage.getItem('personalInfo') ? JSON.parse(localStorage.getItem('personalInfo')) : {});
  const [education, setEducation] = React.useState(localStorage.getItem('education') ? JSON.parse(localStorage.getItem('education')) : [{id: "0", institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}]);
  const [experience, setExperience] = React.useState(localStorage.getItem('experience') ? JSON.parse(localStorage.getItem('experience')) : [{id: "0", company: "", position: "", from: "", to: "", description: ""}]);
  const [skills, setSkills] = React.useState(localStorage.getItem("skills") ? JSON.parse(localStorage.getItem("skills")) : [{id: "0", skillType:"", skill:""}]);
  const [languages, setLanguages] = React.useState(localStorage.getItem("languages") ? JSON.parse(localStorage.getItem("languages")) : [{id: "0", language: "", level: ""}]);

  /**
   * useEffect hook to update the localStorage with every render
   */
  React.useEffect(() => {
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("education", JSON.stringify(education));
    localStorage.setItem("experience", JSON.stringify(experience));
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("languages", JSON.stringify(languages));
  }, [personalInfo, education, experience, skills, languages]);

// ? --------------------------------------------------------------------------------------------------
// * Event Handlers Section
// ? --------------------------------------------------------------------------------------------------

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
  };

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
  };

  /**
   * Update the skills form state
   * @param {object} e the event generated from the onchange
   * @param {*} key the skills object key that needed to be updated
   * @param {*} index the index of the skills array that need to be updated
   */
  function updateSkills(e, key, index) {
      const skillsToUpdate = skills[index];
      skillsToUpdate[key] = e.target.value;
      const skillsArray = [...skills];
      skillsArray[index] = skillsToUpdate;
      setSkills(skillsArray);
  };

  /**
   * Update the languages form state
   * @param {object} e the event generated from the onchange
   * @param {string} key the language object key that needed to be updated
   * @param {string} index the index of the languages array that need to be updated
   */
  function updateLanguages(e, key, index) {
    const languageToUpdate = languages[index];
    languageToUpdate[key] = e.target.value;
    const languagesArray = [...languages];
    languagesArray[index] = languageToUpdate;
    setLanguages(languagesArray);
  };

// ? --------------------------------------------------------------------------------------------------
// * Utils Functions
// ? --------------------------------------------------------------------------------------------------

  /**
 * Error fallback comonent that will render a dive showing error that will handeld by error boundery
 * @param {object} error the error object
 * @returns div explaining the error message
 */
  function ErrorFallback({error, resetErrorBoundery}) {
    return (
      <div>
          There was an error:{' '}
          <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
          <button onClick={resetErrorBoundery}>Try Again</button>
      </div>
    )
  }

  /**
   * Loading detailed CV example 
   * @param {object} e the event generated from the button click 
   */
  function loadExample(e) {
    setPersonalInfo({firstName:"John", lastName:"Doe", tel:"5555555555" , email:"johndoe@email.com", website:"johndoe.com", linkedin:"linkedin.com/in/johndoe"});
    setEducation([{id: "0", institutionName: "Stanford Universiry", degree: "BSc", major: "Computer Science", minor: "", from: "2014-01-01", to: "2018-01-01", gpa: "3.67", honors: "Alpha Phi Alpha"}, {id: "1", institutionName: "Yale Universiry", degree: "MSc", major: "Software Engineering", minor: "Innovation", from: "2018-01-01", to: "2020-01-01", gpa: "4.00", honors: "President List"}, {id: "2", institutionName: "Harvard Universiry", degree: "PhD", major: "Neuroscience CS", minor: "", from: "2020-01-01", to: "2022-01-01", gpa: "3.67", honors: ""}]);
    setExperience([{id: "0", company: "Apple", position: "Software Engineer", from: "2016-01-01", to: "Present", description: "Participated in technical trainings, workshops and networking events to expand my knowledge and connect with industry experts"}, {id: "1", company: "Google", position: "Software Engineer Student", from: "2015-01-01", to: "2016-01-01", description: "Gathered and applied technical knowledge from working closely with experienced software engineers, to enhance my software development skills"}, {id: "3", company: "Microsoft", position: "Software Engineer Intern", from: "2014-01-01", to: "2015-01-01", description: "Developed and maintained web applications using technologies such as JavaScript, React, and Node.js. Collaborated with cross-functional teams to identify and resolve bugs and improve application performance"}]);
    setSkills([{id: "0", skillType:"Technical", skill:"Python"}, {id: "1", skillType:"Technical", skill:"JavaScript"}, {id: "2", skillType:"Technical", skill:"C++"}, {id: "3", skillType:"Technical", skill:"React"}, {id: "4", skillType:"Technical", skill:"Django"}, {id: "5", skillType:"Technical", skill:"Java"}, {id: "6", skillType:"Technical", skill:"TailwindCSS"}, {id: "7", skillType:"Technical", skill:"Bootstrap"}, {id: "8", skillType:"Technical", skill:"LaTeX"}, {id: "9", skillType:"Proffesional", skill:"Accounting"}, {id: "10", skillType:"Proffesional", skill:"Excel"}, {id: "11", skillType:"Proffesional", skill:"ChatGPT"}, {id: "12", skillType:"Proffesional", skill:"Presentations"}, {id: "14", skillType:"Proffesional", skill:"Notion"}, {id: "15", skillType:"Proffesional", skill:"Obsidian"}, {id: "13", skillType:"Proffesional", skill:"Googleing"},{id: "14", skillType:"Soft", skill:"Time-Management"}, {id: "15", skillType:"Soft", skill:"Teamwork"}, {id: "15", skillType:"Soft", skill:"Creativity"}, {id: "16", skillType:"Soft", skill:"Teamwork"}, {id: "17", skillType:"Soft", skill:"Negotiation"}, {id: "18", skillType:"Soft", skill:"Leadership"}]);
    setLanguages([{id: "0", language: "English", level: "Native or bilingual"}, {id: "1", language: "French", level:"Limited working proficiency"}]);
  }

  /**
   * Reset the form deleting everything 
   * @param {object} e the event generated from the button click 
   */
  function resetForm(e) {
    setPersonalInfo({firstName:"", lastName:"", tel:"" , email:"", website:"", linkedin:""});
    setEducation([{id: "0", institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}]);
    setExperience([{id: "0", company: "", position: "", from: "", to: "", description: ""}]);
    setSkills([{id: "0", skillType:"", skill:""}]);
    setLanguages([{id: "0", language: "", level: ""}]);
  }

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

  /**
   * Remove an skill section from the skills state array
   * @param {object} e the event object generated from the onclick event
   * @param {number} index the index of the skills array that need to be removed
   */
  function removeSkills(e, index) {
      const cloneOfSkills = [...skills];
      cloneOfSkills.splice(index, 1)
      if(cloneOfSkills.length === 0) setSkills([{id: "0", skillType:"", skill:""}]);
      else setSkills(cloneOfSkills);
  }

  /**
   * Add new skill to the skills state array and initialize it to empty strings
   */
  function newSkills() {
    const nextId = (Math.random() + 1).toString(36).substring(2);
    const newObj = {id: nextId, skillType:"", skill:""};
    setSkills([...skills, newObj]);
  }

  /**
   * Return array of skills filtered by skill type
   * @param {string} type the type we need to filter out
   * @returns {array} array with the skills of type - type
   */
  function specificSkillsArray(type) {
    const skls = skills.filter(skill => skill.skillType === type);
    return skls;
  }

  /**
   * Remove a language section from the language state array
   * @param {object} e the event object generated from the onclick event
   * @param {number} index the index of the language array that need to be removed
   */
  function removeLanguage(e, index) {
    const cloneOfLanguages = [...languages];
    cloneOfLanguages.splice(index, 1);
    if(cloneOfLanguages.length === 0) setLanguages([{id: "0", skillType:"", skill:""}]);
    setLanguages(cloneOfLanguages)
  }

  /**
   * Add new language to the languages state array and initialize it to empty strings
   */
  function newLanguage() {
    const nextId = (Math.random() + 1).toString(36).substring(2);
    const newObj = {id: nextId, language: "", level: ""};
    setLanguages([...languages, newObj]);
  };

// ? --------------------------------------------------------------------------------------------------
// * Render JSX Functions
// ? --------------------------------------------------------------------------------------------------

  /**
   * Personal infromation form
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
   * Education form
   * @param {string} id 
   * @returns div including the education information inserted into the education form section by id
   */
  function renderEducation(id) {
    const index = education.findIndex(elem => elem.id === id);
    const isTheLastElem = index === education.length-1;
    return(
      <div key={id} className="flex flex-col gap-5">
          <Input id="institutionName" name="institutionName" type="text" value={education[index].institutionName} placeholder="Institution Name" handleInputChange={e => updateEducation(e, "institutionName", index) }/>
          <DegreeType name="degree" value={education[index].degree} placeholder="Degree Type" handleInputChange={e => updateEducation(e, "degree", index)}/>
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
   * Expereince form
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

  /**
   * Skills form
   * @param {string} id 
   * @returns div including the skills information inserted into the education form section by id
   */
  function renderSkills(id) {
    const index = skills.findIndex(elem => elem.id === id);
    const isTheLastElem = index === skills.length-1;
    return(
      <div key={id} className="flex flex-col gap-5">
          <SkillType key={id} name="skillType" value={skills[index].skillType} placeholder="Skill Type" handleInputChange={e => updateSkills(e, "skillType", index)}/>
          <Input id="skill" name="skill" type="text" value={skills[index].skill} placeholder="Skill Name" handleInputChange={e => updateSkills(e, "skill", index) }/>
          <div className="flex justify-center items-center gap-3">
            {isTheLastElem && <button onClick={newSkills} className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white active:bg-zinc-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Add</button>} 
            <button onClick={e => {removeSkills(e, index)}} className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Remove</button>
          </div>
      </div>
    )
  }

  /**
   * Languages form
   * @param {string} id 
   * @returns div including the languages information inserted into the education form section by id
   */
  function renderLanguages(id) {
      const index = languages.findIndex(elem => elem.id === id);
      const isTheLastElem = index === languages.length-1;
      return(
        <div key={id} className="flex flex-col gap-5">
            <Input id="language" name="language" type="text" value={languages[index].language} placeholder="Language" handleInputChange={e => updateLanguages(e, "language", index) }/>
            <LanguageLevel key={id} name="languageLevel" value={languages[index].level} placeholder="Language Level" handleInputChange={e => updateLanguages(e, "level", index)}/>
            <div className="flex justify-center items-center gap-3">
              {isTheLastElem && <button onClick={newLanguage} className="text-zinc-400 border border-zinc-400 hover:bg-zinc-400 hover:text-white active:bg-zinc-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Add</button>} 
              <button onClick={e => {removeLanguage(e, index)}} className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white active:bg-red-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Remove</button>
            </div>
        </div>
      )
  }

  /**
   * Render the actual CV Education section
   * @param {*} id 
   * @returns div containing all of the formatted education section in the actual CV
   */
  function renderCVEducation(id) {
    const index = education.findIndex(elem => elem.id === id);
    const isTheLastElem = index === education.length-1;
    return (
      <div key={id}>
        <CVEducation institutionName={education[index].institutionName} degree={education[index].degree} major={education[index].major} minor={education[index].minor} from={education[index].from} to={education[index].to} gpa={education[index].gpa} honors={education[index].honors} />
      </div>
    );
  };

  /**
   * Render the actual CV Experience section
   * @param {*} id 
   * @returns div containing all of the formatted experience section in the actual CV
   */
  function renderCVExperience(id) {
    const index = experience.findIndex(elem => elem.id === id);
    const isTheLastElem = index === experience.length-1;
    return (
      <div key={id}>
        <CVExperience company={experience[index].company} position={experience[index].position} from={experience[index].from} to={experience[index].to} description={experience[index].description} />
    </div>
    );
  };

  /**
   * Render the actual CV Skills section
   * @param {*} id 
   * @returns div containing all of the formatted skills section in the actual CV
   */
  function renderCVSkills(id) {
    const index = skills.findIndex(elem => elem.id === id);
    const isTheLastElem = index === skills.length-1;

    const listOfTypes = skills.filter(elem => elem.skillType === skills[index].skillType);
    const indexInTypes = listOfTypes.findIndex(elem => elem.id === id);
    const isTheLastElementInType = indexInTypes === listOfTypes.length-1;

    return (<CVSkills key={id} skillType={skills[index].skillType} skill={skills[index].skill} lastElementInType={isTheLastElementInType} />);
  }

  /**
   * Render the actual CV Languages section
   * @param {string} id 
   * @returns div containing all of the formatted languages section in the actual CV
   */
  function renderCVLanguages(id) {
    const index = languages.findIndex(elem => elem.id === id);
    const isTheLastElem = index === languages.length-1;
    return (<CVLanguages id={id} key={id} language={languages[index].language} level={languages[index].level} />);
  }

// ? --------------------------------------------------------------------------------------------------
// * Main compoenent JSX return statement
// ? --------------------------------------------------------------------------------------------------

  return (
    <div className="flex flex-col justify-center items-center 2xl:flex-row">
      <Container>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Subsection heading="Personal Information">
            {renderPersonalInformation()}
          </Subsection>
        </ErrorBoundary>
        <hr className="hr-style m-5" />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Subsection heading="Education">
            {education.map(elem => renderEducation(elem.id))}
          </Subsection>
        </ErrorBoundary>
        <hr className="hr-style m-5" />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Subsection heading="Experience">
            {experience.map(elem => renderExperience(elem.id))}
          </Subsection>
        </ErrorBoundary>
        <hr className="hr-style m-5" />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Subsection heading="Skills">
            {skills.map(elem => renderSkills(elem.id))}
          </Subsection>
        </ErrorBoundary>
        <hr className="hr-style m-5" />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Subsection heading="Languages">
            {languages.map(elem => renderLanguages(elem.id))}
          </Subsection>
        </ErrorBoundary>
        <hr className="hr-style m-5" />
        <div className="flex justify-center p-3 gap-3">
          <button onClick={e => {loadExample(e)}} className="text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Load Example</button>
          <button onClick={e => {resetForm(e)}} className="text-purple-400 border border-purple-400 hover:bg-purple-400 hover:text-white active:bg-purple-600 font-bold uppercase px-8 py-2 w-1/2 rounded outline-none focus:outline-none ease-linear transition-all duration-150">Reset</button>
        </div>
      </Container>

      <Container type="CV">
          <div id="CV" className="flex flex-col gap-7">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <CVHeader firstName={personalInfo.firstName} lastName={personalInfo.lastName} tel={personalInfo.tel} email={personalInfo.email} website={personalInfo.website} linkedin={personalInfo.linkedin} />
            </ErrorBoundary>
            <div className="flex justify-between gap-5 m-3">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <CVColumn>
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-extralight">EDUCATION</p>
                    <div className="flex flex-col gap-3">
                      {education.map(elem => renderCVEducation(elem.id))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-extralight">SKILLS</p>
                    {specificSkillsArray("Technical").length !== 0 ? <p className="text-lg font-bold">Technical</p> : null}
                    <div className="flex flex-wrap gap-1">
                      {specificSkillsArray("Technical") ? specificSkillsArray("Technical").map(skl => renderCVSkills(skl.id)) : null}
                    </div>
                    {specificSkillsArray("Proffesional").length !== 0 ? <p className="text-lg font-bold">Proffesional</p> : null}
                    <div className="flex flex-wrap gap-1">
                      {specificSkillsArray("Proffesional") ? specificSkillsArray("Proffesional").map(skl => renderCVSkills(skl.id)) : null}
                    </div>
                    {specificSkillsArray("Soft").length !== 0 ? <p className="text-lg font-bold">Soft Skills</p> : null}
                    <div className="flex flex-wrap gap-1">
                      {specificSkillsArray("Soft") ? specificSkillsArray("Soft").map(skl => renderCVSkills(skl.id)) : null}
                    </div>
                  </div>
              </CVColumn>
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <CVColumn>
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-extralight">EXPERIENCE</p>
                    <div className="flex flex-col gap-3">
                        {experience.map(elem => renderCVExperience(elem.id))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-2xl font-extralight">LANGUAGES</p>
                      <div className="flex flex-col gap-3">
                          {languages.map(elem => renderCVLanguages(elem.id))}
                      </div>
                  </div>
              </CVColumn>
            </ErrorBoundary>
            </div>
          </div>
      </Container>
    </div>
  );
}

export default Main;