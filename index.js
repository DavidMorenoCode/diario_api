const URL_API_TRUMP = 'https://api.whatdoestrumpthink.com/api/';
const URL_API_SIMPSON = 'https://thesimpsonsquoteapi.glitch.me/';
const contenedorTrump = document.querySelector('#contenedorTrump');
const contenedorSimpson = document.querySelector('#contenedorSimpson');

async function obtenerTrump() {
    const resultadoFetch = await fetch(`${URL_API_TRUMP}v1/quotes`);
    const resultJson = await resultadoFetch.json();
    console.log("Resultado: obtenerTrump -> resultJson", resultJson);

    for (let index = 0; index < 5; index++) {
        let data = resultJson.messages.non_personalized[index];
        let newP = document.createElement('p');
        newP.textContent = data; 
        newP.classList.add('alert');
        newP.classList.add('alert-danger');
        contenedorTrump.appendChild(newP);
    }
}

async function obtenerSimpson() {
    const resultadoFetch = await fetch(`${URL_API_SIMPSON}quotes?count=5`);
    const resultJson = await resultadoFetch.json();
    
    for (let index = 0; index < resultJson.length; index++) {
        const personajeNombre = resultJson[index].character;
        const personajeImagen = resultJson[index].image;
        const personajeFrase = resultJson[index].quote;
    
        let personaje = document.createElement('div');
        let cardBody = document.createElement('div');
        let name = document.createElement('h2');
        let img = document.createElement('img');
        let frase = document.createElement('p');
        
        name.textContent = personajeNombre;
        frase.textContent = personajeFrase;
        
        personaje.classList.add('card');
        cardBody.classList.add('card-body');
        img.classList.add('card-img-top'); 
        img.setAttribute('src', personajeImagen);
        name.classList.add('card-title'); 
        frase.classList.add('card-text');

        cardBody.appendChild(name);
        cardBody.appendChild(frase);
        personaje.appendChild(img);
        personaje.appendChild(cardBody);
        contenedorSimpson.appendChild(personaje); 
        
    }


    

    // for (let index = 0; index < 5; index++) {
    //     let data = resultJson.messages.non_personalized[index];
    //     let newP = document.createElement('p');
    //     newP.textContent = data; 
    //     contenedorSimpson.appendChild(newP);
    // } 
}
obtenerTrump();
obtenerSimpson();

