// EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

//1.
//a) Explique o que o código faz. Qual o teste que ele realiza?
//Resposta: Ele confere se o número inserido pelo usuário é divisível por 2, ou se o resultado é um número nçao inteiro.
//b) Para que tipos de números ele imprime no console "Passou no teste"?
//Caso o número inserido seja divisível por 2 e não sobre resto.
//c) Para que tipos de números a mensagem é "Não passou no teste"?
//Caso o resultado da comparação não seja um número inteiro.

//2.
//a) Para que serve o código acima?
//Resposta: Para o usuário consultar o preço da fruta que ele inserio no algoritimo.
//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//Resposta: O preço da fruta Maçã e R$ 2,25
//c)c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
//Resposta: Ele não interromperia o código e imiria imprimir o resultado do default.

//3.
//a) O que a primeira linha está fazendo?
//Resposta: Pede ao usuário para inserir um número e converte a String em Number e armazena em uma variável.
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Resposta: Nocaso do número 10 iria imprimir "Esse número passou no teste". No caso -10 não iria fazer nada.
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Resposta:Sim. O segundo console.log não iria dar erro, pois, a variável "mensagem" está em um escopo local e não pode ser acessada por fora do escopo.

//--------------------------------------------------------------------------------------
//EXERCÍCIO DE ESCRITA DE CÓDIGO
//1.1

/* let idade = Number(prompt("Digite a sua idade(em números)."))

if(idade >= 18){
    console.log("Você pode dirigir.")
} else{
    console.log("Você não pode dirigir.")
} */

//1.2
/* let pergunta = prompt("Em qual turno você estuda? M: matutino | V: vespertino | N: noturno")

if(pergunta === "M"){
    console.log("Bom dia!")
}else if(pergunta === "V"){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}  */

//1.3
/* let pergunta = prompt("Em qual turno você estuda? M(matutino) V(vespertino) N(noturno)")

switch(pergunta){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
} */

//1.4
/* let generoDoFilme = prompt("Qual o genero do filme?")
let preçoDoIngresso = prompt("Qual o preço do ingresso?")

if((generoDoFilme === 'fantasia') && (preçoDoIngresso < 15)){
    console.log("Bom filme :)")
}
else{
    console.log("Escolha outro filme :(")
}
 */
