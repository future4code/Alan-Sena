import styled from 'styled-components'

export const StyleMain = styled.main`
  max-width: 100vw;
  height: 100vh;

  flex-direction: column;
  align-items: center;

  justify-content: start;
  padding: 15vh 0 0 0;

  h2 {
    display: block;
  }
`

export const StyleSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const CandidateCard = styled.section`
  margin: 4px;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  min-height: 30%;
  width: fit-content;
  min-width: 90%;

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
