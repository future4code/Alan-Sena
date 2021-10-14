import React from "react";
import styled from "styled-components"

import AddPlaylist from "./componentes/addPlaylist";
import ListaPlaylist from "./componentes/listaPlaylist";

const Geral = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Cabecalho = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid black;
  width: 75vw;
  height: 10vh;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 2px solid black;
  height: 75vh;
  width: 75vw;
`


class App extends React.Component {
  state = {
    inicio: 'addPlaylist'
  }

  telaInicial = () => {
    switch (this.state.inicio) {
      case 'addPlaylist':
        return <AddPlaylist />
      
      case 'listPlaylist':
        return <ListaPlaylist />
    
      default:
        return <ListaPlaylist />
    }
  }

  mudaBotao = () => {
    if(this.state.inicio === 'addPlaylist') {
      return (
        <button onClick={this.renderPlaylist}>Ver minhas Playlists</button>
      )
    } else {
      return (
        <button onClick={this.renderAddPlaylist}>Adcionar Playlist</button>
      )
    }
  }

  renderAddPlaylist = () => {
    this.setState({inicio: 'addPlaylist'})
  }
  
  renderPlaylist = () => {
    this.setState({inicio: 'listPlaylist'})
  }

  render () {
    return (
      <Geral>
        <Cabecalho>
          <h1>LABEFY</h1>
          {this.mudaBotao()}
        </Cabecalho>

        <Main>
          {this.telaInicial()}
        </Main>

      </Geral>
    )
  }
  
}

export default App;