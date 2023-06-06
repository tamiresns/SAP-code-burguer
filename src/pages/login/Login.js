import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Garcom } from './Pedidotest';
import './Login.css';


export const Login = () => {

    //função chamada ao submter o formulário
    const formLoginSubmit = (event) => {
        //interrompe  resto da ação "submit" que iria recarregar a página
        //ação necessaria pois o login será feito por chamada de API
        event.preventDefault();

    }

    return (
        <div className='login-container'>
          <div className='grid-container'>
          <form onSubmit={formLoginSubmit}>
            <Input
              label='Email'
              type='email'
              placeholder='Seu e-mail'
              required
            />
    
            <Input
              label='Senha'
              type='password'
              placeholder='Sua senha'
              required
            />

            <Button 
                label="Login" 
            />
          </form>
        </div>
        <Garcom />
        </div>
      );
}