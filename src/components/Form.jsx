import React from "react";
import Section from "./Section";
import Input from "./Input";
import Subsection from "./Subsection";
import _ from "lodash";

function Form() {
  
  const [name, setName] = React.useState({firstName: "John", lastName: "Doe"})

  return (
    <div className="flex justify-center items-center">
      <Section>
        <Subsection heading="Personal Information">
          <Input id="firstName" name="firstName" type="text" value={name.firstName} placeholder="First Name" handleInputChange={e => setName({...name, firstName: e.target.value})} />
          <Input id="lastName" name="lastName" type="text" value={name.lastName} placeholder="Last Name" handleInputChange={e => setName({...name, lastName: e.target.value})} />
          <Input type="tel" name="tel" placeholder="Tel" />
          <Input type="email" name="email" placeholder="Email" />
          <Input type="url" name="website" placeholder="Website" />
          <Input type="url" name="linkedIn" placeholder="LinkedIn" />
        </Subsection>
      </Section>
      <Section>
        <div>
            <h1 className="text-5xl">{`${_.upperCase(name.firstName)} ${_.upperCase(name.lastName)}`}</h1>
            <p>052-7470330</p>
            <p>razlevio@icloud.com</p>
            <p>github.com/razlevio</p>
            <p>linkedin.com/in/razlevi</p>
        </div>
      </Section>
    </div>
  );
}

export default Form;
