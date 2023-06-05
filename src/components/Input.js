import React from 'react';

const Input = ({ label, type, value, placeholder, onChange, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={onChange} required={required} />
    </div>
  );
};

export default Input;