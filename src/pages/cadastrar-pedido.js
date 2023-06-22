import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMenuBreakfast from '../components/buttonMenu.js';
import ButtonMenuDia from '../components/buttonMenu.js';
import Header from '../components/header.js';
import Title from '../components/title-header.js';
import './cadastrar-pedido.css';
import DropdownMenu from '../components/dropdownMesas.js';

const CadastrarPedido = () => {
  const [botaoClicado, setBotaoClicado] = useState(null);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);

  const handleClick = (botao) => {
    setBotaoClicado(botao);
    if(botaoClicado === 'Café da Manhã') {
      setProdutosRelacionados([
        { nome: 'Pão de queijo', preco: 2.5, quantidade: 0 },
        { nome: 'Misto quente', preco: 10, quantidade: 0 },
        { nome: 'Croissant', preco: 5, quantidade: 0 },
        { nome: 'X-egg', preco: 15, quantidade: 0 },
        { nome: 'X-dog', preco: 15, quantidade: 0 },
        { nome: 'Água 500ml', preco: 5, quantidade: 0 },
        { nome: 'Sucos polpa', preco: 8, quantidade: 0 },
        { nome: 'Suco de laranja', preco: 12, quantidade: 0 },
        { nome: 'Refrigerante 500ml', preco: 10, quantidade: 0 },
        { nome: 'Milk shake firebase', preco: 15, quantidade: 0 },
        
      ]);
    } else if(botaoClicado === 'Menu do Dia') {
      setProdutosRelacionados([
        { nome: 'X-code tudo', preco: 30, quantidade: 0 },
        { nome: 'X-javascript', preco: 35, quantidade: 0 },
        { nome: 'X-html', preco: 25, quantidade: 0 },
        { nome: 'X-css', preco: 25, quantidade: 0 },
        { nome: 'Sobremesa react', preco: 20, quantidade: 0 },
        { nome: 'Água 500ml', preco: 5, quantidade: 0 },
        { nome: 'Sucos polpa', preco: 8, quantidade: 0 },
        { nome: 'Suco de laranja', preco: 12, quantidade: 0 },
        { nome: 'Refrigerante 500ml', preco: 10, quantidade: 0 },
        { nome: 'Milk shake firebase', preco: 15, quantidade: 0 },
      ]);
      }
  }
  const handleDecrement = (index) => {
    setProdutosRelacionados((prevProdutos) => {
      const updatedProdutos = [...prevProdutos];
      if (updatedProdutos[index].quantidade > 0) {
        updatedProdutos[index].quantidade--;
      }
      return updatedProdutos;
    });
  };

  const handleIncrement = (index) => {
    setProdutosRelacionados((prevProdutos) => {
      const updatedProdutos = [...prevProdutos];
      updatedProdutos[index].quantidade++;
      return updatedProdutos;
    });
  };
    return (
      <section>
        <Header />
        <Title text="Cadastrar Pedido" />
        <DropdownMenu />
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
                        <span className="produto-preco">Preço: R$ {produto.preco.toFixed(2)}</span>
                      </div>
                      <div className="btn-quantidade">
                        <button  onClick={() => handleDecrement(i)}>-</button>
                        <span>{produto.quantidade}</span>
                        <button onClick={() => handleIncrement(i)}>+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="btn-add-pedido">
            <Link to="/resumo-do-pedido" className="btn-add-pedido">Adicionar Pedido</Link>
          </button>
        </div>
      </section>
    )
}

export default CadastrarPedido