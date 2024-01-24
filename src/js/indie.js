document.addEventListener("DOMContentLoaded", function () {
  const btnMostrarIndie = document.getElementById("btnMostrarIndie");
  const indieGamesContainer = document.getElementById("indieGamesContainer");

  // Agrega referencia al modal y sus elementos
  const modal = document.getElementById("gameIndie");
  const modalTitle = document.getElementById("modalTitle");
  const modalVideo = document.getElementById("modalVideoIndie");
  const modalDescription = document.getElementById("modalDescriptionIndie");
  const modalPrice = document.getElementById("modalPriceIndie");
  const closeModalIndie = document.getElementById("closeModalIndie");

  // Cierra el modal al hacer clic en la "X"
  closeModalIndie.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Cierra el modal al hacer clic fuera del mismo
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  btnMostrarIndie.addEventListener("click", function () {
    fetch("./inicio.json")
      .then(response => response.json())
      .then(data => {
        const juegosIndie = data.filter(function (juego) {
          return juego.compania.toLowerCase() === "indie";
        });

        indieGamesContainer.innerHTML = "";

        juegosIndie.forEach(function (juego, index) {
          const juegoElement = document.createElement("div");
          juegoElement.classList.add("col-12", "col-md-4", "col-lg-4", "contenedor");

          const imagenElement = document.createElement("img");
          imagenElement.classList.add("tamañoImagen", "element");
          imagenElement.src = "../img/imgJuegos/" + juego.imagen;

          // Agrega un evento clic para mostrar el modal con la información del juego
          imagenElement.addEventListener("click", function () {
            modalTitle.textContent = juego.nombre;
            modalVideo.innerHTML = `<iframe width="560" height="315" src="${juego.video}" frameborder="0" allowfullscreen></iframe>`;
            modalDescription.textContent = juego.descripcion;
            modalPrice.textContent = `Precio: $${juego.precio}`;
            modal.style.display = "block";
          });

          juegoElement.appendChild(imagenElement);
          const nombreElement = document.createElement("h3");
          nombreElement.classList.add("letraEspecial");
          nombreElement.textContent = juego.nombre;
          juegoElement.appendChild(nombreElement);

          indieGamesContainer.appendChild(juegoElement);

          if ((index + 1) % 3 === 0) {
            indieGamesContainer.appendChild(document.createElement("br"));
          }
        });

        indieGamesContainer.parentElement.style.display = "block";
      })
      .catch(error => console.error("Error al cargar el archivo JSON:", error));
  });

  // Desplazamiento suave al área colapsada
  btnMostrarIndie.addEventListener("click", function () {
    const targetElement = document.getElementById("collapseExample");
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: "smooth"
    });
  });
});





