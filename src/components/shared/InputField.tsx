import { FormEvent, useEffect, useState } from "react";
import iInputFields from "../../interfaces/iInputFields";

export default function InputField({ options, state }: iInputFields) {
  const [getter, setter] = state;
  const { instructions, label, type } = options;
  const [fieldIsValid, setFieldIsValid] = useState(false);
  const [fieldTouched, setFieldTouched] = useState(false);
  function blurHandler() {
    setFieldTouched(true);
    if (getter.trim() === "") {
      setFieldIsValid(false);
    }
  }
  function inputChangeHandler(event: FormEvent) {
    //@ts-ignore
    setter(event.target.value);
    //@ts-ignore
    if (event.target.value.trim() !== "") {
      setFieldIsValid(true);
    }
  }
  useEffect(() => {
    if (fieldIsValid) return () => {};
  }, []);
  const inputIsInvalid = !fieldIsValid && fieldTouched;
  const inputClass = inputIsInvalid ? "login__group__input__error" : "";
  const inputTouchClass = fieldTouched ? "login__group__input__touch" : "";
  return (
    <div className="login__group">
      <input
        required
        className={`login__group__input ${inputClass} ${inputTouchClass}`}
        type={type}
        value={getter}
        onBlur={blurHandler}
        onChange={inputChangeHandler}
      />
      <label className="login__group__label">{label}</label>
      <p className="input-error">{inputIsInvalid && instructions}</p>
    </div>
  );
}
