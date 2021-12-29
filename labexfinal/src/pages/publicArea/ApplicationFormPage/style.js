import styled from 'styled-components'

export const InputInd = styled.form`
  display: flex;
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

  select {
    margin: 2px 0 10px 0;
  }
`
