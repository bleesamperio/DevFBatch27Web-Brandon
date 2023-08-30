/*
1.- Los objetos literales, son una estructura de datos que tambien son conocidos como arreglos asociativos o mpas
2.- Los objetos literales son diferentes de los objetos poo (programacion orientada a objetos)
3.- Objetos Literales !== JSON
4.- Pueden almacenar cualquier tipo de dato primitivos hasta referencias
5.- Los obj. literales son un objeto de tipo "Object"
*/


const MicuentaDeAlumno = {
    // Las propiedades se definen como pares de clave y valor
    id: "Al0171389DevF",
    nombre: "Brandon",
    Materias: ["HTML","CSS","JS"],
    MostrarGrupo(){
        return `El alumno ${this.nombre}, se encuentra cursando la materia ${this.Materia[3]}`;
    }
};

/*"this", Es un objeto que se crea para cad funcio con excepcion de las arrow functions y tambien existe para cada objeto, ya sea objeto literal o de POO y representa una autoreferencia para poder acceder a mi propias propiedades.*/

console.log(MicuentaDeAlumno);
console.log(MicuentaDeAlumno.Materias[3]);
console.log(MicuentaDeAlumno.MostrarGrupo());

// Podemos acceder a los valores de nuestras propiedades y metodos, usando la notacion de punto. 