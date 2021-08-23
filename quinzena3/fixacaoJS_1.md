function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let proventos = 2000 + (valorTotalVendas / 20) + (qtdeCarrosVendidos*100)
 return proventos
}