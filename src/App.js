import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import Pedidos from './pages/login/Pedido';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route path="/Pedidos" element={<Pedidos />}/>

      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
