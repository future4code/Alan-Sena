// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//Exercício 1: a. False || b. False || c. True || d. Boolean

//Exercício 2: Não funciona pois ele tem que converter  o tipo de váriável, pois ela entra como string e tem que fazer a conversão para Number para fazer a soma.

//exercício 3: faria a seguinte mudança em "const soma = primeiroNumero + segundoNumero "
               //const soma = (Number (primeiroNumero) + Number (segundoNumero))


//EXERCÍCIO DE ESCRITA DE CÓDIGO
 //EXERCÍCIO 1

 const idadePropria = prompt("Digite a sua idade.")
 const idadeAmigo = prompt("Digite a idade do seu melhor amigo.")

 const simOuNao = idadePropria > idadeAmigo

 console.log("Sua idade é maior do que a do seu melhor amigo? " + simOuNao)

 //Exercício 2

 let numeroPar = prompt("Digite um número par.")
 let resto = numeroPar % 2

 console.log(resto)
 
 //Todos os testes com números pares dão 0. Já com números ímpares sobra o resto, até porque não é uma divisão exata.

 //Exercício 3

 const idadeUsuario = prompt("Vamos as contas!! Quantos anos você tem?")

 const idadeEmMeses = idadeUsuario * 12
 const idadeEmDias = idadeUsuario * 365
 const idadeEmHoras = idadeUsuario * 365 * 24

 console.log("Você tem " + idadeUsuario + " anos. O que equivale a " + idadeEmMeses + " meses ou " + idadeEmDias + " dias ou a " + idadeEmHoras + " horas." )

 //Exercicio 4

 const n1 = prompt("Insira um número aleatório.")
 const n2 = prompt("Insira outro número.")

 const pergunta1 = n1 > n2
 const pergunta2 = n1 == n2
 const pergunta3 = n1 % n2 == 0
 const pergunta4 = n2 % n1 == 0

 console.log("O primeiro numero é maior que segundo? " + pergunta1)
 console.log("O primeiro numero é igual ao segundo? " + pergunta2)
 console.log("O primeiro numero é divisível pelo segundo? " + pergunta3)
 console.log("O segundo numero é divisível pelo primeiro? " + pergunta4)