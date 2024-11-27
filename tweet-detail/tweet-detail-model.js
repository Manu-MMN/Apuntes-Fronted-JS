export async function getTweet(tweetId) {
    try {
        const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}?_expand=user`);  //idéntico al de "traer todos los tweets, pero le especifico cual", a parte del tweet id, para eliminarlo, necesitamos el user
        const tweet = await response.json();
        
        if (!response.ok) {
            throw new Error("Resource doesn't exist");
        }
        
        return tweet;

    } catch (error) {
        
        throw new Error(error.message)  //lanzar un new error aquí, me obliga a controlarlo en mi tweets controller
    }
}




export async function removeTweet(tweetId) {
    const token = localStorage.getItem("jwt");
    try {
        const response = await fetch(`http://localhost:8000/api/tweets/${tweetId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token} `
            }

        });  //idéntico al de "traer todos los tweets, pero le especifico cual", a parte del tweet id, para eliminarlo, necesitamos el user
        if (!response.ok) {
            throw new Error("Resource doesn't exist");
        }
    } catch (error) {
        throw new Error(error.message)  //lanzar un new error aquí, me obliga a controlarlo en mi tweets controller
    }
}