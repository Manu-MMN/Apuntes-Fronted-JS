//nexo de unión entre el modelo y la vista. El encargado de controlar el cotarro, el centro del problema que estamos resolviendo

import { getTweets } from "./tweets-model.js";
import { buildTweet, buildEmptyTweetList } from "./tweets-view.js";

function drawTweets(tweets, tweetsContainer) {
  if(!tweets.length) {
    tweetsContainer.innerHTML = buildEmptyTweetList();
  } else {
    tweets.forEach(tweet => {
      const newTweet = buildTweet(tweet);
      tweetsContainer.appendChild(newTweet);
    })
  }
}

function fireEvent(message, type, element) {
  const customEvent = new CustomEvent("loading-tweets-info", {
    detail: {
      message,
      type,
    }
  });
  element.dispatchEvent(customEvent);
}

export async function tweetsController(tweetsContainer) {
  const spinner = document.querySelector('.spinner')
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle('hidden');
  try {
    const tweets = await getTweets();
    fireEvent("tweets cargados correctamente", "success", tweetsContainer);
    drawTweets(tweets, tweetsContainer)
  } catch (error) {
    // alert(error.message)
    fireEvent(error.message, "error", tweetsContainer);
  } finally {
    spinner.classList.toggle('hidden');     //el finally en un bloque try catch siempre s eva a ejecutar, y como sí o sí, queremos que la ruleta de carga pare... Pues ea
  }
}



  // ocultar ruleta de carga

  //Si no hay tweets, lo podemos indicar con algo tan sencillo como esto
  /*aunque lo óptimo es hacer una función en la view e insertar en el dom
  if(tweets.length === 0) {
    alert("We'RE out of twets!") 
  }
*/
