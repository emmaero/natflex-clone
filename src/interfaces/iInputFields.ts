export default interface iInputFields {
  options: {
    label: string;
    instructions: string;
    type: string;
  };
  state: [getter: string, setter: Function];
}
