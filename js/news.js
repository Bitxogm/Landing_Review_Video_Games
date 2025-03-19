


document.addEventListener("DOMContentLoaded", function () {

    // Cargar la seccion news

    const NEWS = document.getElementById('news');
    fetch('html/news.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la seccion news : ' + response.statusText);
            }
            return response.text();
        })


        .then(data => {
            NEWS.innerHTML = data // Insertamos contenido de la seccion news
            
        })

        .catch(error => console.error('Error : ', error))
})