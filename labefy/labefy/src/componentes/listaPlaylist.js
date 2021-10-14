import axios from "axios";
import React from "react";

export default class ListaPlaylist extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getPlaylists()
    }

    getPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.get(url, {
            headers: {
                Authorization: 'alan-sena-banu'
            }
        })
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        }).catch((err) => {
            console.log(err)
        })
    }

    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, {
            headers: {
                Authorization: 'alan-sena-banu'
            }
        })
        .then((res) => {
            this.getPlaylists()
        })
        .catch((err) => {
            console.log('não apagou!!!')
        })
    }

    render() {
        console.log(this.state.playlists)
        
        const renderPlaylist = this.state.playlists.map((playlist, i) => {
            return (
                <div key={i}>
                    {playlist.name}
                    <button onClick={() => {this.deletePlaylist(playlist.id)}}>Apagar Playlist</button>
                    <button> Ver Playlist </button>
                </div>
            )
        })

        return(
            <div>
                <h1>Lista de playlists</h1>
                {renderPlaylist}
            </div>
        )
    }
}