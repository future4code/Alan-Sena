import React from "react";
import axios from "axios";
import styled from "styled-components";

const Geral = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 40vw;
    height: 100%;
    border-radius: 5px;
    margin: 16px;
`

const Card = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    background-color: #fff;
    margin: 8px 0 0 0;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    width: 75%;
`

const BotaoApagar=styled.button`
    background-color: #fff;
    border: none;

    &:hover{
        color: #3c096c;
    }
`

const Linha = styled.hr`
    border: 1px solid black;
    width: 50%;
    margin: 4px;
`

const Botao = styled.button`
    background-color: #fff;
    cursor: pointer;
    width: 40%;
    margin: 0 0 4px 0;
    padding: 4px;
    border: 2px solid black;
    border-radius: 5px ;
    
    &:hover{
        border: 2px solid #3c096c;
        color: #3c096c;
        transition: 0.5s;
    }
`

export default class ListaDeUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount = () => {
        this.puxarUsuarios()
    }

    puxarUsuarios = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: 'alan-sena-banu'
                }
            })
            this.setState({usuarios: res.data})
        } catch (err) {
            console.log(err.response.data)
        }
    }

    deletarUsuario = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        
        try {
            const deleteUser = await axios.delete(url, {
                headers:{
                    Authorization: 'alan-sena-banu'
                }
            })
            alert("Usuário deletado com sucesso.")
            this.puxarUsuarios()

        } catch (err) {
            alert("Ocorreu um erro!")
        }
    }

    render(){
        const users = this.state.usuarios.map((usuario) => {
            return <Card key={usuario.id}>
                    {usuario.name}
                    <BotaoApagar onClick={() => this.deletarUsuario(usuario.id)}> X </BotaoApagar>
                </Card>
        })

        return(
            <Geral>
                <h1> Labenusers </h1>
                <Linha />
                <h2> Lista de usuários </h2>
                {users}
                <Linha />
                <Botao onClick={this.props.trocaTela}> Inserir usuário </Botao>
            </Geral>
        )
    }
}