import React from 'react';

const Input = ({ label, type, placeholder, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
};

export default Input;