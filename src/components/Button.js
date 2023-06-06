import React from 'react';

function buttonPedidos() {
  const [total, setTotal] = React.useState(0);

  return (
    <button onClick = {() => setTotal(total +1)}>Novo Pedido {total}</button>
  )
}

function codeBurger() {
  return (
    <div>
      <h1>codeBurger</h1>
      <img src = "burger.png" alt = "Imagem do burger"></img>
    </div>
  );
};


export default (buttonPedidos, codeBurger);
