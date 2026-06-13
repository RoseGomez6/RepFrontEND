async function cargarArticulos() {
  const respuesta = await fetch("http://localhost:3000/articulos");

  const articulos = await respuesta.json();

  const contenedor = document.getElementById("listaArticulos");

  contenedor.innerHTML = "";

  articulos.forEach((articulo) => {
    contenedor.insertAdjacentHTML(
      "beforeend",
      `
            <article>
                <h2>${articulo.titulo}</h2>

                <p class="autor">
                    Autor: ${articulo.autor}
                </p>

                <p>${articulo.contenido}</p>
            </article>
            `,
    );
  });
}

cargarArticulos();
