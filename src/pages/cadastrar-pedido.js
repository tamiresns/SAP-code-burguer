import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMenuBreakfast from '../components/buttonMenu.js';
import ButtonMenuDia from '../components/buttonMenu.js';
import Header from '../components/header.js';
import Title from '../components/title-header.js';
import './cadastrar-pedido.css';
import Dropdown from '../components/dropdownMesas.js';

const CadastrarPedido = () => {
  const options = [
    { id: 1, label: 'Mesa 1' },
    { id: 2, label: 'Mesa 2' },
    { id: 3, label: 'Mesa 3' },
    { id: 4, label: 'Mesa 4' },
    { id: 5, label: 'Mesa 5' },
    { id: 6, label: 'Mesa 6' },
  ];

  const [botaoClicado, setBotaoClicado] = useState(null);
  const [produtosRelacionados, setProdutosRelacionados] = useState([]);
  const [produtosSelecionados, setProdutosSelecionados] = useState([]);
  const [numeroMesa, setNumeroMesa] = useState('');

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
  const handleDecrement = (index, produto) => {
    setProdutosRelacionados((prevProdutos) => {
      const updatedProdutos = [...prevProdutos];
      if (updatedProdutos[index].quantidade > 0) {
        updatedProdutos[index].quantidade--;
      }
      return updatedProdutos;
    });
    setProdutosSelecionados((prevProdutos) => {
      const produtoJaFoiSelecionado = prevProdutos.some((item) => item.nome === produto.nome);
      if (produtoJaFoiSelecionado) {
        const updatedProdutos = prevProdutos.map((item) => {
          if (item.nome === produto.nome) {
            return { ...item, quantidade: item.quantidade - 1 };
          }
          return item;
        });
        return updatedProdutos.filter((item) => item.quantidade > 0);
      } else {
        return prevProdutos;
      }
    });
     console.log(produtosSelecionados);
  };

  const handleIncrement = (index, produto) => {
    setProdutosRelacionados((prevProdutos) => {
      const updatedProdutos = [...prevProdutos];
      updatedProdutos[index].quantidade++;
      return updatedProdutos;
    });
    setProdutosSelecionados((prevProdutos) => {
      const produtoJaFoiSelecionado = prevProdutos.some((item) => {
        return item.nome === produto.nome
      })
      if(produtoJaFoiSelecionado) {
        const updatedProdutos = prevProdutos.map((item) => {
          if (item.nome === produto.nome) {
            return { ...item, quantidade: item.quantidade + 1 };
          }
          return item;
        });
        return updatedProdutos;
      } else {
        return [...prevProdutos, { ...produto, quantidade: 1 }];
        }
    });
    console.log(produtosSelecionados)
  };

  const calcularValorTotal = () => {
    let total = 0;
    produtosSelecionados.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return total;
  };
  const handlePrint = () => {
    const pedido = {
      produtos: produtosSelecionados,
      quantidade: produtosSelecionados.length,
      numeroMesa: numeroMesa,
      valorTotal: calcularValorTotal(),
    };
    console.log(pedido);
    window.localStorage.setItem("pedido", JSON.stringify(pedido));
  }
  
    return (
      <section>
        <Header />
        <Title text="Cadastrar Pedido" />
        <Dropdown options={options} handleChange={(option) => setNumeroMesa(option.id)} />
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
                        <button onClick={() => handleDecrement(i, produto)}>-</button>
                        <span>{produto.quantidade}</span>
                        <button onClick={() => handleIncrement(i, produto)}>+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="btn-add-pedido" onClick ={handlePrint}>
            <Link to={{ 
              pathname: "/resumo-do-pedido" 
              }} 
              className="btn-add-pedido">
              Adicionar Pedido
            </Link>
          </button>
        </div>
      </section>
    ) 
}

export default CadastrarPedido