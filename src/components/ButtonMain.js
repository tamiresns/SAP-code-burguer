import React from 'react';

const ButtonMain = ({label, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className="button-main">
        {label}
    </button>
  );
};

export default ButtonMain;