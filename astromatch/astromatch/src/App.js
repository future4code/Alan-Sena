import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ListOfMatchs from './components/matches/Matchoflist';
import Crush from './components/pretendentes/Crush';
import styled from 'styled-components';
import { GiOppositeHearts } from "react-icons/gi";
import { BsPersonLinesFill } from 'react-icons/bs'

const Geral = styled.section`
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  width: 25vw;
  max-height: 70vh;
  min-height: 70vh;
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
        <BsPersonLinesFill onClick={() => mudaTela('decisao')} cursor={'pointer'} fontSize={'1.5rem'}/>
        <h1>AstroMatch</h1>
        <GiOppositeHearts onClick={() => mudaTela('lista')} cursor={'pointer'} fontSize={'1.5rem'}/>
      </Hearder>
      {tela()}
    </Geral>
  )
}

export default App;