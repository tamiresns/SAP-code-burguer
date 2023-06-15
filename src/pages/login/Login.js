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
      console.log(event);
        //interrompe  resto da ação "submit" que iria recarregar a página
        //ação necessaria pois o login será feito por chamada de API
        event.preventDefault();

        //pegar os parametros de email/senha
        const bodyJson={
          "email": event.target[0].value,
          "password": event.target[1].value,
        }
        console.log(bodyJson);
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
              console.log(data.accessToken)
              //se com sucesso: guardar o token
              localStorage.setItem('accessToken', data.accessToken);
              navigate('Pedidos');
            }
            else{
              setError(data)
            }
          })
          .catch((error) => {
            setError(error)
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
              />
      
              <Input
                type='password'
                placeholder='Sua senha'
                required
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