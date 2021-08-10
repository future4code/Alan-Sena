//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//1.A O que vai ser impresso no console?
//Resposta:
//objeto 0 usuario
//objeto 1 usuario
//Objeto 2 usuario

//2.A) O que vai ser impresso no console?
//Resposta: Vai retornar um novo array: novoArrayB = ['Amanda Rangel' , 'Laís Petra' , 'Leticia Chijo']

//3.A) O que vai ser impresso no console?
//Resposta:Vai retornar um novo array sem o aplelido da Chijo: novoArrayC = ['Mandi' , 'Laura']

//Exercício de escrita de código
//1)Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

 /* let pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
] */
//a)Crie um novo array que contenha apenas o nome dos doguinho

/* let nomeDosPets = pets.map((cachorrinhos , indice , array) => {
    return cachorrinhos.nome
})
console.log(nomeDosPets)  */

//b) Crie um novo array apenas com os cachorros salsicha

  /* let petSalsicha = pets.filter((racas) => {
    return racas.raca === "Salsicha"
})
console.log(petSalsicha)  */ 

//c)

/* let clientesPoodles = pets.filter((racas, index, array) => {
   if(racas.raca === "Poodle") 
    return array[index]
})

let mensagem = clientesPoodles.map((racas, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${array[index].nome}!`
})
console.log(mensagem) */
//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) Crie um novo array que contenha apenas o nome de cada item
/*  let nomeDosProdutos = produtos.map((produto) =>{
     return produto.nome
 })
 console.log(nomeDosProdutos) */

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 let desconto = produtos.map((precoo, index, array) =>{
     let porcentagem = (precoo.preco / 20)
     let descontoObtido = (precoo.preco - porcentagem)
      return precoo.nome + 
 })
 console.log(desconto)











/* function exibir(num) {
    console.log(`O resultado é ${num}`)
}

function soma(a, b, cb) {
    let op = a+b
    cb(op)
}

function multiplicacao(a, b, cb) {
    let op = a*b
    cb(op)
}
soma(2,2,exibir)
multiplicacao(2,4,exibir) */
