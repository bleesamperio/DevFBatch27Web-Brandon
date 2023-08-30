class Nodo{
    constructor(valor){
        this.valor = valor// DATOS ALMACENADOS EN EL NODO
        this.nodoSiguiente = null //Referencia a donde apuntara nuesto nodo
    }
}

class ListaEnlazada {
    constructor(){
        this.cabeza = null; //Apuntamos al primer nodo
    }
    append(valor){
        const nuevoNodo = new Nodo(valor);

        if (!this.cabeza) {
            this.cabeza = nuevoNodo; //Si la lista esta vacia, el nuevo nodo se convierto en el primero
        }
        else{
            let actual = this.cabeza;
            while (actual.nodoSiguiente){
                actual = actual.nodoSiguiente
            }
            actual.nodoSiguiente = nuevoNodo// Agregar el nuevo nodo al final de la lista.
        }
    }

    prepend(valor){
        const nuevoNodo = new Nodo(valor)
        nuevoNodo.nodoSiguiente = this.cabeza// Establecemos el nuevo nodo como el primero/cabeza
        this.cabeza = nuevoNodo;
    }
    delete(valor){
        if (!this.cabeza) {
            return 'Borre la cabeza'
        }
        if (this.cabeza.valor === valor) {
            this.cabeza = this.cabeza.nodoSiguiente; // Elimina el primer nodo si el contiene los datos buscados
            return;
        }
        let actual = this.cabeza;
        while (actual.nodoSiguiente) {
            if (actual.nodoSiguiente.valor === valor) {
                actual.nodoSiguiente = actual.nodoSiguiente.nodoSiguiente// Elimina el nodo siguiente si contiene los datos buscados
                return;
            }
            actual = actua.nodoSiguiente
        }
    }
    display(){
        let actual = this.cabeza;
        while (actual){
            console.log(actual.valor);
            actual = actual.nodoSiguiente
        }
    }

    setHead(nodo){
        if (!nodo|| !(nodo instanceof Nodo)) {
            return console.log('El nodo ingresado no es un nodo valido');
        }
        this.delete(nodo.valor)
        nodo.nodoSiguiente=this.cabeza;// El nodo proporcionado apuntara al nodo actual de la cabeza 
        this.cabeza = nodo; //El nodo proporcionado se convierte en la nueva cabeza.
    }
}

const listaEnlazada = new ListaEnlazada();
listaEnlazada.append(10);
listaEnlazada.append(23);
listaEnlazada.append(19);
listaEnlazada.append(9);
listaEnlazada.append(7);
listaEnlazada.append(18);
listaEnlazada.append(50);
listaEnlazada.display();
console.log('---------------')
listaEnlazada.delete(23);
listaEnlazada.display();
console.log('---------------')
listaEnlazada.delete(10);
listaEnlazada.display();
console.log('---------------')
listaEnlazada.prepend(7);
listaEnlazada.append(235);
listaEnlazada.display();
console.log('---------------')

const nuevocabeza = new Nodo(18)
listaEnlazada.setHead(nuevocabeza);
listaEnlazada.display();