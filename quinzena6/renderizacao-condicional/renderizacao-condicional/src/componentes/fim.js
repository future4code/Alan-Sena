import React from "react";
import styled from "styled-components"

const Secao = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75vh;
    width: 75vw;
    background-color: #fff;
    border-radius: 15px;
`

const Texto = styled.p`
    font-size: 1.3rem;
`

const Titulo = styled.h1`
    font-size: 1.5rem;
`

export default class Fim extends React.Component {
    render () {
        return (
            <Secao>
                <Titulo> O FORMULÁRIO ACABOU </Titulo>
                <Texto> Muito obrigado por participar! Entraremos em contato! </Texto>
            </Secao>
        )
    }
}