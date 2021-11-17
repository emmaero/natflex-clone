import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { reset } from "../scripts/authentication";
import InputField from "./shared/InputField";
import fields from "../data/field-sign-up.json";

export default function LoginHelp() {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  // Methods
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const emailPassword = await reset(email);
    setMessage(emailPassword.payload);
  }

  return (
    <div className="register">
      <div className="register__container">
        <div className="">
          <h2 className="heading">Reset password</h2>
        </div>
        <form onSubmit={onSubmit}>
          <InputField state={[email, setEmail]} options={fields.email} />

          <p>{message}</p>
          <div className="">
            <button type="submit" className="sign-up-button">
              Reset Password
            </button>
          </div>
          <Link className="link-forgot-password" to="/login">
            Log me in
          </Link>
        </form>
      </div>
    </div>
  );
}
