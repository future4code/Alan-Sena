import styled from 'styled-components'

export const CandidateCard = styled.section`
  margin: 4px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: fit-content;
  min-width: 20%;
  max-width: 20%;

  h4 {
    color: #495057;
  }

  p {
    margin: 4px 0;
    flex-wrap: wrap;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`
