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
let primeiraPergunta = prompt("Está lendo através de um celular?")
let segundaPergunta = prompt("Acessou alguma rede social hoje?")
let terceiraPergunta = prompt("Seu dia foi bom?")

let respostaUm = primeiraPergunta
let respostaDois = segundaPergunta
let respostaTres = terceiraPergunta

console.log("Está lendo através de um celular?", respostaUm)
console.log("Acessou alguma rede social hoje?", respostaDois)
console.log("Seu dia foi bom?", respostaTres)
//Exercício 3

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)