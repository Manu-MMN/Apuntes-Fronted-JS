//nexo de unión entre el modelo y la vista. El encargado de controlar el cotarro, el centro del problema que estamos resolviendo

import { buildTweet, buldEmptyTweetList } from "../tweets/tweets-view.js";
import { getTweets } from "../tweets/tweets-model.js"

function drawTweets(tweets, tweetsContainer) {

  if (!tweets.length) {
    tweetsContainer.innerHTML = buldEmptyTweetList();
  } else{
  
    tweets.forEach(tweet => {
      const newTweet = buildTweet(tweet);
      tweetsContainer.appendChild(newTweet);
    }) 
    // aquí se podría mostrar la ruleta si lo que queremos es quitarla DESPUÉS de que se pinten, pero cargarse, se cargan arriba
  
  }

}

export async function tweetsController()  {

  // mostrar ruleta de carga

  const tweetsContainer = document.querySelector('#tweets-container');
  const spinner = document.querySelector(".spinner")
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle("hidden");
  let tweets = [];
  try{
  tweets = await getTweets();
  drawTweets(tweets, tweetsContainer)
  }
  catch (error){
  alert(error.message)

  //en ves de un alert, vamos a crear un evento customeable
  const customEvent = new CustomEvent("loading-tweets-error", {
    detail: {
      message: error.message,
      type: "error"
    }
  }); //el primer parámetro es el nombre. Ahora como es un event, lo que hace es avisar afuera del error, ya no se lo come el tweets controller
  tweetsContainer.dispatchEvent(CustomEvent) //ahora DISPARAMOS ESE EVENTO desde el nodo

  } finally {
  spinner.classList.toggle("hidden");   //el finally en un bloque try catch siempre s eva a ejecutar, y como sí o sí, queremos que la ruleta de carga pare... Pues ea
  }
}
  // ocultar ruleta de carga

  //Si no hay tweets, lo podemos indicar con algo tan sencillo como esto
  /*aunque lo óptimo es hacer una función en la view e insertar en el dom
  if(tweets.length === 0) {
    alert("We'RE out of twets!") 
  }
*/
