import React from 'react';

function Crush(props) {
    const caracteristicas = () => {
        const perfis = props.perfis
        if(props.perfis === []){
          return <p>CARREGANDO...</p>
        } else {
          return <p>{perfis.name}</p>
        }
      }
    return (
    <div>
        <h1>{caracteristicas()}</h1>
        <div>
            <button onClick={props.getPerson}>sim</button>
            <button onClick={props.getPerson}>nao</button>
        </div>
    </div>
    )
}

export default Crush;