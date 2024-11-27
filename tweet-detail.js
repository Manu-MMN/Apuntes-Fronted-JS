//ESTE ES OTRO ORQUESTADOR, será el orquestador de tweets detail

import { tweetDetailController } from "./tweet-detail/tweet-detail-controller.js";

document.addEventListener("DOMContentLoaded", () => {

    // 1- obtener id del tweet de la url
    const searchParams = new URLSearchParams(window.location.search);
    const tweetId = searchParams.get("id");

    // 2- acceder al nodo donde pintaremos el detalle del tweet
    const tweetDetailContainer = document.querySelector("#tweet-detail")

    tweetDetailController(tweetDetailContainer, tweetId)

})