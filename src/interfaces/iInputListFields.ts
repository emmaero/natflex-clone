export default interface iInputListFields {
  options: {
    label: string;
    instructions: string;
    type: string;
  };
  state: [getter: string[], setter: Function];
}
