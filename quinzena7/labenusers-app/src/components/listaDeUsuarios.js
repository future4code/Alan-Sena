import React from "react";

export default class ListaDeUsuarios extends React.Component {
    render(){
        return(
            <div>
                <h1> Labenusers </h1>
                <button onClick={this.props.trocaTela}> Voltar </button>
                <h2> Lista de usuários </h2>
            </div>
        )
    }
}