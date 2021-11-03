import { useState } from "react";
import fields from "../data/field-sign-up.json";
import InputField from "./shared/InputField";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <form className="register">
      <div className="register__container">
        <div className="register__container__header">
          <span className="stepIndicator">STEP 1 OF 3</span>
          <h1 className="heading">
            Create a password to start your membership
          </h1>
          <div>
            <div className="context-row">
              Just a few more steps and you're finished!
            </div>
            <div className="context-row">We hate paperwork, too.</div>
            <InputField state={[email, setEmail]} options={fields.email} />
            <InputField
              state={[password, setPassword]}
              options={fields.password}
            />
            <InputField state={[name, setName]} options={fields.name} />
            <button className="sign-up-button" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
