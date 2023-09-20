const arr = [0,12,67,4,2,1];

function ordenamientoBurbuja(arregloaAOrdenar){
    const total = arregloaAOrdenar.length;

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
            if (arregloaAOrdenar[j] > arregloaAOrdenar[j+1]) {
                [arregloaAOrdenar[j], arregloaAOrdenar[j+1]] = [arregloaAOrdenar [j+1], arregloaAOrdenar[j]];
            }
        }
    }
    return arregloaAOrdenar
}

console.log(arregloaAOrdenar(arr));