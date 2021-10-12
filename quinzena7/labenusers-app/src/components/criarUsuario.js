import React from "react";

export default class CriarUsuario extends React.Component {
    render(){
        return(
            <div>
                <h1>Labenusers</h1>
                <button onClick={this.props.trocaTela}> Trocar tela </button>
                <h2>Criar usuário</h2>
                <form>
                    <input onChange={this.props.onChangeNome} value={this.props.nome}></input>
                    <input onChange={this.props.onChangeEmail} value={this.props.email}></input>
                    <button onClick={this.props.add}> Criar </button>
                </form>
            </div>
        )
    }
}