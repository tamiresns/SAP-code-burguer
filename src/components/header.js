import React from 'react';
import { Link } from 'react-router-dom';
import minhaImagem from '../img/icon-back.png';
import ImgLogo from './imgLogo';

const Header = ({ onClick }) => {
    return (
        <section className='section-header'>
            <div className='logo-and-iconback'>
                <Link to='/pedidos'>
                    <img src={minhaImagem} className='icon-back item-left' alt="ícone de voltar" />
                </Link>
                <ImgLogo className="logo-pequena item-center"/>
                <div className="spacer"></div>
            </div>
        </section>
    );
  };

export default Header;