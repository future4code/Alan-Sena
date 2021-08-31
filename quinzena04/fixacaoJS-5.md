function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 let nomeAnimais = []
 
 for (let i = 0; i < animais.length; i++) {
   nomeAnimais.push(animais[i].nome)
 }

return nomeAnimais
}