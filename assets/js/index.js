import { Leon, Lobo, Oso, Serpiente, Aguila } from './tipos.js';

import animales from './animales.js';

document.getElementById('animal').addEventListener('change', async (event) => {

	const selectedAnimal = event.target.value;

	const data = await animales.getData();

	const animalData = data.find(animal => animal.name.toLowerCase() === selectedAnimal.toLowerCase());

	if (animalData) {

		document.getElementById('preview').innerHTML = `<img src="assets/imgs/${animalData.imagen}" alt="${selectedAnimal}" class="img-fluid mx-auto d-block h-100">`;
	}

});


document.getElementById('btnRegistrar').addEventListener('click', async () => {

	const nombre = document.getElementById('animal').value;
	const edad = document.getElementById('edad').value;
	const comentarios = document.getElementById('comentarios').value;


	if (!nombre) {

		alert('Por favor, selecciona un animal válido.');
		return;
	}


	if (!edad) {

		alert('Por favor, selecciona una edad válida.');
		return;
	}


	if (!comentarios.trim()) {

		alert('Por favor, ingresa comentarios válidos.');
		return;
	}

	const data = await animales.getData();

	const animalData = data.find(animal => animal.name.toLowerCase() === nombre.toLowerCase());

	if (!animalData) {

		alert('Por favor, selecciona un animal válido.');
		return;
	}

	let animal = nombre === 'Leon' ? new Leon(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
		nombre === 'Lobo' ? new Lobo(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
			nombre === 'Oso' ? new Oso(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
				nombre === 'Serpiente' ? new Serpiente(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
					nombre === 'Aguila' ? new Aguila(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
						(() => {
							alert('Animal no reconocido');
							return;
						})();


	const animalCard = document.createElement('div');
	animalCard.className = 'card m-2';
	animalCard.style.width = '18rem';
	animalCard.innerHTML = `
        <img src="assets/imgs/${animal.getImg()}" class="card-img-top img-fluid" alt="${animal.getNombre()}">
        <div class="card-body p-0">
            <button class="btn btn-secondary btn-sm w-100" id="playSound">
              <img height='30' src='assets/imgs/audio.svg'>
            </button>
        </div>
    `;

	animalCard.querySelector('#playSound').addEventListener('click', () => {
		nombre === 'Leon' ? animal.rugir() :
			nombre === 'Lobo' ? animal.aullar() :
				nombre === 'Oso' ? animal.grunir() :
					nombre === 'Serpiente' ? animal.sisear() :
						nombre === 'Aguila' ? animal.chillar() : null;
	});

	animalCard.querySelector('img').addEventListener('click', () => {
		const modalBody = document.querySelector('.modal-body');
		modalBody.innerHTML = `
        <div class="card bg-transparent border-0 text-white">
            <img src="assets/imgs/${animal.getImg()}" class="card-img-top img-fluid" alt="${animal.getNombre()}">
            <div class="card-body">
                <h5 class="card-title">${animal.getNombre()}</h5>
                <p class="card-text">Edad: ${animal.getEdad()}</p>
                <p class="card-text">Comentarios: ${animal.getComentarios()}</p>
            </div>
        </div>
        `;
		$('#exampleModal').modal('show');
	});


	document.getElementById('Animales').appendChild(animalCard);

});