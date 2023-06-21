import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login.js';
import Pedidos from './pages/login/pedidos.js';
import CadastrarPedido from './pages/cadastrar-pedido.js';
// import VerPedido from './pages/ver-pedido.js';
import Resumo from './pages/resumo-do-pedido.js';
import './app.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/pedidos" element={<Pedidos />}/>
        <Route path="/cadastrar-pedido" element={<CadastrarPedido />}/>
        {/* <Route path="/ver-pedido" element={<VerPedido />}/> */}
        <Route path="/resumo-do-pedido" element={<Resumo />}/>
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
