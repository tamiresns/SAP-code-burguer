export function login(email,password){
  //chamando a API
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email , password})
      })
        .then((response) => response.json())
}
