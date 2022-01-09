import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  * {
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;

    background-color: #f4EEED;
  }

  header {
    position: fixed;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  main {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background-color: #fff;
    border: 1px solid black;
    margin: 4px;
    cursor: pointer;
  }
`
export default Reset;
