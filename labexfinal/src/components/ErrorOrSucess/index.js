import React, { useEffect } from 'react';

import { Resultado } from './style'

const Result = (props) => {
  useEffect(() => {
    const time = async () => {
      if (props.result) {
        setTimeout(() => {props.set('initial')}, 10000)
      }
    }
    time()
  }, [props.result])

  return (
    <Resultado>
      {props.result === 'sucess' ? 
        <p id='sucesso'> Candidatura feita com sucesso. Espere o retorno do organizador da viagem. </p> :
        <p id='error'> Não conseguimos efetivar sua candidatura. Tente novamente. </p>
      }
    </Resultado>
  )
}

export default Result
