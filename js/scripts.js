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
  constructor(nombre, familia, edad) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  comunicar() {
    super.comunicar();
    return "Vais a morir Todos";
  }
}
class Luchador extends Personajes {
  constructor(nombre, familia, edad) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
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
  constructor(nombre, familia, edad) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  comunicar() {
    super.comunicar();
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

class Escudero extends Personajes {
  constructor(nombre, familia, edad) {
    super();
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
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
const joffrey = new Rey('Joffrey', 'Baratheon', 20)

const jamie = new Luchador('Jamie', 'Lannister', 40);

const danaerys = new Luchador('Daenerys', 'Targaryen', 30);

const tyrion = new Asesor('Tyrion', 'Lannister', 38);

const bronn = new Escudero('Bronn', 'Aguasnegras', 50);

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
const resumenPersonajes = personas => personas
  .map(personas => personas.constructor)
  .filter((persona, i, personas) => personas
    .indexOf(persona) === i);

console.log(resumenPersonajes(personajesGot));

/*
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
  });
  ))
*/
