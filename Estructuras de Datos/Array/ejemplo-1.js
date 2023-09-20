//¿Como podria crear un arreglo?

class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.data
    }
    pop(){
        //Validar que el arreglo no este vacio
        //Modificar la cantidad de elementos, restar una unidad
        //Escribir el condigo para obtener el ultimo elemento
        const lasItem = this.data[this.length -1];
        delete this.data[this.length -1];
        this.length--;
        return lasItem;
    }
    unshift(item) {
        // - PEDIR UN VALOR A AGREGAR
        // - MODIFICAR LOS INDICES, DESPLAZANDOLOS HACIA ADELANTE
        // - UNA VEZ QUE LO TENGAMOS Y QUE LOS INDICES SE HAYAN MODIFICADO
        // - COLOCAR ESE VALOR EN EL INDICE 0
        // - AUMENTAR LA LONGITUD DEL ARREGLO EN UNA UNIDAD
        // - RETORNAR LA CANTIDAD NUEVA DE ELEMENTOS DEL ARREGLO
        const lastItem = this.data[this.length - 1];
    
        for (let i = 0; i <= this.length - 1; i++) {
          // VALORES: undefined, 1, 2, 4
          // INDICES: 0, 1, 2, 3
        this.data[i + 1] = this.data[i];
        };
    
        this.data[this.length] = lastItem;
        this.data[0] = item;
    
        this.length++;
        return this.length;
    };
      // TODO: CREAR EL METODO PARA REMOVER EL PRIMER ELEMENTO
    //shift() { }
};

const art1 = new myArray()
console.log(art1);
console.log(art1.get(1));

art1.push("Dolores")
art1.push(["Español","Matematicas"])
art1.push("Dolores")

console.log(art1.get(0));
console.log(art1);

arr1.unshift("cero");
console.log(arr1);