class Queue{
    constructor(){
    this.items=[];//Arreglo ene l cual guardamos nuestros elementos
    }
    enqueue(item){// Encolar o agregar a la fila
        this.items.push(item);// Agrega un elemento al final de la cola
    }

    dequeue(item){//Desencolar o quitar de la fila
        if (this.isEmpty) {
            return 'No hay elementos en la queue'
        }
        return this.items.shift();// Dequeue: retirar/elimnar el primer elemento de la cola
    }

    front(){
    return this.items[0] //Devuelve el primer elemento sin eliminarlo de la cola
    }
    isEmpty(){
        return this.items.length ===0; // Verifica su la cola esta vaccia
    }
    size(){
        return this.items.length; // Devuelve la cantidad de elementos en la cola
    }

}

const cola = new Queue();
console.log(cola.front());

cola.enqueue(7);
cola.enqueue(24);
cola.enqueue(11);
cola.enqueue(313);

console.log(cola);

console.log(cola.dequeue()); //no quita el 7 ya que fue el primero en entrar
console.log(cola.front()); // Nos va a moestrar el 24 ya que es el numero consecutivo
console.log(cola); 
console.log(cola.size());