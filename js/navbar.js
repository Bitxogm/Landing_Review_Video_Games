
document.addEventListener("DOMContentLoaded", function () {

    // Cargar la navbar 
    const NAVBAR = document.getElementById('navbar');
    fetch('/html/navbar.html')

        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar la navbar : ' + response.statusText);
            }
            return response.text();
        })


        .then(data => {
            NAVBAR.innerHTML = data // Insertamos contenido de la navbar y una vez que esta inyectado el html en el DOM metemos los
            //queryselector de la funcionalidad : 


            // Seleccionamos el boton y el input y les metemos en dos variables (probar con CONSTANTES) y los capturamos con document.queryselector el evento del dom seleccionando
            // las clases de cada elemento
            let input_search = document.querySelector(".search__input")
            let btn_search = document.querySelector(".navbar__button")

            /*Aplicamos estilos cuando damos click en el boton , ejecutamos una callback para ejecutar lo que queramos despues de hacer click , guardamos la variable visible ,
            por si existe un elemento que se llame visible , si ya existe la clase visible , cuando demos click ocultamos el input y quitarle con remove la clase visible
            si le volvemos a dar click y la clase visible no existe , entra en el else y aumentamos el tamaño del input , le damos forma y le agregamos la clase visible*/

            btn_search.addEventListener("click", () => {
                // Hacemos el input invisble
                let visible = document.querySelector(".visible");
                if (visible) {
                    input_search.style.width = '0';
                    input_search.style.padding = '0';
                    input_search.classList.remove('visible')
                } else {
                    input_search.style.width = '15rem';
                    input_search.style.padding = '0.5rem 0 0.5rem 0.5rem'
                    input_search.classList.add('visible')
                }

            });

            let mobile_btn = document.querySelector(".navbar__mobile-btn");
            let mobile_menu = document.querySelector(".navbar__mobile-list");
        
            mobile_btn.addEventListener("click", () => {
                let menu_open = document.querySelector(".menu_open");
                if (!menu_open) {
                    mobile_menu.style.display = "block";
                    mobile_menu.classList.add("menu_open");
                } else {
                    mobile_menu.style.display = "none";
                    mobile_menu.classList.remove("menu_open");
                }
        
                const submenu = (boton, submenu, className) => {
        
                    boton.addEventListener("click", () => {
                        let drop = document.querySelector("."+className);
                        if (!drop) {
                            submenu.style.display = "block";
                            submenu.classList.add(className);
                        } else {
                            submenu.style.display = "none";
                            submenu.classList.remove(className);
                        }
                    });
        
        
                };
        
                // Primer submenu
                let dropdown1_btn = document.querySelector("#icon1");
                let dropdown1_submenu = document.querySelector("#submenu1");
               
                // Segundo funcionalidad
                let dropdown2_btn = document.querySelector("#icon2");
                let dropdown2_submenu = document.querySelector("#submenu2");
        
                //Ejecutar funcionalida
                submenu(dropdown1_btn, dropdown1_submenu, "drop1");
                submenu(dropdown2_btn, dropdown2_submenu, "drop2");
        
                // Redimensionado
        
                window.addEventListener("resize", () => {
                    let win = parseFloat(document.body.clientWidth);
                    if(win > 1024){
                        mobile_menu.style.display = "none";
                        mobile_menu.classList.remove("menu_open")
                    }
        
                });
        
            });


        })

        .catch(error => console.error('Error : ', error))


});

