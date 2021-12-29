import React, { useEffect } from 'react';

const Result = (props) => {
  useEffect(() => {
    const time = async () => {
      if (props.result) {
        setTimeout(() => {props.set('initial')}, 15000)
      }
    }
    time()
  }, [props.result])

  return (
    <section>
      {props.result === 'sucess' ? 
        <p>Sucesso</p> :
        <p>Erro</p>
      }
    </section>
  )
}

export default Result
