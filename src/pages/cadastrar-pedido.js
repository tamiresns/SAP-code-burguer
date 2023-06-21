import React, { useState } from 'react';
import './cadastrar-pedido.css';
import ButtonMenuBreakfast from '../components/buttonMenu.js';
import ButtonMenuDia from '../components/buttonMenu.js';
import Header from '../components/header.js';
import Title from '../components/titleHeader';


const CadastrarPedido = () => {
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);

  const handleClick = (botao) => {
    setBotaoClicado(botao);
    if(botaoClicado === 'Café da Manhã') {
      setProdutosRelacionados(['Pão de Queijo', 'Café Preto', 'Croissant']);
    } else if(botaoClicado === 'Menu do Dia') {
      setProdutosRelacionados(['Prato Principal', 'Acompanhamento', 'Sobremesa']);
    }
  }
    return (
      <section>
          <Header/>
          <Title text="Cadastrar Pedido"/>
        <div className="menu-container">
          <h1 className="title-menu">Menu</h1>
          <div className="button-menu">
            <ButtonMenuBreakfast label ="Café da Manhã" onClick={() => handleClick('Café da Manhã')}/>
            <ButtonMenuDia label="Menu do Dia" onClick={() => handleClick('Menu do Dia')}/>
          </div>
          <div className="produtos-relacionados">
            <ul>
              {produtosRelacionados.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        </section>

    )

}
export default CadastrarPedido