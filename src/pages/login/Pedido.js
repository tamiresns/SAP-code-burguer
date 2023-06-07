import React from 'react';
import Button from '../../components/Button';
import Logo from '../../img/burger.png'
// import IconeMais from '../../img/icon-mais.png'
import { Link } from 'react-router-dom';
import './Pedido.css';


 const Pedidos = () => {
    return (
        <div className="pedidos-container">
          <h1 className="title">codeBurger</h1>
          <img src={Logo} alt="Logo code burger" className="logo-burger"></img>
          <div className="button-pedidos">
            <Link to="/Cadastrar-pedido">
            <div className="botao-novo-pedido">
            {/* <img src={IconeMais} alt="Icone Mais" className="icone-mais"></img> */}
            <Button 
              className="novo-pedido"
              label="Novo Pedido" 
            />
            </div>
            </Link>
            <div className="botao-ver-pedido">
            <Button 
              label="Ver Pedido"
              onClick='' 
            />
            </div>
          </div>
        </div>
      );
}

export default Pedidos;
