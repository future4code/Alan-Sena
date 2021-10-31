import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3c096c;
        height: 100vh;
    }
`

export default Reset