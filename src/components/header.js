import React from 'react';
import minhaImagem from '../img/icon-back.png';
import ImgLogo from './imgLogo';


const Header = ({ onClick }) => {
    return (
        <section className='section-header'>
            <div className='logo-and-iconback'>
                <img src={minhaImagem} className='icon-back item-left' alt="ícone de voltar" />
                <ImgLogo className="logo-pequena item-center"/>
                <div className="spacer"></div>
            </div>
        </section>
    );
  };

export default Header;