//INTERPRETAÇÃO DE CÓDIGO
/* Pergunta 1: vai ser impresso o número 10, logo após será impresso os números 10 e 5. */

/* Pergunta 2: Vai ser impresso os números 10 10 10 */

/* Pergunta 3: let p > let horasPorDia ; let t > dinheiroPorDia */

//ESCRITA DE CÓDIGO

//exercício 1
let nome = prompt("Qual o seu nome")
console.log(nome)

let idade = prompt("Qual a sua idade?")
console.log(idade)

console.log("Olá,", nome ,"você tem" , idade , "anos.")

// Resposta etapa D: foi impresso "undefined" pois não atribuimos nenhum valor a variavel
/* Resposta etapa F: foi impresso "strig" nas duas vezes, pois eu pedi informações ao usuário e o sistema identificou os tipo de variaveis*/


//Exercício 2
let celular = prompt("Você está lendo através de um celular? - ")
console.log(celular)

let tempo = prompt("Está se sentindo bem hoje? - ")
console.log(tempo)

//Exercício 3

let a = 10
let b = 25

a = b
b = 10

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)