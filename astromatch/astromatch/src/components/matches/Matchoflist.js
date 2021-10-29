import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
        <div>
            <h1>Lista de Crush's</h1>

            {lista.map((perfil, i) => {
                return <li key={i}>{perfil.name}</li>
            })}

            <button onClick={reset}> Limpar lista </button>
        </div>
    );
}

export default ListOfMatchs;