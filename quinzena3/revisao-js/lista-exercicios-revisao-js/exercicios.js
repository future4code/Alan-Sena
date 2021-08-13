// EXERCÍCIO 01
function inverteArray(array) {
  let meuArrayInvertido = []
  for (let i = array.length -1; i >= 0; i--) {
    meuArrayInvertido.push(array[i])
  }
  return meuArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter((numero) =>{
    let numeroVerifica = numero
    if(numeroVerifica % 2 === 0){
      return numeroVerifica
    }
  })

  let numerosElevadosA2 = numerosPares.map((numero) =>{
    let novosNumeros = Math.pow(numero,2)
    return novosNumeros
  })

  return numerosElevadosA2 
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = array.filter((numero) =>{
    let numeroVerifica = numero
    if(numeroVerifica % 2 === 0){
      return numeroVerifica
    }
  })
  return numerosPares 
}

// EXERCÍCIO 04

function retornaMaiorNumero(array) {
  let maiorNumero = 0
  
  for (let i = 0; i < array.length; i++) {
      if(array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
    return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  let respostas = [false, false, true, true, true]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numeros = []
  let numeroAtual = 0
  for (let i = 0; i < n; i++) {
    numeros.push(numeroAtual)
    numeroAtual = (numeroAtual + 2)
  }
  return numeros
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if(a === b && a === c && c === b) {
    return 'Equilátero'
  }else if((a !== b && a !== c && c === b) || (b !== a && a === c && b !== c) || (c !== a && a === b && c !== b)){
    return 'Isósceles'
  }else if(a !== b && a !== c && c !==b){
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let objeto = {}
  
  if(num1 > num2){
    objeto.maiorNumero = num1
    
    if(num1 % num2 === 0){
      objeto.maiorDivisivelPorMenor = true
    }else{
      objeto.maiorDivisivelPorMenor = false
    }
    
    let diferencaDosNumeros = num1 - num2
    objeto.diferenca = diferencaDosNumeros
    
  }else{
    objeto.maiorNumero = num2
    
    if(num2 % num1 === 0){
      objeto.maiorDivisivelPorMenor = true
    }else{
      objeto.maiorDivisivelPorMenor = false
    }
    
    let diferencaDosNumeros = num2-num1
    objeto.diferenca = diferencaDosNumeros
  }

  return objeto
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  
}
// EXERCÍCIO 11
function ordenaArray(array) {
  
}

// EXERCÍCIO 12
function filmeFavorito() {
  let astrodev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return astrodev  
}

// EXERCÍCIO 13
function imprimeChamada() {
  let astrodev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return `Venha assistir ao filme ${astrodev.nome}, de ${astrodev.ano}, dirigido por ${astrodev.diretor} e estrelado por ${astrodev.atores[0]}, ${astrodev.atores[1]}, ${astrodev.atores[2]}, ${astrodev.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  let objeto ={
    largura: lado1,
    altura: lado2,
    perimetro: 2 *(lado1 + lado2),
    area: lado1 * lado2
  }
  return objeto
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  pessoa.nome = 'ANÔNIMO'
  return pessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  let acimaDe18 = []
  for (let i = 0; i < arrayDePessoas.length; i++) {
    if(arrayDePessoas[i].idade >= 18){
      acimaDe18.push(arrayDePessoas[i])
    }
  }
  return acimaDe18
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let abaixoDe18 = []
  for (let i = 0; i < arrayDePessoas.length; i++) {
    if(arrayDePessoas[i].idade < 18){
      abaixoDe18.push(arrayDePessoas[i])
    }
  }
  return abaixoDe18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let novoArray = []
  for (let i = 0; i < array.length; i++) {
    novoArray.push(array[i]*2)
  }
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  let novoArray = []
  for (let i = 0; i < array.length; i++) {
    let numero = array[i]*2
    numero = numero.toString()
    novoArray.push(numero)
  }
  return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  let novoArray = []
  for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
      novoArray.push(`${array[i]} é par`)
    }else{
      novoArray.push(`${array[i]} é ímpar`)
    }
  }
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  let pessoasAutorizadas = []
  for (let i = 0; i < pessoas.length; i++) {
    if((pessoas[i].altura >= 1.5) && ((pessoas[i].idade > 14) && (pessoas[i].idade < 60))){
      pessoasAutorizadas.push(pessoas[i])
    }
  }
  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoAutorizadas = []
  for (let i = 0; i < pessoas.length; i++) {
    if((pessoas[i].altura < 1.5) || ((pessoas[i].idade <= 14) || (pessoas[i].idade >= 60))){
      naoAutorizadas.push(pessoas[i])
    }
  }
  return naoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
