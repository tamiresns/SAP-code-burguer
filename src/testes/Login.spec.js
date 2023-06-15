import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../pages/login/Login.js';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    //Operador de propagação que espalha todas as propriedades e métodos do módulo real 'react-router-dom'.
    // o Jest carrega o módulo real especificado em vez do módulo mockado. 
    useNavigate: jest.fn(),
}));
global.fetch = jest.fn();

describe('Login, component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve atualizar o valor digitado no input E-mail corretamente', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText ('Seu e-mail');
    fireEvent.change(emailInput, { target: { value: 'admin@codeburguer.com' } });

    expect(emailInput.value).toBe('admin@codeburguer.com');
  });

  it('Deve atualizar o valor digitado no input Senha corretamente', () => {
    render(<Login />);
    
    const passwordInput = screen.getByPlaceholderText('Sua senha');
    fireEvent.change(passwordInput, { target: { value: 'Sap09' } });

    expect(passwordInput.value).toBe('Sap09');
  });
  
  it('renders login component', () => {
    // Simula a resposta da API
    const mockResponse = {
      accessToken: 'token_de_acesso',
    };
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
  
    // Renderiza o componente Login
    render(<Login />);
  
    // Interage com o formulário
    fireEvent.change(screen.getByPlaceholderText('Seu e-mail'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Sua senha'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));
  
    // Verifica se a chamada à API foi feita corretamente
    expect(fetch).toHaveBeenCalledWith(
      'https://code-burguer-api.vercel.app/login',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'test@example.com',
          password: 'password123',
        }),
      })
    );
  
    // Verifica se o token foi salvo no localStorage
    expect(localStorage.getItem('accessToken')).toBe('token_de_acesso');
  });
  
 
})

