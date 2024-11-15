//Optención de datos que necesita nuestra aplicación

//Los tweets tienen que venir de SPARREST




export async function getTweets() {
  try {
  const response = await fetch("http://localhost:8000/api/tweets");
  const tweets = await response.json()
  return tweets;
  } catch {
    console.log("Sorry we round out of tweets!")
  }

  //return tweets;
}