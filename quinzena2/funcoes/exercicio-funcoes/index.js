//Exercício de interpretação de código.
//EXERCÍCIO 1:

//A. console.log(2) // 10 || console.log(10) // 50
//B. O Javascript executaria a função mas não aparecia nada no console pois ele não foi ordenado a imprimir no console.

//EXERCÍCIO 2: 
//A. A função usa o textoDoUsuario como parametro, transforma todas as letras em minúscula e verifica se no texto tem a palavra "cenoura".
//B. true || true || false


//Exercício de escrita de código.

//EXERCÍCIO 1:
/* const informacoes = prompt("Digite algo sobre você.")

function informacoesDoUsuario() {
    console.log(informacoes)
}

informacoesDoUsuario(informacoes) */

//EXERCÍCIO 2:

//A.
/* function soma(numero1, numero2) {
    const somaNumeros = numero1 + numero2
    return somaNumeros
}
const saidaSoma = soma(10, 15)
console.log("Resultado da soma: ", saidaSoma) */

//B.
/* function maiouOuIgual(num1, num2) {
    const comparacaoDosNumeros = num1 >= num2
    return comparacaoDosNumeros
}
const saidaComparacao = maiouOuIgual(12, 22)
console.log("O primeiro número é igual ou maior que o segundo? ", saidaComparacao)  */

//C.
/* function numeroPar(numeroInserodo) {
    const parOuNao = numeroInserodo % 2 === 0
    return parOuNao 
}
const saidaPar = numeroPar(19)
console.log("O número inserido é par? ", saidaPar) */

//D.
/* const mensagemUsuario = prompt("Digite um texto com letras maiúsculas.")

function mensagem(texto) {
    
    const tamanho = texto.length
    const minuscula = texto.toLowerCase()

    console.log(tamanho, minuscula)
}
mensagem(mensagemUsuario) */


// EXERCÍCIO 3:

/*let primeiroNumero = 30
let segundoNumero = 5

function operacoes(numeroUm, numeroDois) {
    function somaDosNumeros(adi1, adi2) {
        return adi1 + adi2
    }   
    console.log(`Soma: ` + somaDosNumeros(numeroUm, numeroDois) )

    function subtracao(subt1, subt2) {
        return subt1 - subt2
    }
    console.log(`Subtração: ` + subtracao(numeroUm, numeroDois))

    function multiplicacao(mul1, mul2) {
        return mul1 * mul2
    }
    console.log(`Multiplicação: ` + multiplicacao(numeroUm, numeroDois))

    function divisao(divi1, divi2) {
        return divi1 / divi2
    }
    console.log(`Divisão: `+ divisao(numeroUm, numeroDois))
}
operacoes(primeiroNumero, segundoNumero)

const numeroUsuario1 = Number(prompt("Digite um número aleatório."))
const numeroUsuario2 = Number(prompt("Digite outro número aleatório."))

operacoes(numeroUsuario1, numeroUsuario2) */

