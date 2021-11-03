import iInputFields from "../../interfaces/iInputFields";

export default function InputField({ options, state }: iInputFields) {
  const [getter, setter] = state;
  const { instructions, label, type } = options;
    return (
      <div className="login__group">
        <input
          className="login__group__input"
          type={type}
          value={getter}
          onChange={(event) => setter(event.target.value)}
        />
        <label className="login__group__label">{label}</label>
        <p className="inputError">{instructions && instructions}</p>
      </div>
    );
}
