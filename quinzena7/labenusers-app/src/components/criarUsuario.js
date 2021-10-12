import React from "react";

export default class CriarUsuario extends React.Component {
    
    render(){

        return(
            <div>
                <h1>Labenusers</h1>
                <button onClick={this.props.trocaTela}> Ver lista de usuários </button>
                <h2> Criar usuário </h2>
                <form>
                    <input 
                        onChange={this.props.onChangeNome} 
                        value={this.props.nome} 
                        placeholder="Digite seu nome..."
                    />
                    <input 
                        onChange={this.props.onChangeEmail} 
                        value={this.props.email} 
                        placeholder="Digite seu e-mail..." 
                    />
                    <button onClick={this.props.add}> Criar </button>
                </form>
            </div>
        )
    }
}