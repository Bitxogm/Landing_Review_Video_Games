document.addEventListener("DOMContentLoaded", function () {

    // Cargar el slider

    const SLIDER = document.getElementById('slider');
    fetch('html/slider.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el slider : ' + response.statusText);
            }
            return response.text();
        })


        .then(data => {
            SLIDER.innerHTML = data // Insertamos contenido del slider
            
        })

        .catch(error => console.error('Error : ', error))
})

