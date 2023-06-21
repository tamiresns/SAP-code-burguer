import React from 'react';
import Header from '../components/Header.js';
import { Link } from 'react-router-dom';
import './resumo-do-pedido.css';
import Title from '../components/titleHeader';


const Resumo = () => {
    return (
        <div className="resumo-container">
            <Header />
            <Title text="Resumo do pedido" className="title-resumo"/>
            <div class="container">
            <div className="box-resumo">
                <p>Mesa 1 
                Nome do cliente: 
                Joleuson Silva 

                Itens:
                1 Hambúrguer simples
                1 Hambúrguer duplo 
                1 Água 500ml

                Total da Compra:  R$67,00
                </p>
            </div>
            <div className="button-voltar">
                <button>
                <Link to="/cadastrar-pedido" className="btn-voltar">Voltar</Link>
                </button>
            </div>
            <div className="button-enviar">
                <button type="submit" className="btn-enviar" onClick="onClick" label="Enviar Pedido">
                    Enviar Pedido
                </button>
            </div>  
        </div>
    </div>
    )
};  //como faz o alert?  alert('Pedido enviado com sucesso') 

          
export default Resumo;

