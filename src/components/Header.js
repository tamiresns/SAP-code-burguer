import React from 'react';
import minhaImagem from '../img/icon-back.png';
import ImgLogo from '../components/ImgLogo';
import Title from '../titleHeader.js';

const Header = ({ onClick }) => {
    return (
        <section className='section-header'>
            <div className='logo-and-iconback'>
                <img src={minhaImagem} className='icon-back item-left' alt="ícone de voltar" />
                <ImgLogo className="logo-pequena item-center"/>
                <div className="spacer"></div>
            </div>
            <Title text="Cadastrar Pedido"/>
        </section>
    );
  };

export default Header;