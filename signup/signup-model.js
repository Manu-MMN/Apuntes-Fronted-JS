export async function createUser(email, password) {
    //pendiente hacer gestión de errores como en tweets-model.js

    const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        body: JSON.stringify({
            username: email, 
            password
        }),
        headers: {
            "Content-Type": "application/json"  //con esto le decimos que "lo que va a ir en el body será un JSON"
        }
    });

    if (!response.ok) {
        throw new Error("error creando usuario")
    }
}