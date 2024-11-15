const appendChildExample = () => {
    // creación del nuevo nodo
    const heading3 = document.createElement('h3');
    heading3.textContent = "h3 incluido desde JS";
    
    // inclusión del nuevo nodo en el lugar deseado
    const target = document.querySelector('div');
    target.appendChild(heading3);
  }
  
  
  const innerHTMLExample = () => {
    const newDiv = document.createElement('div');
    const date = new Date();
  
    newDiv.innerHTML = `
      <h2>Título del div</h2>
      <h3>${date.toLocaleString()}</h3>
    `;
  
    const target = document.querySelector('div');
    // target.appendChild(newDiv);
    target.innerHTML = `
      <div>
        <h2>Título del div</h2>
        <h3>${date.toLocaleString()}</h3>
      </div>
    `
  }
  

  // escribir una función que cuando se ejecute, 
  // pinte en pantalla, todos los tweets

/*
  const tweets = [{
    handler: '@usuario1',
    date: new Date().toISOString(),
    message: 'Eligendi fugiat veniam a neque omnis doloribus sequi porro expedita ullam excepturi.',
    likes: 40,
  },
  {
    handler: '@usuario2',
    date: new Date().toISOString(),
    message: 'Laborum ad animi officia dolore nisi necessitatibus a porro! Odit!',
    likes: 3,
  },
  {
    handler: '@usuario3',
    date: new Date().toISOString(),
    message: 'Ayer estuve en le parque y me lo pasé genial',
    likes: 34,
  },
  {
    handler: '@usuario4',
    date: new Date().toISOString(),
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    likes: 400,
  }];
  // Tengo un array de tweets, por tanto tendré que ir recorriendo uno a uno esos tweets



  const drawTweets = () => {
    const tweetsContainer = document.querySelector(".tweets-container");

    //1. recorrer array de tweets
    tweets.forEach(tweet =>{
            //2- mostrar cada tweet en pantalla
                //2.1- crear un div, incluir el contenido del tweet
                const newTweet = document.createElement("div")
                newTweet.innerHTML = `
                <span>${tweet.handler}</span>
                <span>${tweet.date}</span>
                <p>${tweet.message}</p>
                <p>${tweet.likes}</p>
                `
                //2.2- incluir el div en el DOM
                tweetsContainer.appendChild(newTweet)
    })

  }

  drawTweets();

  */