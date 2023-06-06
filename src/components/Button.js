// import React from 'react';

// function buttonPedidos() {
//   const [total, setTotal] = React.useState(0);

//   return (
//     <button onClick = {() => setTotal(total +1)}>Novo Pedido {total}</button>
//   )
// }

// function codeBurger() {
//   return (
//     <><div>
//     <h1>codeBurger</h1>
//     <img src="burger.png" alt="Imagem do burger"></img>
//     </div><button type="submit" onClick={onClick}>
//         {label}
//       </button></>
//   );
// };


// export default (buttonPedidos, codeBurger);

import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      { label } 
    </button>
  );
};

export default Button;