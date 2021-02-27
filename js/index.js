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
  gradoPelotismo;
  constructor(nombre, familia, edad, personajeAlQueSirve, grado) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.sirveAlPersonaje = personajeAlQueSirve;
    this.gradoPelotismo = this.pelotismo;
  }
  set verificarPersonaje(personajeIndefinido) {
    this.sirveAlPersonaje(personajeIndefinido);
  }
  sirveAlPersonaje(personaje) {
    if (personaje instanceof Luchador) {
      this.personajeQueSirve = personaje;
    }
  }
  set gradoPelotismo(gradoAVerificar) {
    this.pelotismo(gradoAVerificar);
  }
  pelotismo(grado) {
    if (grado < 0) {
      this.grado = 1
    } else if (grado > 10) {
      this.grado = 10
    }
  };
  comunicar() {
    super.comunicar();
    return "Soy un Loser";
  }
};

//punto 2
let joffrey = new Rey('Joffrey', 'Baratheon', 20, 2)

let jamie = new Luchador('Jamie', 'Lannister', 40, 'Espada');

let danaerys = new Luchador('Daenerys', 'Targaryen', 30, 'Dragones');

let tyrion = new Asesor('Tyrion', 'Lannister', 38, 'Daenerys');

let bronn = new Escudero('Bronn', 'Aguasnegras', 50, 'Jamie');

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
const iconoVivoMuerto = document.querySelector(".icono-estado");

function DOM() {
  for (personaje of personajesGot) {
    const personajeDummy = document.querySelector(".personaje-dummy").cloneNode(true);
    personajeDummy.classList.remove("personaje-dummy");
    const imgDummy = document.createElement("img");
    document.querySelector(".nombre").textContent = `${personaje.nombre} ${personaje.familia}`;
    document.querySelector(".edad-x").textContent = personaje.edad;
    document.querySelector(".anyo-reinado").textContent = personaje.anyosReinando;
    document.querySelector(".arma-XXX").textContent = personaje.armaQueUtiliza;
    document.querySelector(".destreza-x").textContent = personaje.potencia;
    document.querySelector(".peloteo-X").textContent = personaje.grado;
    document.querySelector(".asesora-x").textContent = personaje.asesoraA;
    document.querySelector(".sirve-x").textContent = personaje.personajeAlQueSirve;
    if (personaje.constructor.name.toLowerCase() === 'rey') {
      document.querySelector(".emoji").textContent = '👑';
    } else if (personaje.constructor.name.toLowerCase() === 'luchador') {
      document.querySelector(".emoji").textContent = '🗡';
    } else if (personaje.constructor.name.toLowerCase() === 'asesor') {
      document.querySelector(".emoji").textContent = '🎓';
    } else (personaje.constructor.name.toLowerCase() === 'escudero');
    document.querySelector(".emoji").textContent = '🛡';
    if (personaje.estado === 'Muerto') {
      iconoVivoMuerto.remove();
    };

  };
}

DOM();
