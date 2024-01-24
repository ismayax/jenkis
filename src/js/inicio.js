document.addEventListener('DOMContentLoaded', function () {
    // Cambia la ruta según la ubicación real de tu archivo JSON
    fetch('./inicio.json')
        .then(response => response.json())
        .then((datos) => {
            const juegos = datos;

    const contenedorJuegos = document.getElementById('contenedor-juegos');
    const selectCategoria = document.getElementById('select-categoria');
    const tituloTodos = document.getElementById('titulo-todos');
    const tituloNintendo = document.getElementById('titulo-nintendo');
    const tituloXbox = document.getElementById('titulo-xbox');
    const tituloPs5 = document.getElementById('titulo-ps5');


    function actualizarEventListenersModal() {
        const juegosElementos = document.querySelectorAll('.contenedor');
        juegosElementos.forEach((element) => {
            element.addEventListener('click', function () {
                const juegoId = element.getAttribute('data-id');
                const juego = juegos.find(j => j.id.toString() === juegoId);
                openModalInicio(juego);
            });
        });
    }

    function mostrarJuegos(categoria) {

        // Oculta todos los títulos
        tituloTodos.style.display = 'none';
        tituloNintendo.style.display = 'none';
        tituloXbox.style.display = 'none';
        tituloPs5.style.display = 'none';

        // Muestra el título correspondiente a la categoría seleccionada
        if (categoria === 'todos') {
            tituloTodos.style.display = 'block';
        } else if (categoria === 'nintendo') {
            tituloNintendo.style.display = 'block';
        } else if (categoria === 'Xbox') {
            tituloXbox.style.display = 'block';
        } else if (categoria === 'PlayStation') {
            tituloPs5.style.display = 'block';
        }

        contenedorJuegos.innerHTML = '';
        let filaActual = null;
        let juegosEnFila = 0; // Contador para controlar la cantidad de juegos en una fila

        juegos.forEach((juego, index) => {
            if (categoria === 'todos') {
                if (juego.novedad === 'si') {
                    if (juegosEnFila === 0) {
                        filaActual = document.createElement('div');
                        filaActual.classList.add('row');
                        contenedorJuegos.appendChild(filaActual);
                    }
    
                    const juegoDiv = document.createElement('div');
                    juegoDiv.classList.add('col-12', 'col-md-3', 'col-lg-4', 'text-center', 'contenedor');
                    juegoDiv.setAttribute('data-id', juego.id); // Agrega el atributo data-id con el ID del juego
    
                    const imagen = document.createElement('img');
                    imagen.src = `../img/imgJuegos/${juego.imagen}`;
                    imagen.className = 'tamañoImagen element';
    
                    const nombre = document.createElement('p');
                    nombre.className = 'letraEspecial text-center';
                    nombre.innerHTML = `<strong>${juego.nombre}</strong>`;
    
                    juegoDiv.appendChild(imagen);
                    juegoDiv.appendChild(nombre);
                    filaActual.appendChild(juegoDiv);
    
                    juegosEnFila++;
    
                    if (juegosEnFila === 3) {
                        juegosEnFila = 0; // Reinicia el contador para crear una nueva fila
                    }
                }
            } else if (categoria === juego.compania) {
                if (juegosEnFila === 0) {
                    filaActual = document.createElement('div');
                    filaActual.classList.add('row');
                    contenedorJuegos.appendChild(filaActual);
                }
    
                const juegoDiv = document.createElement('div');
                juegoDiv.classList.add('col-12', 'col-md-3', 'col-lg-4', 'text-center', 'contenedor');
                juegoDiv.setAttribute('data-id', juego.id); // Agrega el atributo data-id con el ID del juego
    
                const imagen = document.createElement('img');
                imagen.src = `../img/imgJuegos/${juego.imagen}`;
                imagen.className = 'tamañoImagen element';
    
                const nombre = document.createElement('p');
                nombre.className = 'letraEspecial text-center';
                nombre.innerHTML = `<strong>${juego.nombre}</strong>`;
    
                juegoDiv.appendChild(imagen);
                juegoDiv.appendChild(nombre);
                filaActual.appendChild(juegoDiv);
    
                juegosEnFila++;
    
                if (juegosEnFila === 3) {
                    juegosEnFila = 0; // Reinicia el contador para crear una nueva fila
                }
            }
        });
        actualizarEventListenersModal();
    }

  

    mostrarJuegos('todos');

    selectCategoria.addEventListener('change', function () {
        const categoriaSeleccionada = selectCategoria.value;
        mostrarJuegos(categoriaSeleccionada);
    });

   

    // JavaScript para el modal
    const modal = document.getElementById('gameModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalVideo = document.getElementById('modalVideo');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    function openModalInicio(juego) {
        modalTitle.textContent = juego.nombre;
        modalVideo.innerHTML = `<iframe width="560" height="315" src="${juego.video}" frameborder="0" allowfullscreen></iframe>`;
        modalDescription.textContent = juego.descripcion;
        modalPrice.textContent = `Precio: $${juego.precio}`;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });  
})
.catch((error) => console.error('Error al cargar los datos:', error));

});