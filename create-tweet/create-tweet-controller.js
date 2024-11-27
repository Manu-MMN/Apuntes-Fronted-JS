import { createTweet } from "./create-tweet-model.js";

export function createTweetController(createTweetForm) {
    //1- escuchar al evento submit para obtener los datos de creacion de tweet
    createTweetForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const textAreaElement = createTweetForm.querySelector("#tweet-content")
        const tweetMessage = textAreaElement.value

    })

    async function handleTweetCreation(tweetMessage) {
        
        //2- crear el tweet( no hace falta validaciones por que hemos puesto los campos required en el html)

        try {
            await createTweet(tweetMessage)
            window.location.href = "/"

        } catch (error) {
            alert(error.message)

        }

    }

}