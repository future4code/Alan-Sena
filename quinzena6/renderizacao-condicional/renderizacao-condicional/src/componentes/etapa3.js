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

const Titulo = styled.h1`
    font-size: 1.5rem;
`

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`

const Inputs = styled.input`
    margin: 4px 0 16px 0;
    width: 250px;
`

const Selects = styled.select`
    margin: 4px 0 16px 0;
`

const Botao = styled.button`
    background-color: #fff;
    font-size: 1.2rem;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    margin: 4px 4px 0;

    &:hover{
        color: #264653;
        border: 2px solid #264653;
        transition: 0.2s;
    }
`

export default class Etapa3 extends React.Component {
    render () {
        return (
            <Secao>
                <Titulo> ETAPA 3 - INFORMAÇÕES DE ENSINO</Titulo>
                <Formulario>
                    <label for={"motivoDesistencia"}>5. Por que você não terminou um curso de graduação?</label>
                    <Inputs name={"motivoDesistencia"} type={"text"} id={"motivoDesistencia"}></Inputs>

                    <label for={""}>6. Você fez algum curso complementar?</label>
                    <Selects>
                        <option>Nenhum</option>
                        <option>Curso Técnico</option>
                        <option>Cuso de inglês</option>
                    </Selects>

                    <div>
                        <Botao onClick={this.props.voltarParaEtapa2}><strong>Voltar</strong></Botao>
                        <Botao onClick={this.props.fim}><strong>Enviar</strong></Botao>
                    </div>
                </Formulario>
            </Secao>
        )
    }
}