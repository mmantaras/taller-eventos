let boton = document.getElementById("boton");
let divContenedor = document.getElementById("contenedor-boton");

boton.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Hola!");
});

divContenedor.addEventListener("click", () => alert("Hola! soy el div"));