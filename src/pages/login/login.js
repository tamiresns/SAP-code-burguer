import React, { useState } from 'react';
import Input from '../../components/input';
import ButtonMain from '../../components/buttonMain';
import ImgLogo from '../../components/imgLogo.js';
import { useNavigate } from 'react-router-dom';
import { setItem } from '../../storage/local.js';
import { login } from '../../api/auth.js';
import './login.css';

const Login = () => {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    //função chamada ao submeter o formulário
    const formLoginSubmit = (event) => {
        //interrompe  resto da ação "submit" que iria recarregar a página
        //ação necessaria pois o login será feito por chamada de API
        event.preventDefault();

        const email = event.target.elements[0].value;
        const password = event.target.elements[1].value;

          login(email,password)
          .then((data) => {
            // Faça algo com a resposta da API
            // Para salvar o token:
            if(data && data.accessToken){
              //se com sucesso: guardar o token
              setItem('accessToken', data.accessToken);
              navigate('pedidos');
            }
            else{
              setError(data);
            }
          })
          .catch((error) => {
            setError(error.message)
            //se retornar a URL errada retorna erro
          });
    }
    return (
        <div className='login-container'>
          <div className='grid-container'>
            <h1 className="title">codeBurger</h1>
            <ImgLogo className="my-logo" />
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