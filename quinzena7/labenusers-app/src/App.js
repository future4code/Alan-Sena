import React from 'react';
import CriarUsuario from './components/criarUsuario';
import ListaDeUsuarios from './components/listaDeUsuarios';
import axios from 'axios'

class App extends React.Component {
  state = {
    listaDeUsuarios: [],
    inputNome:'',
    inputEmail:'',
    telaInicial: true
  }

  telaInicial = () => {
    if(this.state.telaInicial === true){
      return <CriarUsuario 
        trocaTela={this.trocaTela}
        add={this.adicionarUsuario}
        onChangeNome={this.onChangeNome}
        onChangeEmail={this.onChangeEmail}
        nome={this.state.inputNome}
        email={this.state.inputEmail}
      />
    } else {
      return <ListaDeUsuarios 
        trocaTela={this.trocaTela}
      />
    }
  }

  trocaTela = () => {
    if(this.state.telaInicial === true){
      this.setState({telaInicial: false})
    } else {
      this.setState({telaInicial: true})
    }
  }

  onChangeNome = (e) => {
    this.setState({inputNome: e.target.value})
  }
  
  onChangeEmail = (e) => {
    this.setState({inputEmail: e.target.value})
  }

  adicionarUsuario = (e) =>{
    e.preventDefault()
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: 'alan-sena-banu'
      }
    }).then((response) => {
      alert("Usuário criado com sucesso!")
      this.setState({inputNome:''})
      this.setState({inputEmail:''})
    }).catch((error) => {
      console.log(error)
    })
  }

  
  render() {

    return (
      <div>
        {this.telaInicial()}
      </div>
    );
  }
}

export default App;