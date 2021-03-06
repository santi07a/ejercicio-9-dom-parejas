//punto 1
class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  static serie = "Juego de Tronos";
  comunicar() { }
  morir() {
    this.estado = "muerto";
  }
}

class Rey extends Personajes {
  anyosReinando;
  icono = '👑';
  constructor(nombre, familia, edad, anyosDeReinado) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.anyosReinando = anyosDeReinado;


  }
  comunicar() {
    super.comunicar();
    return "Vais a morir Todos";
  }
}
class Luchador extends Personajes {
  arma;
  destreza;
  icono = '🗡';
  constructor(nombre, familia, edad, armaQueUtiliza, potencia) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.arma = armaQueUtiliza;
    this.cantidadDestreza(potencia);
  }
  comunicar() {
    super.comunicar();
    return "Primero pego y luego pregunto";
  }
  set totalDestreza(potencia) {
    this.cantidadDestreza(potencia);
  }

  cantidadDestreza(potenciaVerificar) {
    if (potenciaVerificar > 0 && potenciaVerificar <= 10) {
      this.destreza = potenciaVerificar;
    } else if (potenciaVerificar < 0) {
      this.destreza = 0;
    } else if (potenciaVerificar > 10) {
      this.destreza = 10;
    }
  }
}
class Asesor extends Personajes {
  personajeQueAsesora;
  icono = '🎓';
  constructor(nombre, familia, edad, asesoraA) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.personajeQueAsesora = asesoraA;
  }
  comunicar() {
    super.comunicar();
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

class Escudero extends Personajes {
  sirveAlPersonaje;
  pelotismo;
  icono = '🛡';

  constructor(nombre, familia, edad, personajeAlQueSirve, gradoPelotismo) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.sirveAlPersonaje = personajeAlQueSirve;
    this.pelotismo = gradoPelotismo

  }
  set pelotismo(numero) {
    if (numero < 1) {
      numero = 1;
    } else if (numero > 10) {
      numero = 10;
    }
  }
  set verificarPersonaje(personajeIndefinido) {
    this.sirveAlPersonaje(personajeIndefinido);
  }
  sirveAlPersonaje(personaje) {
    if (personaje instanceof Luchador) {
      this.personajeQueSirve = personaje;
    }
  }

  comunicar() {
    super.comunicar();
    return "Soy un Loser";
  }
};

//punto 2
let joffrey = new Rey('Joffrey', 'Baratheon', 20, 2)

let jamie = new Luchador('Jamie', 'Lannister', 40, 'Espada', 10);

let danaerys = new Luchador('Daenerys', 'Targaryen', 30, 'Dragones', 5);

let tyrion = new Asesor('Tyrion', 'Lannister', 38, 'Daenerys');

let bronn = new Escudero('Bronn', 'Aguasnegras', 50, 'Jamie', 5);

//punto 3
let personajesGot = [joffrey, jamie, danaerys, tyrion, bronn];

//punto 4

let frasesPersonajes = personas => personas.map(persona => persona.comunicar());

//punto 5

console.log(Personajes.serie);

//punto 6
console.log(frasesPersonajes(personajesGot));

//punto 7

jamie.morir();
tyrion.morir();

//punto 8

function resumir() {
  const resumenGeneral = personajesGot
    .sort((a, b) => a.edad - b.edad)
    .map(personaje => personaje.constructor.name)
    .filter((nombre, i, nombres) => nombres.indexOf(nombre) === i)
    .map(tipo => ({
      tipo,
      personajes: []
    }))
    ;

  const resumenPersonajes = personajesGot.map(personaje => ({
    nombre: personaje.nombre + " " + personaje.familia,
    estado: personaje.estado,
    edad: personaje.edad
  }));

  for (a in resumenGeneral) {
    for (i in resumenPersonajes) {
      if (personajesGot[i].constructor.name === resumenGeneral[a].tipo) {
        resumenGeneral[a].personajes.push(resumenPersonajes[i]);
      }
    }
  }
  return resumenGeneral;
}

//punto 1 DOM

function DOM() {
  for (personaje of personajesGot) {
    const personajeDummy = document.querySelector(".personaje-dummy").cloneNode(true);
    personajeDummy.classList.remove("personaje-dummy");
    personajeDummy.classList.add("eliminar");
    const imagen = personajeDummy.querySelector("img");
    imagen.alt = `Plano medio de ${personaje.nombre} ${personaje.familia} en altísima calidad`;
    imagen.src = `img/${personaje.nombre.toLowerCase()}.jpg`;


    personajeDummy.querySelector(".emoji").textContent = personaje.icono;
    personajeDummy.querySelector(".nombre").textContent = `${personaje.nombre} ${personaje.familia}`;
    personajeDummy.querySelector(".edad-x").textContent = personaje.edad;
    personajeDummy.querySelector(".anyo-reinado").textContent = personaje.anyosReinando;
    personajeDummy.querySelector(".arma").textContent = personaje.arma;
    personajeDummy.querySelector(".destreza").textContent = personaje.destreza;
    personajeDummy.querySelector(".peloteo").textContent = personaje.pelotismo;
    personajeDummy.querySelector(".asesora").textContent = personaje.personajeQueAsesora;
    personajeDummy.querySelector(".sirve").textContent = personaje.sirveAlPersonaje;

    if (personaje.estado === 'muerto') {
      personajeDummy.querySelector(".pulgar-arriba").remove();
      imagen.classList.add("img-estado");
    } else if (personaje.estado === 'vivo') {
      personajeDummy.querySelector(".pulgar-abajo").remove();
    }

    if (personaje instanceof Rey) {
      personajeDummy.querySelector(".li-asesora").remove();
      personajeDummy.querySelector(".li-arma").remove();
      personajeDummy.querySelector(".li-peloteo").remove();
      personajeDummy.querySelector(".li-sirve").remove();
      personajeDummy.querySelector(".li-destreza").remove();
    } else if (personaje instanceof Luchador) {
      personajeDummy.querySelector(".li-asesora").remove();
      personajeDummy.querySelector(".li-anyos").remove();
      personajeDummy.querySelector(".li-peloteo").remove();
      personajeDummy.querySelector(".li-sirve").remove();
    } else if (personaje instanceof Asesor) {
      personajeDummy.querySelector(".li-destreza").remove();
      personajeDummy.querySelector(".li-anyos").remove();
      personajeDummy.querySelector(".li-peloteo").remove();
      personajeDummy.querySelector(".li-sirve").remove();
      personajeDummy.querySelector(".li-arma").remove();
    }
    else if (personaje instanceof Escudero) {
      personajeDummy.querySelector(".li-asesora").remove();
      personajeDummy.querySelector(".li-arma").remove();

      personajeDummy.querySelector(".li-anyos").remove();
      personajeDummy.querySelector(".li-destreza").remove();
    }
    setTimeout(() => {
      document.querySelector(".personajes").append(personajeDummy);
    }, 1000 * (personajesGot.findIndex(persona => persona === personaje) + 1)
    );

  }
}
DOM();

document.body.addEventListener("click", boton => {
  if (boton.target.classList.contains("boton-muere")) {
    for (const personaje of personajesGot) {
      const nombreCompletoPersonaje = `${personaje.nombre} ${personaje.familia}`;
      if (boton.target.closest(".card-body").childNodes[1].innerText === nombreCompletoPersonaje) {
        personaje.morir();
      }
    }
    const quitarElementosClonados = document.querySelectorAll(".eliminar");
    for (const eliminar of quitarElementosClonados) {
      document.querySelector(".personajes").removeChild(eliminar);
    }
    DOM();
  }
});
document.body.addEventListener("click", boton => {
  if (boton.target.classList.contains("boton-habla")) {
    for (const personaje of personajesGot) {
      const nombreCompletoPersonaje = `${personaje.nombre} ${personaje.familia}`;
      if (boton.target.closest(".card-body").childNodes[1].innerText === nombreCompletoPersonaje) {
        boton.target.closest(".container").nextElementSibling.childNodes[1].innerText = personaje.comunicar();
        boton.target.closest(".container").nextElementSibling.classList.add("on");
        const imagen = boton.target.closest(".container").nextElementSibling.childNodes[3];
        imagen.alt = `Plano medio de ${personaje.nombre} ${personaje.familia} en altísima calidad`
        imagen.src = `img/${personaje.nombre.toLowerCase()}.jpg`;
      }
      setTimeout(() => {
        boton.target.closest(".container").nextElementSibling.classList.remove("on");
      }, 2000);
    }
  }
});
