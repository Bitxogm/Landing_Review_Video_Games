
document.addEventListener("DOMContentLoaded", function () {

    // Cargar la seccion carousel games

    const CAROUSEL_GAMES = document.getElementById('carousel_games');
    fetch('html/carousel_games.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el carousel de games : ' + response.statusText);
            }
            return response.text();
        })


        .then(data => {
            CAROUSEL_GAMES.innerHTML = data // Insertamos contenido de la seccion carousel games
            
        })

        .catch(error => console.error('Error : ', error))
})