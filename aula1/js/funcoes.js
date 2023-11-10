//camelCase - EScrevemos uma declaração sem espaço, começando com minúsculo e alterando enter maiúsculo e minúsculo
//ex: saudarUsuarioLogado


function saudarUsuario(nome){
    console.log('Olá, ' + nome);
};

saudarUsuario("Joao");

function somar(n1,n2){
    return n1 + n2
}
console.log('A soma dos dois números é '+ somar(5,10));

function adicao(n1,n2){
    return n1 + n2
}
console.log('A adição dos números é '+ adicao(12,10));

function subtracao(n1,n2){
    return n1 - n2
}
console.log('A subtração dos números é '+ subtracao(29,15));

function multiplicacao(n1,n2){
    return n1 * n2
}
console.log('A mutiplicação dos números é '+ multiplicacao(3,8));

function divisao(n1,n2){
    return n1 / n2
}
console.log('A divisão dos números é '+ divisao(14,3));


function corDoSemafaro(cor){
    if(cor === "verde"){
        return "Siga em frente";
    }else if(cor === "amarelo"){
        return "Atenção";
    }else if(cor === "vermelho"){
        return "Pare";
    }else{
        return("cor inválida");
    };
}

console.log("Cor do semáro",corDoSemafaro("verde"));

//array - lista

let frutas = ['maça', 'banana', 'uva', 'morango']

//ADICIONANDO UM ITEM NA LISTA, USAMOS push();
frutas.push("laranja");
console.log(frutas);

//ADICIONANDO UM ITEM NA LISTA AO INÍCIO, USAMOS unshifit();
frutas.unshift("pera");
console.log(frutas);

//REMOVENDO UM ITEM NA LISTA, USAMOS pop();
frutas.pop("pera");
console.log(frutas);

//REMOVENDO UM ITEM NA LISTA NO INÍCIO, USAMOS shift();
frutas.shift("pera");
console.log(frutas);

//DESCOBRINDO QUAL A POSIÇÃO DE UM ITEM NO ÍNDICE indexOf();
let indice = frutas.indexOf("banana")
console.log(indice);

//CONTANDO O ITENS DA LISTAS = length;
let numeroDeFrutas = frutas.length
console.log(numeroDeFrutas)

//VERIFICANDO SE A LISTA ESTÁ VAZIA;
if(frutas.length === 0){
    console.log("A lista está vazia");
}
else{
    console.log("A lista está cheia")
}

//VERIFICAR SE UM ITEM CONTÉM UM DETERMINADO ELEMENTO = includes;
let contemBanana = frutas.includes("banana");
console.log(contemBanana);

if(!frutas.includes("uva")){
    console.log("Não tem uva na lista");
}else{
    console.log("Tem uva na lista");
}

function verificarAcesso(id){
    const idsAutorizados = [100,101,102,103,104,105];
    if(idsAutorizados.includes(id)){
        console.log("Acesso autorizado");
    }else{
        console.log("Acesso negado!");
    }
}

verificarAcesso(105);