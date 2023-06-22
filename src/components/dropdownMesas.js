import React from 'react';

const DropdownMenu = ({ label, onClick }) => {
  return (
    <button type="submit" onClick = {onClick} className="button-breakfast-day">
      {label} 
    </button>
  );
};

export default (DropdownMenu);