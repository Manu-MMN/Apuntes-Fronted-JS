// cálculo del html que vamos a mostrar al usuario

//nuestro objetivo es que a view reciba algo y aquí se formatee en html
//"Tú me mandas el objeto, yo te creo el div, te meto la información y te devuelvo el nodo"

export const buildTweet = (tweet) => {
    const newTweet = document.createElement("a")  //antes el div entraba por parámetro, ahora metemos un enlance y el div lo metemos en la estructura
    newTweet.setAttribute("href", `/tweet-detail.html?id=${tweet.id}`)
    const createdAt = new Date(tweet.updatedAt)
    newTweet.innerHTML = `
    <div>  
    <span>usuario: ${tweet.user.username} - ${createdAt.toLocaleDateString} </span>          
    <p>${tweet.message}</p>
    </div>
`;
    return newTweet;
}


export function buldEmptyTweetList() {
    return "<h2> We're out of tweets !!! </h2>"
}


/*  Así era el tweet antes, pero después de crear "create-tweet" esos 
campos o no existían o no estaban como se mostraban en la petición, 
por tanto así nos quitamos undefineds

                <span>${tweet.handler}</span>
                <span>${tweet.date}</span>
                <p>${tweet.message}</p>
                <p>${tweet.likes}</p>
*/