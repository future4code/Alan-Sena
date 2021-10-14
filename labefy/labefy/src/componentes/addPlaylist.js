import React from "react";
import styled from "styled-components";
import axios from "axios"

const Div = styled.div`
    display: flex;
    flex-direction: column;
`

export default class AddPlaylist extends React.Component {

    state = {
        inputPlaylist:''
    }

    addPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.inputPlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'alan-sena-banu'
            }
        }).then((res) => {
            alert('Playlist criada com sucesso.')
            this.setState({inputPlaylist: ''})
        }).catch((err) => {
            console.log(err)
        })
    }

    onChangePlaylist = (e) => {
        this.setState({ inputPlaylist: e.target.value })
    }

    render () {
        return (
            <div>
                <Div>
                    <label>Adicionar Playlist</label>
                    <input
                        onChange={this.onChangePlaylist}
                        value={this.state.inputPlaylist}
                    ></input>
                    <button onClick={this.addPlaylist}> Adicionar </button>
                </Div>
            </div>
        )
    }
}