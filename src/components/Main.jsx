import React from "react";
import Section from "./Section";
import Input from "./Input";
import Subsection from "./Subsection";
import Years from "./Years"
import DegreeType from "./DegreeType";
import _ from "lodash";

function Main() {
  const [personalInfo, setPersonalInfo] = React.useState({});
  const [education, setEducation] = React.useState({ed0: {institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""}});

  function updatePersonalInfo(e, key) {
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  };

  function updateEducation(e, key, educationID) {
    const modified = education[educationID];
    modified[key] = e.target.value;
    setEducation({...education, [educationID]: modified});
  }

  function renderNewEducation() {
    const nextId = Object.keys(education).length+1;
    const newObj = {institutionName: "", degree: "", major: "", minor: "", from: "", to: "", gpa: "", honors: ""};
    setEducation({...education, nextId: newObj});
  };

  return (
    <div className="flex flex-col justify-center items-center 2xl:flex-row">
      <Section>
        <Subsection heading="Personal Information">
          <Input id="firstName" name="firstName" type="text" value={personalInfo.firstName} placeholder="First Name" handleInputChange={e => updatePersonalInfo(e, "firstName")} />
          <Input id="lastName" name="lastName" type="text" value={personalInfo.lastName} placeholder="Last Name" handleInputChange={e => updatePersonalInfo(e, "lastName")} />
          <Input id="tel" name="tel" type="tel" value={personalInfo.tel} placeholder="Tel" handleInputChange={e => updatePersonalInfo(e, "tel")} />
          <Input id="email" name="email" type="email" value={personalInfo.email} placeholder="Email" handleInputChange={e => updatePersonalInfo(e, "email")} />
          <Input id="website" name="website" type="url"  value={personalInfo.website} placeholder="Website" handleInputChange={e => updatePersonalInfo(e, "website")} />
          <Input id="linkedin" name="linkedin" type="url" value={personalInfo.linkedin} placeholder="LinkedIn" handleInputChange={e => updatePersonalInfo(e, "linkedin")} />
        </Subsection>
        <Subsection heading="Education">
          <Input id="institutionName" name="institutionName" type="text" value={education.ed0.institutionName} placeholder="Institution Name" handleInputChange={e => updateEducation(e, "institutionName", "ed0") }/>
          <DegreeType name="degree" value={education.ed0.degree} handleInputChange={e => updateEducation(e, "degree", "ed0")}/>
          <Input id="major" name="major" type="text" value={education.ed0.major} placeholder="Major" handleInputChange={e => updateEducation(e, "major", "ed0") }/>
          <Input id="minor" name="minor" type="text" value={education.ed0.minor} placeholder="Minor" handleInputChange={e => updateEducation(e, "minor", "ed0") }/>
          <Years name="from" value={education.ed0.from} placeholder="Starting Year" handleInputChange={e => updateEducation(e, "from", "ed0")} />
          <Years name="to" value={education.ed0.to} placeholder="Ending Year" handleInputChange={e => updateEducation(e, "to", "ed0")} />
          <Input id="gpa" name="gpa" type="text" value={education.ed0.gpa} placeholder="Cum. GPA" handleInputChange={e => updateEducation(e, "gpa", "ed0") }/>
          <Input id="honors" name="honors" type="text" value={education.ed0.honors} placeholder="Honors" handleInputChange={e => updateEducation(e, "honors", "ed0") } />
          <button onClick={renderNewEducation} className="bg-zinc-300">Add</button>
        </Subsection>
      </Section>

      <Section>
        <div>
            <h1 className="text-5xl">{`${_.upperCase(personalInfo.firstName)} ${_.upperCase(personalInfo.lastName)}`}</h1>
            <p>{personalInfo.tel}</p>
            <p>{_.toLower(personalInfo.email)}</p>
            <p>{_.toLower(personalInfo.website)}</p>
            <p>{_.toLower(personalInfo.linkedin)}</p>
        </div>
      </Section>
    </div>
  );
}

export default Main;
