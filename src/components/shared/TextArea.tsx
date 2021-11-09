import React from 'react'
import iInputFields from '../../interfaces/iInputFields';

export default function TextArea({ options, state }: iInputFields) {
  const [getter, setter] = state;
  const { instructions, label, type } = options;
 return (
   <div className="login__group">
     <textarea name={type} cols={40} rows={4}

       className="login__group__text-area"

       value={getter}
       onChange={(event) => setter(event.target.value)}
     />
     <label className="login__group__label">{label}</label>
     <p className="inputError">{instructions && instructions}</p>
   </div>
 );
}
