import React, { useState } from 'react';
import './cadastrar-pedido.css';
import ButtonMenuBreakfast from '../components/buttonMenu.js';
import ButtonMenuDia from '../components/buttonMenu.js';
import Header from '../components/header.js';
import Title from '../components/title-header.js';

const CadastrarPedido = () => {
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);

  const handleClick = (botao) => {
    setBotaoClicado(botao);
    if(botaoClicado === 'Café da Manhã') {
      setProdutosRelacionados([
        { nome: 'Pão de queijo', preco: 2.5 },
        { nome: 'Misto quente', preco: 10 },
        { nome: 'Croissant', preco: 5 },
        { nome: 'X-egg', preco: 15 },
        { nome: 'X-dog', preco: 15 },
        { nome: 'Água 500ml', preco: 5 },
        { nome: 'Sucos polpa', preco: 8 },
        { nome: 'Suco de laranja', preco: 12 },
        { nome: 'Refrigerante 500ml', preco: 10 },
        { nome: 'Milk shake firebase', preco: 15 },
        
      ]);
    } else if(botaoClicado === 'Menu do Dia') {
      setProdutosRelacionados([
        { nome: 'X-code tudo', preco: 30 },
        { nome: 'X-javascript', preco: 35 },
        { nome: 'X-html', preco: 25 },
        { nome: 'X-css', preco: 25 },
        { nome: 'Sobremesa react', preco: 20 },
        { nome: 'Água 500ml', preco: 5 },
        { nome: 'Sucos polpa', preco: 8 },
        { nome: 'Suco de laranja', preco: 12 },
        { nome: 'Refrigerante 500ml', preco: 10 },
        { nome: 'Milk shake firebase', preco: 15 },
      ]);
      }
  }
    return (
      <section>
        <Header />
        <Title text="Cadastrar Pedido" />
        <div className="menu-container">
          <h1 className="title-menu">Menu</h1>
          <div className="button-menu">
            <ButtonMenuBreakfast label ="Café da Manhã" onClick={() => handleClick('Café da Manhã')}/>
            <ButtonMenuDia label="Menu do Dia" onClick={() => handleClick('Menu do Dia')}/>
          </div>
          <div className="produtos-relacionados">
            {produtosRelacionados.length > 0 && (
              <ul>
                {produtosRelacionados.map((produto, i) => (
                  <li key={i}>
                    <div className="produto-container">
                      <div className="produto-info">
                        <span className="produto-nome">{produto.nome}</span>
                        <span className="produto-preco">Preço: R$ {produto.preco}</span>
                      </div>
                      <div className="btn-quantidade">
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    )
}

export default CadastrarPedido