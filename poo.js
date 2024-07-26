/**
 * Conceptos basicos
 * Abstraccion: identificar y separar las características más importantes de un objeto, ignorando detalles innecesarios. Ayuda a centrarse en lo esencial y a crear modelos más manejables.
 * modularidad: dividir el código en módulos o partes más pequeñas y manejables. Cada módulo tiene una función específica y puede ser desarrollado, probado y mantenido de forma independiente.
 * encapsulamiento: Implica ocultar los detalles internos de la implementación de una clase y proporcionar una interfaz clara para interactuar con el objeto. Se logra mediante el uso de modificadores de acceso (como públicos y privados) para controlar el acceso a los atributos y métodos de una clase.
 * polomorfismo: Permite que objetos de la misma clase puedan comportarse de manera diferente. Puede manifestarse en dos formas: polimorfismo de tiempo de compilación (o estático) y polimorfismo de tiempo de ejecución (o dinámico).
 * */


class Animal {
  //creo plantilla del/los objtos
  constructor(raza, ed, col) {
    this.raza = raza;
    this.edad = ed;
    this.color = col;
    this.informacion = `Soy un ${this.raza} y tengo ${this.edad} años.`; //esto se va actualizar con cadad atributo del objeto
  }
  verInfor() {
    // Metodo/ funcion especifica del objeto
    console.log(
      `Esto es un metodo que muestra la informacion: ${this.informacion}`
    );
  }
}

const calel = new Animal("Caniche", 7, "blanco");
console.log(calel);
calel.habilidad = "Correr";
console.log(calel);

const maggie = new Animal("Mestiza", 5, "Negra con canela");
console.log(` Maggie es ${maggie.color}`);
console.log(maggie);
maggie.verInfor(); //llamo al metodo.

class Aves {
  constructor(nombre, tipo, tamano, color, habitat) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.tamano = tamano;
    this.color = color;
    this.habitat = habitat;
  }

  presentacionFormal() {
    console.log(
      `Soy un ${this.nombre}, de tamaño ${this.tamano}, de color ${this.color}. Mi hábitat principal es ${this.habitat}.`
    );
  }
}

const aguila = new Aves(
  "Águila Real",
  "rapaz",
  "grande",
  "marrón y blanco",
  "montañas"
);
const colibri = new Aves(
  "Colibrí ",
  "colibrí",
  "pequeño",
  "vibrante",
  "jardines"
);
const pinguino = new Aves(
  "Pingüino ",
  "pingüino",
  "mediano",
  "negro y blanco",
  "regiones polares"
);
const cuervo = new Aves(
  "Cuervo",
  "cuervo",
  "mediano",
  "negro",
  "bosques y ciudades"
);
const tucan = new Aves(
  "Tucán",
  "tucán",
  "grande",
  "multicolor",
  "selvas tropicales"
);
const albatros = new Aves(
  "Albatros",
  "albatros",
  "grande",
  "blanco",
  "océanos abiertos"
);

aguila.presentacionFormal();
colibri.presentacionFormal();
pinguino.presentacionFormal();
cuervo.presentacionFormal();
tucan.presentacionFormal();
albatros.presentacionFormal();

/** HERENCIA */
console.log("⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯");
class AvesAcuaticas extends Aves {
  constructor(
    nombre,
    tipo,
    tamano,
    color,
    habitat,
    tipoDeAgua,
    paisResidencia
  ) {
    super(nombre, tipo, tamano, color, habitat);
    this.tipoDeAgua = tipoDeAgua;
    this.paisResidencia = paisResidencia;
  }
  nadar() {
    console.log(`～～～～～${this.nombre} nadando～～～～～`);
  }
  set setNombre(newName) {
    console.log("Se modificara a ", this.nombre);
    this.nombre = newName;
  }
  get getNombre() {
    return `Ahora es: ${this.nombre}`;
  }
  static metodoDeClase() {
    console.log(
      `• Este es un metodo estatico • es un metodo de clase, no puede utilzar this`
    );
  }
}

const pato = new AvesAcuaticas(
  "Pato",
  "acuática",
  "mediano",
  "blanco y marrón",
  "lagunas",
  "dulce",
  "Argentina"
);
pato.nadar();
AvesAcuaticas.metodoDeClase();

pato.setNombre = "Patito"; //llamo al metodo, lo utilizo.
console.log(pato.getNombre); //Muestro el objeto despues de modificarlo.

class MarianaEnriquez {
  constructor(libro, anio, cantPags) {
    this.libro = libro;
    this.anio = anio;
    this.cantPags = cantPags;
  }
}

const libro1 = ("Nuestra parte de noche", 2019, 667);
const libro2 = ("Los peligros de fumar en la cama", 2017, 199);

class Historias extends MarianaEnriquez {
  constructor(libro, anio, cantPags, cantidadCuentos) {
    super(libro, anio, cantPags);
    this.cantidadCuentos = cantidadCuentos;
  }
}


function leerNro(msj) {
  return parseInt(prompt(msj));
}

let unNumero = leerNro("Ingresa");
alert(` El numero ingresado es ${unNumero}`);

let objetoPersona = {
  nombre: "Carlos",
  edad: 30,
  tieneHijos: "Si",
  saludar: function () {
    console.log(
      `Soy funcion propia de persona, me llamo ${this.nombre} y tengo ${this.edad} `
    );
  },
};

let personita = objetoPersona ;

console.log("FIN")