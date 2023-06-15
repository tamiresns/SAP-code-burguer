import React from 'react';

const Input = ({type, placeholder, required, onChange}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} required={required}/>
    </div>
  );
};

export default Input;