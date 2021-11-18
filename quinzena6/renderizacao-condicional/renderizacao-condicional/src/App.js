import React from 'react'
import styled from 'styled-components'

import Etapa1 from './componentes/etapa1';
import Etapa2 from './componentes/etapa2';
import Etapa3 from './componentes/etapa3';
import Fim from './componentes/fim';

const Padrao = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #264653;
`

class App extends React.Component {

  state = {
    telaAtual: 'etapa 1'
  }

  renderizaProximaTela = () => {
    switch (this.state.telaAtual) {
        case 'etapa 1':
            return <Etapa1 irParaEtapa2={this.irParaEtapa2}/>
        case 'etapa 2':
            return <Etapa2 
              irParaEtapa3={this.irParaEtapa3}
              voltarParaEtapa1={this.voltarParaEtapa1}
            />

        case 'etapa 3':
            return <Etapa3 
              fim={this.fim}
              voltarParaEtapa2={this.voltarParaEtapa2}
            />
        case 'fim':
            return <Fim />
        default:
            return <h1>ERRO</h1>
    }
  }

  /* ====== Métodos para próximas etapas =======*/

  irParaEtapa2 = () => {
    this.setState({telaAtual: 'etapa 2'})
  }

  irParaEtapa3 = () => {
    this.setState({telaAtual: 'etapa 3'})
  }
  
  fim = () => {
    this.setState({telaAtual: 'fim'})
  }

  /* ==== Métodos para voltar quando estiver na etapa 2 e 3. ======= */

  voltarParaEtapa1 = () => {
    this.setState({telaAtual: 'etapa 1'})
    console.log('setei o estado')
  }
  
  voltarParaEtapa2 = () => {
    this.setState({telaAtual: 'etapa 2'})
  }

  render () {
    return (
      <Padrao>
        {this.renderizaProximaTela()}
      </Padrao>
    );
  }
}

export default App;