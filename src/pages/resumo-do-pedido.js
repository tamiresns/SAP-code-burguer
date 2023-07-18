import React from 'react';
import Header from '../components/header.js';
import { Link } from 'react-router-dom';
import './resumo-do-pedido.css';
import Title from '../components/title-header.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postOrders } from '../api/orders/postOrders.js';

const enviarPedido = (table, products) => {
    postOrders(table, products)
    .then((data) => {
        if(data.ok === false) {
            return toast.error('Erro ao enviar o pedido')
        }
        toast.success('Pedido enviado com sucesso!');
    })
    .catch((error) => {
        toast.error(error);
    });
}
    
const Resumo = () => {
    const pedido = JSON.parse(window.localStorage.getItem("pedido"));

    return (
        <div className="resumo-container">
            <Header />
            <Title text="Resumo do Pedido" className="title-resumo"/>
            <div className="box-resumo">
                <h1>Mesa {pedido.numeroMesa}</h1>
                <h2>Itens:</h2>
                {pedido.produtos.map((produto, index) => (
                <p key={index}>{produto.quantity} {produto.name}</p>
                ))}
                <h3>Total da Compra: R$ {pedido.valorTotal}</h3>
            </div>
            <div className="btn-voltar">
                <button className="button-voltar">
                    <Link to="/cadastrar-pedido" className="link-voltar">Voltar</Link>
                </button>
            </div>
            <button 
                type="submit" 
                className="btn-enviar" 
                onClick={() => enviarPedido(pedido.numeroMesa, pedido.produtos)} 
                label="Enviar Pedido">
                Enviar Pedido
            </button>
            <ToastContainer  autoClose={3000}/>
        </div>
    )
};  

export default Resumo;

