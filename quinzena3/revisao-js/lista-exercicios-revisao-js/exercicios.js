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

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

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
