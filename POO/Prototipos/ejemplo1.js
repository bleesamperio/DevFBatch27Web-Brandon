//Definicion: JavaScript, Es un lenguaje Multiparadigma,
//Principalmente orientado a objetos y basado en prototipos
function Animal(nombre, color){
    this.nombre = nombre;
    this.color = color;
    this.sonidoAnimal = function sonidoAnimal() {
        return `Hola, estoy emitiendo el sonido de ${this.nombre}`
    };
};

//Un objeto es una instancia de un prototipo
const jaguar = new Animal("jaguar", "amarillo");

//A partir del prototipo de arriba, crear los siguientes objetos: jirafa, conejo
const jirafa = new Animal("jirafa", "amarillo con manchas");
const conejo = new Animal("conejo", "gris");

console.log(jaguar);
console.log(jirafa);
console.log(conejo);

//Para acceder a las propiedades de un objeto, hacemos uso de la notacion del punto
console.log(jaguar.nombre);
console.log(jirafa.color);

//Tambien puedo acceder a las propiedades de un objeto con la notacion de los corchetes cuadrados
console.log(conejo["nombre"]);

//Este manda a llamar la funcion de un prototipo
// DIRENCIA DE METODO Y FUNCION:
// * UN METODO, SE EJECUTA UTILIZANDO EL OBJETO Y LA NOTACION DEL PUNTO
console.log(conejo.sonidoAnimal());


console.log(jaguar.sonidoAnimal());