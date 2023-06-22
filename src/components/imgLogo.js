import React from 'react';
import minhaImagem from '../img/burger.png';

function ImgLogo({className}) {
  return <img src={minhaImagem} className={className} alt="Minha Imagem" />;
}

export default ImgLogo;