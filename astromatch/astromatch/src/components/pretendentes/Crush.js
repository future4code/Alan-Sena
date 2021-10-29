import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  min-width: 100%;
  flex-grow: 1;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
 `

const Caracteristicas = styled.div`
  padding: 4px;
  border: 1px solid black;
  height: 90%;
`

const Buttons = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center ;
`

function Crush(props) {
    const caracteristicas = () => {
        const perfis = props.perfis
        if(props.perfis === []){
          return <p>CARREGANDO...</p>
        } else {
          return (
            <Caracteristicas>
              <h2>{perfis.name}</h2>
              <p>{perfis.bio}</p>
            </Caracteristicas>
          )
        }
      }
    return (
    <Main>
        {caracteristicas()}
        <Buttons>
            <button onClick={() => props.deuMatch(true, props.perfis)}>sim</button>
            <button onClick={() => props.deuMatch(false, props.perfis)}>nao</button>
        </Buttons>
    </Main>
    )
}

export default Crush;