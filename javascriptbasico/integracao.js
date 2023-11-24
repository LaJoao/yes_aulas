//INTEGRANDO ARRAYS, FUNÇÕES, CONDICÕES E LOOPS

// forEach() - Método que executa uma função pra cada item do array
// iterar : interar significa percorrer ou verificar individualmente cada item de um array

//EXEMPLO:

let frutas = ["Maça", "banana", "abacate", "limão"];

function exibirFrutas() {
    frutas.forEach(function (item) {
        console.log(item); 
    });
}

exibirFrutas()