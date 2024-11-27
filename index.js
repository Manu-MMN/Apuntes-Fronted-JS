//ORQUESTADOR DE CONTROLADORES

import { notificationController } from "./notifications/notifications-controller.js";
import { sessionController } from "./session/session-controller.js";
import { tweetsController } from "./tweets/tweets-controller.js";

document.addEventListener("DOMContentLoaded", () => {

  const tweetsContainer = document.querySelector("#tweets-container");
  const notificationsContainer = document.querySelector("#notifications-container");
  const sessionContainer = document.querySelector("#session");

  sessionController(sessionContainer)
  tweetsController(tweetsContainer)       //Cuando todo el DOM(html) se cargue, entonces me cargas los tweets
  const { showNotification } = notificationController(notificationsContainer)

  tweetsContainer.addEventListener("loading-tweets-info", (event) => {
    showNotification(event.detail.message, event.detail.type);
  })
})


