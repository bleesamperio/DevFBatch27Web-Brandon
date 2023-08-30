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
};

const art1 = new myArray()
console.log(art1);
console.log(art1.get(1));

art1.push("Dolores")
art1.push(["Español","Matematicas"])
art1.push("Dolores")

console.log(art1.get(0));
console.log(art1);