import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListOfMatchs from './components/matches/Matchoflist';
import Crush from './components/pretendentes/Crush';
import styled from 'styled-components';

const Geral = styled.section`
  border: 1px solid black;
  width: 40vw;
  height: 75vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hearder = styled.header`
  width: 100%;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
`

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

  const deuMatch = (condicao, perfil) => {
    const body = {
      'id':`${perfil.id}`,
      'choice': condicao
    }

    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/choose-person`

    axios.post(url, body, headers)
    .then((res) => getPerson())
    .catch((err) => console.log('Deu errado'))
  }

  const tela = () => {
    switch (telaAtual) {
      case 'lista':
        return <ListOfMatchs />
      default:
        return <Crush perfis={perfis} deuMatch={deuMatch}/>
    }
  }

  const mudaTela = (e) => {
      setTelaAtual(e)
  }

  return (
    <Geral>
      <Hearder>
        <button onClick={() => mudaTela('decisao')}>Pretendentes</button>
        <h1>AstroMatch</h1>
        <button onClick={() => mudaTela('lista')}>Ver lista</button>
      </Hearder>
      {tela()}
    </Geral>
  )
}

export default App;