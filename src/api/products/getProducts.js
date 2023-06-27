import { getItem } from "../../storage/local";

export function getProducts() {
    const token = getItem('accessToken');
    //chamando a API
      return fetch('http://localhost:8080/products', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
        })
          .then((response) => response.json())
}


  