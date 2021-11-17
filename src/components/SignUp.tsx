import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import fields from "../data/field-sign-up.json";
import { createAccount } from "../scripts/authentication";
import { createDocumentWithId } from "../scripts/firestore";
import { useAuth } from "../states/AuthProvider";
import { useUser } from "../states/UserProvider";
import InputField from "./shared/InputField";
export default function SignUp() {
  // Global state
  const { setUser } = useUser();
  const { setIsLogged } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setErrorMessage("");
    const account = await createAccount(email, password);
    //@ts-ignore
    account.isCreated ? onAddItem(account.payload) : onFailure(account.payload);
  }
  async function onAddItem(uid: string) {
    const newUser = {
      name: name,
      email: email,
    };
    await createDocumentWithId("users", uid, newUser);
    setUser(newUser);
    setIsLogged(true);
    history.push("/");
  }
  function onFailure(message: string) {
    setErrorMessage(message);
  }
  return (
    <form className="register" onSubmit={onSubmit}>
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
            <span>{errorMessage}</span>
            <Link to="/login-help" className="link-forgot-password">
              Forgot your password?
            </Link>
            <button className="sign-up-button" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
