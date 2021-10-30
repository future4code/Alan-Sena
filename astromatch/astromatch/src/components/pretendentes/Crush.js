import React from 'react';
import styled from 'styled-components';
import { ImHeart } from 'react-icons/im'
import { IoCloseSharp } from 'react-icons/io5'

const Main = styled.main`
  min-width: 100%;
  flex-grow: 1;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Caracteristicas = styled.div`
  height: 80%;
`

const Buttons = styled.div`
  border-top: 1px solid black;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center ;
`

const Imagem = styled.img`
  width: 100%;
  max-height: 320px;
`

const Name = styled.h2`
  margin: 4px;
`

const Description = styled.p`
  margin: 8px 0 0 4px;
  padding: 0 0 4px 0;
  color: #343a40;
`

function Crush(props) {
    const caracteristicas = () => {
        const perfis = props.perfis
        if(props.perfis === []){
          return <p>CARREGANDO...</p>
        } else {
          return (
            <Caracteristicas>
              <Imagem src={perfis.photo} alt={'foto de perfil'}/>
              <Name>{perfis.name}</Name>
              <Description>{perfis.bio}</Description>
            </Caracteristicas>
          )
        }
      }
    return (
    <Main>
        {caracteristicas()}
        <Buttons>
            <ImHeart onClick={() => props.deuMatch(true, props.perfis)} cursor={'pointer'} fontSize={'1.5rem'} color={'red'}/>
            <IoCloseSharp onClick={() => props.deuMatch(false, props.perfis)} cursor={'pointer'} fontSize={'1.9rem'}/>
        </Buttons>
    </Main>
    )
}

export default Crush;