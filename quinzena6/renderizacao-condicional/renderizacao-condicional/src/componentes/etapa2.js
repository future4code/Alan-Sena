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

const Inputs = styled.input`
    margin: 4px 0 16px 0;
`

export default class Etapa2 extends React.Component {
    render () {
        return (
            <Secao>
                <Titulo>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Titulo>

                <Formulario>
                    <label for={"curso"}>5. Qual o curso?</label>
                    <Inputs type={"text"} name={"curso"} id={"curso"}></Inputs>
                    
                    <label for={"institução"}>6. Qual a unidade de ensino?</label>
                    <Inputs type={"text"} name={"instituição"} id={"instituição"}></Inputs>

                    <Botao onClick={this.props.irParaEtapa3}><strong>Próxima etapa</strong></Botao>
                </Formulario>
            </Secao>
        )
    
    }
}