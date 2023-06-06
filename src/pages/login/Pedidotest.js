import React from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';


 const Garcom = () => {
    return (
        <div className='fazerPedido-container'>
          <div className='grid-container'>
          <img src={Logo} alt="Logo code burger"></img>
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



