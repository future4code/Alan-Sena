import styled from 'styled-components'

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  fieldset {
    display: flex;
    flex-direction: column;
    width: fit-content;
    border-radius: 4px;
    border: 2px solid black; 
  }

  input {
    margin: 2px 0 10px 0;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 4px;
  }

  button {
    border: 2px solid black;
    border-radius: 4px;
    width: 100%;
    margin: 0;
    
    &:hover {
    border: 2px solid red;
    color: red;

    transition: 0.2s;
    }
  }
`


