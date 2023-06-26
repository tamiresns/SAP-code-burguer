import React, { useState } from 'react';

function Dropdown({ options, handleChange }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    handleChange(option);
    setMenuOpen(false);
  };

  return (
    <section className='container-dropdown display-flex-column'>
      <button className='btn-dropdown color-white-and-border' onClick={toggleMenu}>Número da Mesa</button>
      {isMenuOpen && (
        <ul className='list-dropdown display-flex-column color-white-and-border'>
          {options.map((option) => (
            <li key={option.id} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
        ))}        
        </ul>
      )}

      {selectedOption && (
        <div className='select-table'>
          <p>Opção selecionada: {selectedOption.label}</p>
        </div>
      )}

    </section>
  );
}
export default Dropdown;
