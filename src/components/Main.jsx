import React from "react";
import Section from "./Section";
import Input from "./Input";
import Subsection from "./Subsection";
import _ from "lodash";

function Main() {
  
  const [personalInfo, setPersonalInfo] = React.useState({firstName: "John", lastName: "Doe", tel: "555-555-5555", email: "johndoe@email.com", website: "johndoe.com", linkedin: "linkedin.com/in/johndoe"})

  function updatePersonalInfo(e, key) {
    setPersonalInfo({...personalInfo, [key]: e.target.value});
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
