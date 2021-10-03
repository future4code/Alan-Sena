import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>

        <Post />

      </MainContainer>
    );
  }
}

export default App;
