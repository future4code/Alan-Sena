import styled from 'styled-components'

export const Card = styled.section`
  border: 2px solid black;
  border-radius: 4px;
  margin: 4px;
  padding: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 30%;

  p {
    margin: 0 4px;
  }

  button {
    color: red;
    background-color: #f4EEED;
    border: 2px solid black;
    border-radius: 4px;

    margin: 4px 0 2px 0;
  }
`
