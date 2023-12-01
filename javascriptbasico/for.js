//LAÇOS DE REPETIÇÕES:
//FOR - Itens sobre a lista com condições específicas

//EXEMPLO:

for(let n =0; n < 5; n++){//Declara a variável let n = 0 com o valor inicial de 0
    /*
    Explicação: enquanto a variável n que inicialmente recebeu o valor de zero, 
    for menos que 5, incremente a variável n a cada execução.
    O código para de executar quando a condição é cumprida
    */ 
    console.log("Nessa execução o número vale: " , n);
};

//

let cor = "branca";

switch(cor){
    case "branca":
        console.log("A cor é branca");
        break;
    case "azul":
        console.log("A cor e azul");
        break;
    default:
        console.log("Cor desconhecida")
}
v