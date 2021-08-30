function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencia = [];
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if(arrayDeNumeros[i] === numeroEscolhido){
       ocorrencia.push(arrayDeNumeros[i])
     }
  }
  
  if(ocorrencia.length !== 0){
    return `O número ${numeroEscolhido} aparece ${ocorrencia.length}x`
  }else{
    return 'Número não encontrado'
  }
}