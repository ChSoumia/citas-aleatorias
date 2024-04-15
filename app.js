let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

// Generar un entero aleatorio desde un rango de 'min' sin incluir 'max' en los valores posibles
function generarEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita(){
	// Generar un Indice aleatorio
	let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
  // Actualizar dom
	citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
	autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);