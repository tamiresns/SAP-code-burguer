import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from '../pages/login/Login.js';
import { setItem } from '../storage/local.js';
import { login } from '../api/auth.js';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');
jest.mock('../storage/local.js');
jest.mock('../api/auth.js');

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
  
  it('Deve chamar a API corretamente e verificar se o Token foi salvo no LocalStorage', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    login.mockResolvedValue({accessToken: 'token_de_acesso'});
    
    render(<Login />);
  
    fireEvent.change(screen.getByPlaceholderText('Seu e-mail'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Sua senha'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(setItem).toHaveBeenCalledWith('accessToken','token_de_acesso');
      // Verifica se o token foi salvo no localStorage
    })
      //verifica se a função login foi chamada corretamente
      expect(login).toHaveBeenCalledWith('test@example.com', 'password123');
      expect(mockNavigate).toHaveBeenCalledWith('Pedidos');
  });
   
  it('Deve mostrar a mensagem de erro se falhar ao acessar o token', () => {
    const mockData = "Cannot find user"

    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);
    login.mockResolvedValue({accessToken: 'token_de_acesso'});
    
    render(<Login />);
  
    fireEvent.change(screen.getByPlaceholderText('Seu e-mail'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Sua senha'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

   
      //verifica se a função login foi chamada corretamente
      expect(login).toHaveBeenCalledWith('test@example.com', 'password123');
      login.mockRejectedValue(mockData);



  })
})

