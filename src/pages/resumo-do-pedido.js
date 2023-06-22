import React from 'react';
import Header from '../components/header.js';
import { Link } from 'react-router-dom';
import './resumo-do-pedido.css';
import Title from '../components/title-header.js';


const Resumo = () => {
    return (
        <div className="resumo-container">
            <Header />
            <Title text="Resumo do pedido" className="title-resumo"/>
            <div className="box-resumo">
            <div class="box-resumo">
            <p>Mesa 1</p>
            <p>Nome do cliente: Joleuson Silva</p>
            <p>Itens:</p>
            <ul>
           <p>1 Hambúrguer simples</p>
           <p>1 Hambúrguer duplo</p>
           <p>1 Água 500ml</p>
           </ul>
           <p>Total da Compra: R$67,00</p>
           </div>
            </div>
            <div className="button-voltar btn-voltar">
    <button>
        <Link to="/cadastrar-pedido">Voltar</Link>
    </button>
</div>
 <button type="submit" className="btn-enviar" label="Enviar Pedido">
    Enviar Pedido
</button>
</div>
 )
};  
          
export default Resumo;

