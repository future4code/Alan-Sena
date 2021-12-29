import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    border: 2px solid black;
    border-radius: 4px;
    margin: 4px;
    
    &:hover {
    border: 2px solid red;
    color: red;

    transition: 0.2s;
    }
  }
`
