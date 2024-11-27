import { getCurrentUserInfo } from "../auth/auth-model.js"
import { getTweet, removeTweet } from "./tweet-detail-model.js"
import { buildDeleteButton, buildTweetDetail } from "./tweet-detail-view.js"

export async function tweetDetailController(tweetDetailContainer, tweetId) {


    //obtener datos del tweet
    try {
        const tweet = await getTweet(tweetId);

        const user = await getCurrentUserInfo();

        //pintamos el tweet

        tweetDetailContainer.innerHTML = buildTweetDetail(tweet);

        //si los ids son iguales, pintar el botón de borrar

        if (user.id === tweet.user.id) {
            //pintar botón de borrado
            const removeButtonElement = buildDeleteButton();
            tweetDetailContainer.appenChild(removeButtonElement);
            // Cuando el botón se pulse, borrar el tweet previa confirmación

            removeButtonElement.addEventListener("click", async () =>{
                const shouldRemoveTweet = confirm("Sure you want to delete the tweet?");  // confirm devuelve un booleano
                if (shouldRemoveTweet) {  
                    //gestión del error

                    await removeTweet(tweetId) //tweet.id también valdría
                    window.location.href = "/"
                } 
            })
        }

    } catch (error) {
        alert("error.message")
    }
}

               //BORRAR EL TWEET

//1- Conocer quién es el dueño del tweet mostrado. --> expand || está en la carpeta tweet detail model, añadiendo el expand=user en la función getTweet, sencillo.

//2- conocer el identificador del usuario logado.


//3- comapar el id del autor del tweet mostrado con la del id del usuario logado

//4- si los ids son iguales, pintar el botón de borrar

//5- Cuando el botón se pulse, borrar el tweet, 