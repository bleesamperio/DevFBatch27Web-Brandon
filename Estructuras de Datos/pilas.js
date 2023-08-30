class Stack{
    constructor(){
        this.items= []; //Usamos un arreglo para poder almacenar los daros de nuestro arreglo
    }

    push(items){
        this.items.push(items);//Agregamos al final de la pila un elemento
    }

    pop(){ //Elimina y muestra(devuelve) el ultimo elemento de nuestra pila
        if (this.isEmpty()){//El metodo isEmpty() se realizara mas adelante es parte de los metodos de nuestra clase Stack
            return'La pila esta vacia';
        } 
        return this.items.pop();
    }

    peek(){// [0,1,2,3,4] este areflo tiene como tamañp 5 y en su posicion 4 esta el valor 4
    return this.items[this.items.length -1];//Devolvemos el valor del utlimo elemento de nuestra pila pero no lo eleimina
    }

    size(){
        returnthis.times.length; //Devuelve el numero de elementos que se encuentra en la pila
    }
    isEmpty(){
        return this.items.length === 0;
    }

}

//Uso de la pila
const pila = new Stack();
pila.push(66); 
pila.push(22); 
pila.push(55); 
pila.push(33); 
pila.push(11); 
pila.push(88);
pila.push(77); 
pila.push(99); 
pila.push(44);

console.log(pila);
console.log(pila.pop()); //debera sacar el ultimo registro "44"
console.log(pila);
console.log(pila.peek()); //99 pero no lo elimina 
console.log(pila);
console.log(pila.size);