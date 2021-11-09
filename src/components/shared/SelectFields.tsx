import iSelectFields from "../../interfaces/iSelectField";
export default function SelectFields({ options, label, state }: iSelectFields) {
  const [getter, setter] = state;
  const selectOptions = options.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <div className="form__group">
      <label>
        {label}
        <select
          value={getter}
          className="login__group__input"
          onChange={(event) => setter(event.target.value)}
        >
          {selectOptions}
        </select>
      </label>
    </div>
  );
}
