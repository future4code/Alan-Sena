import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
    border: 2px solid black;
    margin: 8px;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    width: 50%;
`
export default class ListaDeUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount = () => {
        this.puxarUsuarios()
    }

    puxarUsuarios() {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: 'alan-sena-banu'
            }
        }).then((res) => {
            this.setState({usuarios: res.data})
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    deletarUsuario(id) {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers:{
                Authorization: 'alan-sena-banu'
            }
        }).then((res) => {
            alert("Usuário deletado com sucesso.")
            this.puxarUsuarios()
        }).catch((err) => {
            alert("Ocorreu um erro!")
        })
    }

    render(){
        console.log(this.state.usuarios)
        const users = this.state.usuarios.map((usuario) => {
            return <Card key={usuario.id}>
                    {usuario.name}
                    <button onClick={() => this.deletarUsuario(usuario.id)}> X </button>
                </Card>
        })

        return(
            <div>
                <h1> Labenusers </h1>
                <button onClick={this.props.trocaTela}> Inserir usuário </button>
                <h2> Lista de usuários </h2>
                {users}
            </div>
        )
    }
}