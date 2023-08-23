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

var numToIncrement = new Contador (2);
console.log (numToIncrement.incrementar()); //Devuelve el 3
console.log (numToIncrement.valorActual()); //Devuelve el 2

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