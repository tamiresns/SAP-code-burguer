import React from 'react';

const ButtonMenuBreakfast = ({ label, onClick }) => {
  return (
    <button type="submit" onClick = {onClick} className="button-breakfast-day">
      {label} 
    </button>
  );
};
const ButtonMenuDia = ({ label, onClick }) => {
  return (
    <button type="submit" onClick = {onClick} className="button-breakfast-day">
      {label} 
    </button>
  );
};
export default (ButtonMenuBreakfast, ButtonMenuDia);