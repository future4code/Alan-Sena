import React from "react";
import styled from "styled-components";

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
    margin: 4px 0 0 0;

    &:hover{
        color: #264653;
        border: 2px solid #264653;
        transition: 0.2s;
    }
`

export default class Etapa1 extends React.Component {

    render () {
        return (
            <Secao>
                <Titulo> Etapa 1 </Titulo>
                <Formulario>
                    <label for={"nome"}> 1. Qual o seu nome? </label>
                    <Inputs type={"text"} name={"nome"} id={"nome"}></Inputs>

                    <label for={"idade"}> 2. Qual o sua idade? </label>
                    <Inputs type={"number"} name={"idade"}id={"idade"}></Inputs>

                    <label for={"email"}> 3. Qual o seu email? </label>
                    <Inputs type={"text"} name={"email"} id={"email"}></Inputs>

                    <label>4. Qual a sua escolaridade?</label>
                    <Selects>
                        <option value={"Ensino médio incompleto"}>Ensino médio incompleto</option>
                        <option value={"Ensino médio completo"}>Ensino médio completo</option>
                        <option value={"Ensino superior incompleto"}>Ensino superior incompleto</option>
                        <option value={"ensino superior completo"}>Ensino superior completo</option>
                    </Selects>

                    <Botao onClick={this.props.irParaEtapa2}><strong> Próxima etapa </strong></Botao>
                </Formulario>
            </Secao>
        )
    }
}