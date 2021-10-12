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
    inicio: false
  }

  telaInicial = () => {
    if(this.state.inicio) {
      return <AddPlaylist />
    } else {
      return <ListaPlaylist />
    }
  }

  renderAddPlaylist = () => {
    this.setState({inicio: true})
  }
  
  renderPlaylist = () => {
    this.setState({inicio: false})
  }

  render () {
    return (
      <Geral>
        <Cabecalho>
          <h1>LABEFY</h1>
          <nav>
            <button onClick={this.renderAddPlaylist}>Adcionar Playlist</button>
            <button onClick={this.renderPlaylist}>Ver minhas Playlists</button>
          </nav>
        </Cabecalho>

        <Main>
          {this.telaInicial()}
        </Main>

      </Geral>
    )
  }
  
}

export default App;