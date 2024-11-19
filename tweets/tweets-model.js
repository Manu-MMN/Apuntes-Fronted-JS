//Optención de datos que necesita nuestra aplicación

//Los tweets tienen que venir de SPARREST




export async function getTweets() {
  try {
  const response = await fetch("http://localhost:8000/api/tweets");
  if (!response.ok){
    throw new Error("Resource doesn't exist");
  }  
  const tweets = await response.json()
  return tweets;
  } catch (error){
    throw new Error(error.message)  //lanzar un new error aquí, me obliga a controlarlo en mi tweets controller
  }
}