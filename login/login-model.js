export async function loginUser(email, password) {

    //pendiente hacer gestión de errores como en tweets-model.js
    const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        body: JSON.stringify( {
            username: email, 
            password
        }),
        headers: {
            "Content-Type": "application/json"  //con esto le decimos que "lo que va air en el body será un JSON"
        }
    })

    if (!response.ok) {
        throw new Error("error iniciando sesión")
    }

    const {accessToken} = await response.json();
    
    return accessToken;
}