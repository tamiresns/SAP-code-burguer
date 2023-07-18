import { getItem } from "../../storage/local";

export function postOrders(table, products) {
    const token = getItem('accessToken');
    const userId = getItem('id');
    //chamando a API
      const response = fetch('http://localhost:8080/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            userId,
            table,
            products,
            status: "pending",
            dateEntry: new Date()
          })
        })
          return response;
}

