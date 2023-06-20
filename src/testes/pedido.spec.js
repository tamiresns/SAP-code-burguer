import React from 'react';
import { render } from '@testing-library/react';
import Pedidos from '../pages/login/pedidos.js';

jest.mock('react-router-dom');

it('Deve renderizar corretamente', () => {
    const view = render(<Pedidos />);
    expect (view).toMatchSnapshot();
});

