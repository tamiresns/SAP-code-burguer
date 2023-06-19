import React from 'react';
import ImgLogo from '../components/imgLogo.js';
import { Link } from 'react-router-dom';
import './resumo-do-pedido.css';


const Resumo = () => {
    return (
        <div className="resumo-container">
            <ImgLogo />
            <h1 className="title-resumo">Resumo do Pedido</h1>
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
                <Link to="/Cadastrar-pedido" className="btn-voltar">Voltar</Link>
                </button>
            </div>
            <div className="button-enviar">
                <button type="submit" className="btn-enviar" onClick="onClick" label="Enviar Pedido">
                alert('Pedido enviado com sucesso')
                </button>
            </div>
        </div>
    )
};
          
export default Resumo;