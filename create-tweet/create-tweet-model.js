export async function createTweet(message) {
    const token = localStorage.getItem("jwt");  //debería estar en controller, pero bueno, tampoco es pecado mortal

    const response = await fetch("http://localhost:8000/api/tweets", {
    method: "POST",
    body: JSON.stringify({
        message 
    }),
    headers: {
        "content-type": "aplication/json",
        "Authorization": `Bearer ${token} `   //lo de bearer es una convención y el token es el dni para que el servidor sepa que eres tú quien está ahí
    }
})

if (!response.ok) {
    throw new Error("Error creando tweet")
}
}
