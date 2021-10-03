import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
      localStorage.setItem('input', JSON.stringify(this.state.inputValue))
      localStorage.setItem('filtro', JSON.stringify(this.state.filtro))
    }
  };

  componentDidMount() {
    const tarefasLS = localStorage.getItem("tarefas")
    const inputValueLS = localStorage.getItem("input")
    const filtroLS = localStorage.getItem("filtro")
    
    const qualquer = JSON.parse(tarefasLS)
    const qualquer2 = JSON.parse(inputValueLS)
    const qualquer3 = JSON.parse(filtroLS)

    this.setState({
      tarefas: qualquer,
      inputValue: qualquer2,
      filtro: qualquer3
    });
  };

  onChangeInput = (e) => {
    this.setState({inputValue: e.target.value})
  }

  criaTarefa = () => {
    const novaTarefa =
      {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
      }

    const addTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState({tarefas: addTarefas})
  }

  selectTarefa = (id) => {
    const completaOuIncompleta = this.state.tarefas.map((tarefa) =>{
      if(tarefa.id === id) {
        const inverterCompleta = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return inverterCompleta
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: completaOuIncompleta})
  }

  onChangeFilter = (e) => {
    this.setState({filtro: e.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App