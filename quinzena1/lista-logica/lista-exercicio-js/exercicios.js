// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {

  const n1 = prompt("Qual a altura do retângulo?")
  const n2 = prompt("Qual a largura do retângulo?")

  console.log(Number(n1) * Number(n2))
}

// Exercício 2
function imprimeIdade() {

  const anoAtual = prompt("Digite o an atual.")
  const anoNasc = prompt("Digite seu ano de nascimento.")

  console.log(Number(anoAtual) - Number(anoNasc))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

 const peso = prompt("Digite seu peso.")
 const altura = prompt("Digite sua altura.")

 console.log(Number(peso) / (Number(altura) * Number(altura)))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  let nomeUsuario = prompt("Digite o seu nome.")
  let idadeUsuario = prompt("Digite a sua idade.")
  let emailUsuario = prompt("Digite o seu e-mail.")

  console.log("Meu nome é "+ nomeUsuario+ ", tenho "+ idadeUsuario+ " anos, e o meu email é "+ emailUsuario+ ".")
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  let corFav = prompt("Qual a sua cor vavorita?")
  let corFav2 = prompt("Qual a sua segunda cor favorita?")
  let corFav3 = prompt("Qual a sua terceira cor favorita?")

  let coresFavoritas = [corFav , corFav2 , corFav3];
  console.log(coresFavoritas)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let time = prompt("Qual  seu time favorito?")

  console.log(time.toUpperCase())

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui

  const custo = prompt("Qual é o custo do teatro?")
  const valorIngresso = prompt("Qual o preço do ingresso")

  let preçoDeCobertura = custo / valorIngresso

  console.log(preçoDeCobertura)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}