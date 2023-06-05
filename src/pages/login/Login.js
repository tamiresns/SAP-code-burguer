import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

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
          <img src='src/assets/logo.png' alt='Logo browser burguer' className='logo' />
          <form onSubmit={formLoginSubmit}>
            <Input
              label='Email'
              type='email'
              value=''
              placeholder='Seu e-mail'
              onChange=''
              required
            />
    
            <Input
              label='Senha'
              type='password'
              value=''
              placeholder='Sua senha'
              onChange=''
              required
            />

            <Button 
                label="Login" 
                onClick='' 
            />
          </form>
        </div>
        </div>
      );
}