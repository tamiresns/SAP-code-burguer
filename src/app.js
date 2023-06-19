import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.js';
import Pedidos from './pages/login/pedidos.js';
import CadastrarPedido from './pages/cadastrar-pedido.js';
import VerPedido from './pages/ver-pedido.js';
import './app.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/Pedidos" element={<Pedidos />}/>
        <Route path="/Cadastrar-pedido" element={<CadastrarPedido />}/>
        <Route path="/Ver-pedido" element={<VerPedido />}/>
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
