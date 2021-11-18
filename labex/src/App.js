import Router from "./routes/routes";
import styled from 'styled-components'
import { CssBaseline } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

function App() {
  return (
    <Container>
      <CssBaseline/>
      <Router />
    </Container>
  );
}

export default App;