import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiOutlineClear } from 'react-icons/ai';
import styled from 'styled-components';

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: 70vh;
    min-height: 70vh;
    border: 1px solid black;
    overflow-y: scroll;
`

const PerfilCard = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    width: 80%;
    margin: 4px 0;
    padding: 4px;
`

const Imagem = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 0 8px 0 0;
`

function ListOfMatchs() {

    const [lista, setLista] = useState([])

    useEffect (() => {
       getMatches()
    }, [])

    const getMatches = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/matches`
    
        axios.get(url)
        .then((res) => setLista(res.data.matches))
        .catch((err) => console.log('deu errado'))
      }

    const reset = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/clear`
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.put(url, headers)
        .then((res) => getMatches())
        .catch((err) => console.log(err))
    }

    return (
        <Lista>
            <h1>Lista de Crush's</h1>

            {lista.map((perfil, i) => {
                return (
                <PerfilCard>
                    <Imagem src={perfil.photo} alt={'Match'}/> 
                    <p key={i}>{perfil.name}</p>
                </PerfilCard>
                )
            })}

            <AiOutlineClear onClick={reset} cursor={"pointer"} fontSize={'2rem'}/>
        </Lista>
    );
}

export default ListOfMatchs;