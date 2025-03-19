
document.addEventListener("DOMContentLoaded", function () {

    // Cargar la seccion videos

    const VIDEOS = document.getElementById('videos');
    fetch('html/videos.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los videos : ' + response.statusText);
            }
            return response.text();
        })


        .then(data => {
            VIDEOS.innerHTML = data // Insertamos contenido de la seccion videos
            
        })

        .catch(error => console.error('Error : ', error))
})