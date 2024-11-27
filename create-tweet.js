import { createTweetController } from "./create-tweet/create-tweet-controller.js";
import { isUserLogeddIn } from "./utils/auth.js";


if(!isUserLogeddIn()){
    window.location.href = "/"   //si mi usuario no está logado, lo mando al main. Ale, ya no entra nadie aunque pege la url
}

document.addEventListener("DOMContentLoaded", () => {
    const createTweetForm = document.querySelector("form");

    createTweetController(createTweetForm)
})