   
   document.addEventListener("DOMContentLoaded", function() {
    
    // Cargar el footer 
        const FOOTER = document.getElementById('footer');
        fetch('html/footer.html')
 
        .then(response => {
            if(!response.ok) {
                throw new Error('Error al cargar el footer : ' + response.statusText) ;
            }
            return response.text();
        })
 
 
        .then(data => {
            FOOTER.innerHTML = data // Insertamos contenido del footer
        })
        
        .catch(error => console.error('Error : ', error))
     });

