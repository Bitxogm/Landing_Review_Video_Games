   
   document.addEventListener("DOMContentLoaded", function() {
    
    // Cargar el aside 
        const ASIDE = document.getElementById('aside');
        fetch('html/aside.html')
 
        .then(response => {
            if(!response.ok) {
                throw new Error('Error al cargar el aside : ' + response.statusText) ;
            }
            return response.text();
        })
 
 
        .then(data => {
            ASIDE.innerHTML = data // Insertamos contenido del aside
        })
        
        .catch(error => console.error('Error : ', error))
     });

