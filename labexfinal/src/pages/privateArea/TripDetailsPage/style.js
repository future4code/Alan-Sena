import styled from 'styled-components'

export const CandidateCard = styled.section`
  margin: 4px;
  padding: 4px;
  border: 1px solid gray;

  display: flex;
  flex-direction: column;

  width: fit-content;
  min-width: 20%;
  max-width: 20%;

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
