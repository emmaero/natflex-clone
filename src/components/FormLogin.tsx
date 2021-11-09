import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import fields from "../data/field-login.json";
import { signIn } from "../scripts/authentication";
import { getDocument } from "../scripts/firestore";
import { useAuth } from "../states/AuthProvider";
import { useUser } from "../states/UserProvider";
import LoginFormDetails from "./LoginFormDetails";
import InputField from "./shared/InputField";

export default function FormLogin() {
  // Global state
  
  const { setUser } = useUser();

  const { setIsLogged } = useAuth();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(email, password);
    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }
    async function onSuccess(uid: string) {
      const document = await getDocument("users", uid);
      setUser(document);
      setIsLogged(true);
      history.push("/");
    }
    function onFailure(message: string) {
      setErrorMessage(message);
    }
  return (
    <div className="login-body">
      <div className="login">
        <h1 className="login__title">Sign In</h1>
        <p>{errorMessage}</p>
        <InputField state={[email, setEmail]} options={fields.email} />
        <InputField state={[password, setPassword]} options={fields.password} />
        <button onClick={onSubmit} className="login__sign-in" type="button">
          Sign In
        </button>
        <LoginFormDetails />
      </div>
    </div>
  );
}
