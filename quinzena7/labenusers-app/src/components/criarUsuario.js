import React from "react";
import styled from "styled-components";

const Geral = styled.section`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    padding: 16px;
    border-radius: 10px;
`

const BotaoTela = styled.button`
    padding: 4px;
    width: 100%;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 5px;

    &:hover{
        border: 2px solid #3c096c;
        color: #3c096c;
        transition: 0.5s;
    }
`

const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputNome = styled.input`
    display: block;
    margin: 4px 0 4px 0;
    padding: 4px;
    border-radius: 5px;
    border: 2px solid black;
    
    &::selection{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &:hover{
        border: 2px solid #3c096c;
        color: #3c096c;
        transition: 0.5s;
    }
`

const InputEmail = styled.input`
    display: block;
    padding: 4px;
    border: 2px solid black;
    border-radius: 5px;
    
    &::selection{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    &:hover{
        border: 2px solid #3c096c;
        color: #3c096c;
        transition: 0.5s;
    }
`

const Botao = styled.button`
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    margin: 4px 0 0 0;
    padding: 4px;
    border: 2px solid black;
    border-radius: 5px ;
    
    &:hover{
        border: 2px solid #3c096c;
        color: #3c096c;
        transition: 0.5s;
    }
`

const Linha = styled.hr`
    border: 1px solid black;
    width: 50%;
    margin: 4px;
`

export default class CriarUsuario extends React.Component {
    
    render(){

        return(
            <Geral>
                <h1>Labenusers</h1>

                <Linha />
                <Cadastro>
                <h3> Criar usuário </h3>
                    <InputNome 
                        onChange={this.props.onChangeNome} 
                        value={this.props.nome} 
                        placeholder="Digite seu nome..."
                    />
                    <InputEmail
                        onChange={this.props.onChangeEmail} 
                        value={this.props.email} 
                        placeholder="Digite seu e-mail..." 
                    />
                    <Botao onClick={this.props.add}> Adicionar Usuário </Botao>
                    <Linha/>
                    <BotaoTela onClick={this.props.trocaTela}> Ver lista de usuários </BotaoTela> 
                </Cadastro>
            </Geral>
        )
    }
}