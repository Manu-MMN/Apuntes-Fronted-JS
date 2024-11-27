export function buildTweetDetail(tweet) {
    const createdAt = new Date(tweet.updatedAt);

    return `
      <div>
        <span>${createdAt.toLocaleDateString()}</span>
        <p>${tweet.message}</p>
      </div>
    `
}


// creamos el botón de eliminar tweet 
export function buildDeleteButton() {
    const removeButton = document.createElement('button');
    removeButton.textContent = "Borrar tweet";

    return removeButton;
}



