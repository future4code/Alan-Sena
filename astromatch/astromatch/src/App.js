import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListOfMatchs from './components/matches/Matchoflist';
import Crush from './components/pretendentes/Crush';

function App() {

  const [telaAtual, setTelaAtual] = useState('decisao')
  const [perfis, setPerfis] = useState({})

  useEffect (() => {
    getPerson()
  }, [])


  const getPerson = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/person'
    
    axios.get(url)
    .then((res) => setPerfis(res.data.profile))
    .catch((err) => console.log(err))
  }

  const tela = () => {
    switch (telaAtual) {
      case 'lista':
        return <ListOfMatchs />
      default:
        return <Crush perfis={perfis} getPerson={getPerson}/>
    }
  }

  const mudaTela = () => {
    if(telaAtual === 'decisao'){
      setTelaAtual('lista')
    } else {
      setTelaAtual('decisao')
    }
  }

  return (
    <div>
      <h1>AstroMatch</h1>
      {tela()}
      <button onClick={mudaTela}>Ver lista</button>
    </div>
  )
}

export default App;