import React from "react";
import Section from "./Section";
import Input from "./Input";
import Subsection from "./Subsection";
import Years from "./Years"
import DegreeType from "./DegreeType";
import _ from "lodash";

function Main() {
  const [personalInfo, setPersonalInfo] = React.useState({});
  const [education, setEducation] = React.useState({ed1: {institutionName: "harvard university", degree: "BSc", major:"Computer Sceince", minor:"Entrepreneurship", from:"2020", to:"2024", gpa:"4.0", honors:""}});

  function updatePersonalInfo(e, key) {
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  };

  function updateEducation(e, key, educationID) {
    const modified = education[educationID];
    modified[key] = e.target.value;
    setEducation({...education, [educationID]: modified});
  }

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
          <Input id="institutionName" name="institutionName" type="text" value={education.ed1.institutionName} placeholder="Institution Name" handleInputChange={e => updateEducation(e, "institutionName", "ed1") }/>
          <DegreeType name="degree" handleInputChange={e => updateEducation(e, "degree", "ed1")}/>
          <Input id="major" />
          <Input id="minor" />
          <Years name="from" placeholder="Starting Year" handleInputChange={e => setEducation([...education, e.target.value])} />
          <Years name="to" placeholder="Ending Year" handleInputChange={e => setEducation([...education, e.target.value])} />
          <Input id="gpa" />
          <Input id="honors" />
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
