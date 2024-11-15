//nexo de unión entre el modelo y la vista. El encargado de controlar el cotarro, el centro del problema que estamos resolviendo

import { buildTweet, buldEmptyTweetList } from "./tweets-view.js";
import {getTweets} from "./tweets-model.js"



async function showTweets()  {

  // mostrar ruleta de carga

  const tweetsContainer = document.querySelector('#tweets-container');
  const spinner = document.querySelector(".spinner")
  tweetsContainer.innerHTML = "";

  spinner.classList.toggle("hidden");
  const tweets = await getTweets();
  spinner.classList.toggle("hidden");


  // ocultar ruleta de carga

  //Si no hay tweets, lo podemos indicar con algo tan sencillo como esto
  /*aunque lo óptimo es hacer una función en la view e insertar en el dom
  if(tweets.length === 0) {
    alert("We round out of twets!") 
  }
*/
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



const showTweetsButton = document.querySelector("#show-tweets-button")

showTweetsButton.addEventListener("click", showTweets)
