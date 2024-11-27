// Esto hace un modelo. Optención de datos que necesita nuestra aplicación

//Los tweets tienen que venir de SPARREST




export async function getTweets() {
  try {
  const response = await fetch("http://localhost:8000/api/tweets?_expand=user");  //ya no sólo obtenemos los tweets sino los usuarios con expand

  const tweets = await response.json()

  if (!response.ok){

    throw new Error("Resource doesn't exist");
  }  

  return tweets;

  } catch (error){
    
    throw new Error(error.message)  //lanzar un new error aquí, me obliga a controlarlo en mi tweets controller
  }
}