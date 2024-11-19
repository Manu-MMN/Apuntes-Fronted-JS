//ORQUESTADOR DE CONTROLADORES

import { notificationController } from "./notifications/notification-controller.js"
import { tweetsController } from "./tweets/tweets-controller.js"


document.addEventListener("DOMContentLoaded", () => { 

const tweetsContainer = document.querySelector("#tweets-container")   
const notificationContainer = document.querySelector("#notification-container")


tweetsController(tweetsContainer)//Cuando todo el DOM(html) se cargue, entonces me cargas los tweets
const { showNotification } = notificationController(notificationContainer)


tweetsContainer.addEventListener("loading-tweets-error", (event) => {
    showNotification(event.detail);
    showNotification(event.detail.message, event.detail.type)
  })
})
//Intentar replicar la estructura para hacer un "notification controller"