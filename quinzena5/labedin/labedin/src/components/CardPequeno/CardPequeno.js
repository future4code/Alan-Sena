import React from "react";
import styled from "styled-components";

const CartaoPequeno = styled.div`
    margin: 10px 0;
    border: 1px solid black;
    padding: 10px 10px;
`

function CardPequeno(props) {
    return (
        <CartaoPequeno> 
            <p> { props.texto } </p>
        </CartaoPequeno>
    )
}

export default CardPequeno;