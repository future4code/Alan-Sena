// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//Exercício 1: a. Undefined 
// b. null 
// c. 11
// d. 3
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// f. 9

//exercício 2:
// SUBA NUM ONBUS EM MIRROCOS 27
// Fiz a correção, pois interpretei errado o replaceaall e não me lembrava que o .langth contava os espaços.


// Exercício de escrita de código

//Exercício 1

const nomeDoUsuario = prompt("Digite seu nome.")
const emailDoUsuario = prompt("Digite seu e-mail.")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)
//Fiz a correção do tipo de concatenação com o dolar.

//Exercício 2

let comidas = ['costela', 'feijão', 'lasanha', 'hamburguer', 'pizza']
console.log(comidas)

console.log("Essas são minhas comidas preferidas: ")
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

let comidaDoUsuario = prompt('Qual a sua comida preferida?')
let deletandoComidas = comidas.splice(1,1)
let addComidas = comidas.push(comidaDoUsuario)

console.log(comidas)

//Exercício 3

let listaDeTarefas = []

let tarefa1 = prompt("Qual a sua primeira tarefa do dia?")
let tarefa2 = prompt("Qual a sua segunda tarefa do dia?")
let tarefa3 = prompt("Qual a sua terceira tarefa do dia?")

let addTarefas = listaDeTarefas.push(tarefa1, tarefa2 , tarefa3)

console.log(listaDeTarefas)

let listaDeTarefa1 = listaDeTarefas

let jaRealizado = prompt("Qual das três tarefas você já cumpriu? (Digite em Números)")

let retirandoTarefa = listaDeTarefas1.splice(Number(jaRealizado, 1))
console.log(listaDeTarefas)
 // Fiz uma pequena correção na linha 58 convertendo em Number.