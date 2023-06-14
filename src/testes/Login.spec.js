import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from '../pages/login/Login.js';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    //Operador de propagação que espalha todas as propriedades e métodos do módulo real 'react-router-dom'.
    // o Jest carrega o módulo real especificado em vez do módulo mockado. 
    useNavigate: jest.fn(),
}));

describe('Login, component', () => {
  it('should update email input value correctly', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText ('Seu e-mail');
    fireEvent.change(emailInput, { target: { value: 'admin@codeburguer.com' } });

    expect(emailInput.value).toBe('admin@codeburguer.com');
  });

  it('should update password input value correctly', () => {
    render(<Login />);
    
    const passwordInput = screen.getByPlaceholderText('Sua senha');
    fireEvent.change(passwordInput, { target: { value: 'Sap09' } });

    expect(passwordInput.value).toBe('Sap09');
  });

  it('Deve redirecionar para a rota de pedidos caso as credenciais estejam corretas', () => {
    render(<Login />);

    
  })

})

