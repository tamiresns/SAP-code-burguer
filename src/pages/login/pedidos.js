import React from 'react';
import Logo from '../../img/burger.png'
import { Link } from 'react-router-dom';
import IconeMais from '../../img/icon-mais.png';
import IconeOlho from '../../img/icon-olho.png';
import './pedidos.css';

 const Pedidos = () => {
    return (
        <div className="pedidos-container">
          <h1 className="title">codeBurger</h1>
          <img src={Logo} alt="Logo code burger" className="logo-burger"/>
          <div className="button-pedidos">
            <button className="btn-pedidos">
              <Link to="/cadastrar-pedido" className="btn-pedido">Novo Pedido</Link>
              <img src={IconeMais} alt="Icone Mais" className="icone-mais"/>
            </button>
            <button className="btn-pedidos">
              <Link to="/ver-pedido" className="btn-pedido">Ver Pedido</Link>
              <img src={IconeOlho} alt="Icone Olho" className="icone-olho"/>
            </button>
          </div>
        </div>
      );
}

export default Pedidos;
