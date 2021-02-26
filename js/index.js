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
  constructor(nombre, familia, edad, añosReinando) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.añosReinando = añosReinando;


  }
  comunicar() {
    super.comunicar();
    return "Vais a morir Todos";
  }
}
class Luchador extends Personajes {
  constructor(nombre, familia, edad, arma) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.arma = arma;
  }
  comunicar() {
    super.comunicar();
    return "Primero pego y luego pregunto";
  }
  destreza(potencia) {
    if (potencia < 0) {
      this.potencia = 1
    } else if (potencia < 10) {
      this.potencia = 10
    }
  }
}
class Asesor extends Personajes {
  constructor(nombre, familia, edad, personajeQueAsesora) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.personajeQueAsesora = personajeQueAsesora;
  }
  comunicar() {
    super.comunicar();
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

class Escudero extends Personajes {
  constructor(nombre, familia, edad, sirveAlPersonaje) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.sirveAlPersonaje = sirveAlPersonaje;
  }
  pelotismo(grado) {
    if (grado < 0) {
      this.grado = 1
    } else if (grado > 10) {
      this.grado = 10
    }
  }
  comunicar() {
    super.comunicar();
    return "Soy un Loser";
  }
}

//punto 2
const joffrey = new Rey('Joffrey', 'Baratheon', 20, 2)

const jamie = new Luchador('Jamie', 'Lannister', 40, 'Espada');

const danaerys = new Luchador('Daenerys', 'Targaryen', 30, 'Dragones');

const tyrion = new Asesor('Tyrion', 'Lannister', 38, 'Daenerys');

const bronn = new Escudero('Bronn', 'Aguasnegras', 50, 'Jamie');

//punto 3
const personajesGot = [joffrey, jamie, danaerys, tyrion, bronn];

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
/*
const resumenPersonajes = personas => personas
  .map(personas => personas.constructor)
  .filter((persona, i, personas) => personas
    .indexOf(persona) === i);

console.log(resumenPersonajes(personajesGot));


  .filter((persona, i, personas) => personas.indexOf(persona) === i)
    .sort((a, b) => a.edad - b.edad);
.push({
    tipo: personas.constructor.name,
    personajes:
    {
      nombre: (`${personas.nombre} ${personas.familia}`),
      estado: personas.estado,
      edad: personas.edad,
    }
*/

//punto 1 DOM
const claseDummy = document.querySelector(".personaje-dummy")

for (personaje of personajesGot) {
  const personajeDummy = claseDummy.cloneNode();
  const imgDummy = document.createElement("img");
  imgDummy.src =
   /* document.createElement(".nombre") = `${personaje.nombre} ${personaje.familia}`;
  document.createElement(".edad") = personaje.edad;
  document.createElement(".años-de-reinado") = personaje
*/


}
claseDummy.remove();

