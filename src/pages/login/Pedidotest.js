/*<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
<body>
    div id= "root"
    <script type="babel">

function Button() {
    return <button>Adicionar pedido</button>
}


 function App() {
    return <div>
        <h1>Aplicativo React </h1>
        <Button/>
        <Button/>
    </div>;
 }

 const container document.getElementById('root');
 const root = ReactDOM.createRoot(container);
 root.render(<App />);

   </script>



</body>
</head>
</html>
*/

import React from 'react';
import Button from '../../components/Button';

 const Garcom = () => {


    return (
        <div className='fazerPedido-container'>
          <div className='grid-container'>
          <img src='src/assets/logo.png' alt='Logo browser burguer' className='logo' />

            <Button 
                label="Novo pedido" 
                onClick='' 
            />
        
            <Button 
            label="Ver pedido" 
            onClick='' 
        />
     
        </div>
        </div>

      );
}
export default Garcom;


