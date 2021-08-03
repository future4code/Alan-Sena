// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

// 1. O que vai ser impresso no console?
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Globo"   horario: "14h"

//2.a) O que vai ser impresso no console?
//console.log(cachorro)  // nome: "Juca" // idade: 3 // raca: "SRD"
//console.log(gato)      // nome: "Juba" // idade: 3 // raca:"SRD"
//console.log(tartaruga) // nome: "Jubo" // idade: 3 // raca: "SRD"
//
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//ela pega a referencia(palavra seguinte) e copia os dados do objeto citado e traz para o objeto que estamos trabalhando.

//EXERCÍCIOS DE ESCRITA DE CÓDIGOS

//1
//A.
/* let usuario = {
    nome: "Alan",
    apelidos: ["Lan", " Marcos", " Dudu"],
}

let outrosApelidos = {
    ...usuario,
    apelidos: ["O brabo", "O monstro", "O cara"]
}

function mensagem(entradaUsuario) {
    const impressao = (`Eu sou ${entradaUsuario.nome}, mas pode me chamar de: ${entradaUsuario.apelidos[0]}, ${entradaUsuario.apelidos[1]} ou ${entradaUsuario.apelidos[2]}.`)
    return impressao
}
const texto1 = mensagem(usuario)
console.log(texto1)
const texto2 = mensagem(outrosApelidos)
console.log(texto2) */

/* //2.
let primeiro = {
    nome: "Maria",
    idade: 20,
    profissao: "Advogada"
} 
let segundo = {
    nome:"João",
    idade: 21,
    profissao: "Médico",
}
function retorno(nomeDosObjetos) {
    let resultado1 = []
    let valores = typeof(nomeDosObjetos.nome)
    let caracteresNome = nomeDosObjetos.nome.length
    let valorIdade = typeof(nomeDosObjetos.idade)
    let valorProfissao = typeof(nomeDosObjetos.profissao)
    let caracteresProfissao = nomeDosObjetos.profissao.length 
    
    let resultado = resultado1.push(valores, caracteresNome, valorIdade, valorProfissao, caracteresProfissao)
    console.log(resultado1)
}
retorno(primeiro)
retorno(segundo) */

/* //3.
let carrinho = []

let fruta1 = {
    fruta: "Laranja",
    disponibilidade: true
}
let fruta2 = {
    fruta: "Maçã", 
    disponibilidade: true
}
let fruta3 = {
    fruta: "Banana",
    disponibilidade: true
}
function colocarNoCarrinho(frutas) {
    let inserir = frutas.fruta
    let noCarrinho = carrinho.push(inserir)
}

colocarNoCarrinho(fruta1)
colocarNoCarrinho(fruta2)
colocarNoCarrinho(fruta3)
console.log(carrinho)  */

