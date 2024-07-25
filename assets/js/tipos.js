import Animal from './animal.js';

const audioPlayer = document.getElementById('player');

class Leon extends Animal {

	constructor(nombre, edad, img, comentarios, sonido) {

		super(nombre, edad, img, comentarios, sonido);
	}

	rugir() {

		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

class Lobo extends Animal {

	constructor(nombre, edad, img, comentarios, sonido) {

		super(nombre, edad, img, comentarios, sonido);
	}

	aullar() {

		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

class Oso extends Animal {

	constructor(nombre, edad, img, comentarios, sonido) {

		super(nombre, edad, img, comentarios, sonido);
	}

	grunir() {

		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

class Serpiente extends Animal {

	constructor(nombre, edad, img, comentarios, sonido) {

		super(nombre, edad, img, comentarios, sonido);
	}

	sisear() {

		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}

}

class Aguila extends Animal {

	constructor(nombre, edad, img, comentarios, sonido) {

		super(nombre, edad, img, comentarios, sonido);
	}

	chillar() {

		audioPlayer.src = `assets/sounds/${this.getSonido()}`;
		audioPlayer.play();
	}
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
