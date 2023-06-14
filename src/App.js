import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Pedidos from './pages/login/Pedido';
// import CadastrarPedido from './pages/Cadastrar-pedido';
// import VerPedido from './pages/Ver-pedido';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/Pedidos" element={<Pedidos />}/>
        {/* <Route path="/Cadastrar-pedido" element={CadastrarPedido}/>
        <Route path="/Ver-pedido" element={VerPedido} /> */}
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
