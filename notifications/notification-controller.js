import { buildNotification } from "./notification-view.js";

export function notificationController(notificationContaner){

    const showNotification = (message, type = "success") => {
        const notification = buildNotification(message, type)
        //meterle una clase de success o de error
    notificationContaner.innerHTML = buildNotification(message, type)
}
return {
    showNotification
}
}