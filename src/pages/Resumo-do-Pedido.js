import React from 'react';
import Logo from '../../img/burger.png';
import { Link } from 'react-router-dom';
import './Resumo-do-Pedido.css';


const Resumo () => {
    return (
        <div className="resumo-container">
          <h1 className="title">Resumo do Pedido</h1>
          <img src={Logo} alt="Logo code burger" className="logo-burger"/>

    <div className="box">

Mesa 1
Nome do cliente: 
Joleuson Silva 

Itens:
1 Hambúrguer simples
1 Hambúrguer duplo 
1 Água 500ml

Total da Comprar  R$67,00

</div>


<div className="button-pedidos">
            <button>
<Link to="/Cadastrar-pedido" className="btn-voltar">Voltar</Link>

const handleClick = () => {
    alert('Pedido enviado com sucesso');
  };

  return (
    <div>
      <Link to="/=" className="btn-enviar" onClick={handleClick}>
        Enviar Pedido
      </Link>
    </div>
</button>
          </div>

           
            );
          }
          

export default Resumo;
