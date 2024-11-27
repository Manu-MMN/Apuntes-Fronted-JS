

export const isUserLogeddIn = () => {
    const token = localStorage.getItem("jwt");

    return !!token; 
    
    // !! es una transformación a booleano, por cierto esta función (isUserLogedIn) NO LA PUEDO IMPORTAR, nada de crear dependencias entre controladores
}