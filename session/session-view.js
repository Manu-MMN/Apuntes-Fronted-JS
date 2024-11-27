export function buildAuthorizedSession() {
    return `
      <a href="/create-tweet.html">Crear Tweet</a>
      <button>cerrar sesión</button>
    `
}

export function buildUnauthorizedSession() {
    return `
      <a href="/login.html">Login</a>
      <a href="/signup.html">Signup</a>
    `
}