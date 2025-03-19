document.addEventListener("DOMContentLoaded", function () {

    // Cargar la seccion highlights

    const HIGHLIGHTS = document.getElementById('highlights');
    fetch('html/highlights.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar los highlights/mejores momentos : ' + response.statusText);
            }
            return response.text();
        })


        .then(data => {
            HIGHLIGHTS.innerHTML = data // Insertamos contenido de los highlights / mejores momentos
            
        })

        .catch(error => console.error('Error : ', error))
})

