//Recorrer los datos
//Se aseguran que los valores de la izquierda, sean los valores mas chicos y los de la derecha mayores
//Pregunta de derecha a izquierda, si soy el elemento mas chico, si esto ocurre se intercambia la posicion. 

function odernamientoPorInsercion(numerosAOrdenar){
    for (let i = 1; i < numerosAOrdenar.length; i++) {
        let j = i;
        while(j >= 1 && numerosAOrdenar[j] > numerosAOrdenar[j -1]){
            [numerosAOrdenar[j-1], numerosAOrdenar[j]] = [numerosAOrdenar[j], numerosAOrdenar[j-1]];
            j--
        }
    }

    return numerosAOrdenar
}

console.log(odernamientoPorInsercion([3,0,6,1]));