const formulario = document.getElementById("formArticulo");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;

  const autor = document.getElementById("autor").value;

  const contenido = document.getElementById("contenido").value;

  const respuesta = await fetch("http://localhost:3000/articulos", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      titulo,
      autor,
      contenido,
    }),
  });

  const datos = await respuesta.json();

  document.getElementById("mensaje").textContent = datos.mensaje;

  formulario.reset();
});
