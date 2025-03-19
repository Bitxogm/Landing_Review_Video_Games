document.addEventListener("DOMContentLoaded", function() {
    
    // Cargar la marquesina
 
        const MARQUESINA = document.getElementById('marquesina');
        fetch('html/marquesina.html')
 
        .then(response => {
            if(!response.ok) {
                throw new Error('Error al cargar la marquesina : ' + response.statusText) ;
            }
            return response.text();
        })
 
 
        .then(data => {
            // Insertamos el contenido HTML de la marquesina y una vez que este cargado en el Dom añadimos los queryselector , que ya no van a fallar.
            MARQUESINA.innerHTML = data 

            let marquee = (selector, speed ) => {

                const CONTAINER = document.querySelector(selector);
                // const CLONE =  CONTAINER.innerHTML;
                const LIST = CONTAINER.children[0];
        
                let move = 0;
        
                // CONTAINER.insertAdjacentHTML("beforeend", CLONE);
        
                setInterval(() => {
                    LIST.style.marginLeft = `-${move}px`;
                    if (move > LIST.clientWidth){
                        move = 0;
                    }
        
                    move = move + speed;
                }, 0);
        
            }
        
            marquee(".marquee__container", 0.3);
            
        })
        
        .catch(error => console.error('Error : ', error));
     });
   
   