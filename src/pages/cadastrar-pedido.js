import React from 'react';
import './cadastrar-pedido.css';
import ButtonMenuBreakfast from '../components/buttonMenu.js';
import ButtonMenuDia from '../components/buttonMenu.js';



const CadastrarPedido = () => {
    return (
        <div className="menu-container">
          <h1 className="title-menu">Menu</h1>
          <div className="button-menu">
            <ButtonMenuBreakfast label ="Café da Manhã" />
            <ButtonMenuDia label="Menu do Dia" />
            
          </div>
        </div>
    )

}
export default CadastrarPedido