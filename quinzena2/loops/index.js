//EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
//Resposta: enquanto a variavel i for menr que 5 incrementa +1 e soma ao valor da variavel valor. E ao final do loop imprime 10.

//2.a) O que vai ser impresso no console?
//Resposta:19, 20, 21, 23, 25, 27, 30
//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//Resposta: Não, teria que usar o indexOf().

/*3. 
  *
  **
  ***
  **** */

//EXERCÍCIO DE ESCRITA DE CÓDIGO
//1.
/* let bichinhos = Number(prompt('Quantos bichinhos de estimação você tem?'))
let nomeBichinhos = []

if(bichinhos > 0){
    while((nomeBichinhos.length + 1) <= bichinhos){
    let perguntaNomes = prompt('Qual o nome deles?')
    nomeBichinhos.push(perguntaNomes)
  }
  console.log(nomeBichinhos)
}
else if(bichinho === 0 ){
  console.log('Que pena! Você pode adotar um pet.')
} 
 */
//2.
let original = [10, 31, 44, 65, 78, 99]
/* //A.
function valoresDoArray(valores) {
  for(impressao of valores){
    console.log(impressao)
  }
}
valoresDoArray(original) */

//B. 
/* function dividirPorDez(valores) {
  for(impressao of valores){
    let divisao = (impressao / 10)
    console.log(divisao) 
  }
}
dividirPorDez(original) */

//C.
 /* function numerosPares(valores) {
  let numerosPares = []
  for (let i = 0; i < valores.length; i++) {
    const copia = valores[i];
    
    if(copia % 2 === 0){
      numerosPares.push(copia)
      console.log(copia)
    }
  }
} 
numerosPares(original) 
 */

//D.
/* let comString = []

function frase(valores) {
  for (let i = 0; i < valores.length; i++) {
    const element = valores[i];
    comString.push(`O elemento do index ${i} é: ${element}`)
  }
  console.log(comString)
}
frase(original)
 */
//E.
function maior(array){
  let maiorNumero = 0
  for (let i = 0; i < array.length; i++) {
    if(array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}
let numeroMaior = maior(original)

function menor(array){
  let menorNumero = 100
  for (let i = 0; i < array.length; i++) {
    if(array[i] < menorNumero){
      menorNumero = array[i]
    }
  }
  return menorNumero
}
let numeroMenor = menor(original)
console.log(`O maior número é ${numeroMaior} e o menor é ${numeroMenor}`)