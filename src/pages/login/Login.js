import React, { useState } from 'react';
import Input from '../../components/Input';
import ButtonMain from '../../components/ButtonMain';
import ImgLogo from '../../components/ImgLogo';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {

    const [error, setError] = useState('');
    const navigate = useNavigate();

    //função chamada ao submter o formulário
    const formLoginSubmit = (event) => {
      
        //interrompe  resto da ação "submit" que iria recarregar a página
        //ação necessaria pois o login será feito por chamada de API
        event.preventDefault();

        const email = event.target.elements[0].value;
        const password = event.target.elements[1].value;
        

        //pegar os parametros de email/senha
        const bodyJson={
          "email": email,
          "password": password,
        }
        //chmar a api
        return fetch('https://code-burguer-api.vercel.app/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyJson)
        })
          .then((response) => response.json())
          .then((data) => {
            // Faça algo com a resposta da API
            // Para salvar o token:
            if(data && data.accessToken){
              //se com sucesso: guardar o token
              localStorage.setItem('accessToken', data.accessToken);
              navigate('Pedidos');
            }
            
          })
          .catch((error) => {
            setError(error.message)
          });
        // se com falha: retornar erro
    }

    return (
        <div className='login-container'>
          <div className='grid-container'>
            <h1 className="title">codeBurger</h1>
            <ImgLogo />

            <form onSubmit={formLoginSubmit}>
              <h2>Login</h2>
              <Input
                type='email'
                placeholder='Seu e-mail'
                required
                name='email'
              />
      
              <Input
                type='password'
                placeholder='Sua senha'
                required
                name='password'
              />

              <div>
                {error && <p>{error}</p>}
              </div>

              <ButtonMain label="Login"/>

            </form>
          </div>   
        </div>
      );
}

export default Login;