import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export default class AddPlaylist extends React.Component {
    render () {
        return (
            <div>
                <Form>
                    <label>Adicionar Playlist</label>
                    <input></input>
                </Form>
            </div>
        )
    }
}