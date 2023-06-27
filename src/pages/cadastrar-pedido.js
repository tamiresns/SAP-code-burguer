import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonMenuBreakfast from '../components/buttonMenu.js';
import ButtonMenuDia from '../components/buttonMenu.js';
import Header from '../components/header.js';
import Title from '../components/title-header.js';
import './cadastrar-pedido.css';
import Dropdown from '../components/dropdownMesas.js';
import { getProducts } from '../api/products/getProducts.js';

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataProducts = async () => {
      try {
        const response = await getProducts();
        console.log(response);
        setProducts(response);
      }
      catch(error) {
        console.log(error);
      }
    }
    dataProducts();
  },[])

  const handleClick = (botao) => {
    setBotaoClicado(botao);
    if(botaoClicado === 'Café da Manhã') {
      const cafeDaManha = products.filter((product) => product.type === 'Café da Manhã');
      setProdutosRelacionados(cafeDaManha);
    } else if(botaoClicado === 'Menu do Dia') {
      const menuDoDia = products.filter((product) => product.type === 'Menu do Dia');
      setProdutosRelacionados(menuDoDia);
      }
  }
  const handleDecrement = (index, produto) => {
    setProdutosRelacionados((prevProdutos) => {
      const updatedProdutos = [...prevProdutos];
      if (updatedProdutos[index].quantity > 0) {
        updatedProdutos[index].quantity--;
      }
      return updatedProdutos;
    });
    setProdutosSelecionados((prevProdutos) => {
      const produtoJaFoiSelecionado = prevProdutos.some((item) => item.name === produto.name);
      if (produtoJaFoiSelecionado) {
        const updatedProdutos = prevProdutos.map((item) => {
          if (item.name === produto.name) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        return updatedProdutos.filter((item) => item.quantity > 0);
      } else {
        return prevProdutos;
      }
    });
     console.log(produtosSelecionados);
  };

  const handleIncrement = (index, produto) => {
    setProdutosRelacionados((prevProdutos) => {
      const updatedProdutos = [...prevProdutos];
      updatedProdutos[index].quantity++;
      return updatedProdutos;
    });
    setProdutosSelecionados((prevProdutos) => {
      const produtoJaFoiSelecionado = prevProdutos.some((item) => {
        return item.name === produto.name
      })
      if(produtoJaFoiSelecionado) {
        const updatedProdutos = prevProdutos.map((item) => {
          if (item.name === produto.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return updatedProdutos;
      } else {
        return [...prevProdutos, { ...produto, quantity: 1 }];
        }
    });
    console.log(produtosSelecionados)
  };

  const calcularValorTotal = () => {
    let total = 0;
    produtosSelecionados.forEach((produto) => {
      total += produto.price * produto.quantity;
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
                        <span className="produto-nome">{produto.name}</span>
                        <span className="produto-preco">Preço: R$ {produto.price.toFixed(2)}</span>
                      </div>
                      <div className="btn-quantidade">
                        <button onClick={() => handleDecrement(i, produto)}>-</button>
                        <span>{produto.quantity}</span>
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