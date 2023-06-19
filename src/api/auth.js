export function login(email,password){
  //chamando a API
    return fetch('https://code-burguer-api.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email , password})
      })
        .then((response) => response.json())
}
