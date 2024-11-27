import { isUserLogeddIn } from "../utils/auth.js";
import { buildAuthorizedSession, buildUnAuthorizedSession } from "./session-view.js";

export function sessionController(sessionContainer) {

    if (isUserLogeddIn()) {  //esta función antes estaba aquí,pero la movimos a users para poder usarla en el create-tweets
        sessionContainer.innerHtml = buildAuthorizedSession();
        const closeSessionButton = sessionContainer.querySelector("button")
        closeSessionButton.addeventlistener("click", () =>{
            localStorage.removeItem("jwt") //ahora el botón de cerrar sesión funciona
            sessionController(sessionContainer) //así nos ahorramos un f5, ahora !!token será false por tanto pasa al else
        })   
    } else{
        sessionContainer.innerHTML = buildUnAuthorizedSession()    
    }
}