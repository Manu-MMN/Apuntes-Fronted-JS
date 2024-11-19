// cálculo del html que vamos a mostrar al usuario

//nuestro objetivo es que a view reciba algo y aquí se formatee en html
//"Tú me mandas el objeto, yo te creo el div, te meto la información y te devuelvo el nodo"

export const buildTweet = (tweet) => {
    const newTweet = document.createElement("div")
    newTweet.innerHTML = `
                <span>${tweet.handler}</span>
                <span>${tweet.date}</span>
                <p>${tweet.message}</p>
                <p>${tweet.likes}</p>
                `;
    return newTweet;
}


export function buldEmptyTweetList() {
    return "<h2> We're out of tweets !!! </h2>"

}

