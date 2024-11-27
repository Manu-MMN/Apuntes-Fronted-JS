import { buildNotification } from "./notifications-view.js"

export function notificationController(notificationContainer) {


    //meterle una clase de success o de error
    const showNotification = (message, type = "success") => {
        notificationContainer.innerHTML = buildNotification(message, type);

        setTimeout(() => {
            notificationContainer.innerHTML = "";
        }, 4000)
    }

    return {
        showNotification
    }
}


