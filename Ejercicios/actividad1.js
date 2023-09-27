/*class rectangulo{
    constructor(ancoho,alto){
        this.ancho= ancho;
        this.alto= alto;
    }
}
area(){
    return(`${this.ancho * this.alto}, area del rectangulo`)
}

function ordenArray(arr){
    returnarr.sort()
}*/

/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */

class Contador {
    constructor(valorActual){
        this.valorActual = valorActual;
    }
    incrementar(valorActual){
        let valorIncrementado = valorActual + 1;
        return valorIncrementado;
    }
    obtenerValor(valorActual){
        let resp = this.valorActual
        return resp;
    }
}

var numToIncrement = new Contador(2)
numToIncrement.incrementar() // devuelve el numero 3
numToIncrement.obtenerValor() // devuelve el numero 2

/**
 * Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

function ordenarArray(array) {
    let arrayOrdenado = array.slice().sort((a,b) => a-b)
    return arrayOrdenado;
}

function ordenarArrayNastyf(array) {
    const newArray = array.slice;
    const length = newArray.length;

    for (let index = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (newArray[j]>newArray[j+1]){
                //Intercambiamos elementos si estan en el orden incorrecto
                const temp = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j +1]=temp;
            }
            
        }
        
    }
    return newArray
}

const numeros = [8,7,3,5,1,2,9,4,6]
console.log(ordenarArray(numeros))

/**
 * Crear una clase "Rectangulo" con propiedades "ancho" 
 * y "alto" y un método "area" que calcule el área del 
 * rectángulo.
 */

class Rectangulo{
    constructor(ancho,alto){
    this.ancho = ancho;
    this.alto = alto;
    }
    area(){
        return this.ancho * this.alto;
    }
    perimetro(){
        return 2*this.ancho + 2*this.alto;
    }
}

const rectangulo = new Rectangulo(8,4);
console.log ('Area del rectangulo =', rectangulo.area())
console.log ('Perimetro del rectangulo =', rectangulo.perimetro())

/**
 * Crear una función "factorial" que acepte un número 
 * como parámetro y devuelva su factorial 
 * (el producto de todos los números enteros positivos
 *  desde 1 hasta el número).
 */

function factoirial(n) {
    if (n === 0 || n ===1){
        return 1
    }
    else{
        return n * factoirial(n-1)
    }
}

console.log('factorial de 5 es ', factoirial(5))

/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */

class Agenda{
    constructor(){
        this.contactos=[]
    }
    agregarContacto(nombre,mail,telefono){
        const nuevoContacto = {nombre,mail,telefono};
        this.contactos.push(nuevoContacto);
    }
    eliminarContacto(nombre){
        this.contactos = this.contactos.filter(contacto => contacto.nombre !== nombre);
    }
    buscarContacto(nombre){
        var contacto = [];
        return contacto = this.contactos.find(contacto => contacto.nombre === nombre);
    }
    buscarContactoPorLetra(letra){
        var contacto = [];
        return contacto = this.contactos.filter(contacto => contacto.nombre[0] === letra);
    }

}

const agenda = new Agenda ();
agenda.agregarContacto("Enrique", "enrique.maya@gmail.com","005000");
agenda.agregarContacto("Montoya", "Montoyita7.com","77762539");
agenda.agregarContacto("Ariana", "ariana_medina@gmail.com","00020039");
agenda.agregarContacto("Brandon", "brandon.lee@gmail.com","007");

console.log ("Contactos en la agenda: ", agenda.contactos);

agenda.eliminarContacto("Enrique", "enrique.maya@gmail.com","005000");
console.log ("Contactos en la agenda: ", agenda.contactos);

const contactoBrandon = agenda.buscarContacto("Brandon");
console.log("Informacion de ", contactoBrandon)

const contactosA = agenda.buscarContactoPorLetra("A")
console.log("Contactos en la agenda con la letra A: ", contactosA)