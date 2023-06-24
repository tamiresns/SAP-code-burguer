import React from 'react';
import Header from '../components/header.js';
import { Link } from 'react-router-dom';
import './resumo-do-pedido.css';
import Title from '../components/title-header.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const enviarPedido = () => {
    toast.success('Pedido enviado com sucesso!');
}

const Resumo = () => {
    return (
        <div className="resumo-container">
            <Header />
            <Title text="Resumo do pedido" className="title-resumo"/>
            <div className="box-resumo">
                <h1>Mesa 1</h1>
                <h2>Itens:</h2>
                <p>1 Hambúrguer simples</p>
                <p>1 Hambúrguer duplo</p>
                <p>1 Água 500ml</p>
                <h3>Total da Compra: R$67,00</h3>
            </div>
            <div className="btn-voltar">
                <button className="button-voltar">
                    <Link to="/cadastrar-pedido" className="link-voltar">Voltar</Link>
                </button>
            </div>
            <button 
                type="submit" 
                className="btn-enviar" 
                onClick={enviarPedido} 
                label="Enviar Pedido">
                Enviar Pedido
            </button>
            <ToastContainer  autoClose={3000}/>
        </div>
    )
};  

export default Resumo;

