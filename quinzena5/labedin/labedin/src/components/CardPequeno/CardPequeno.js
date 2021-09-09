import React from "react";
import styled from "styled-components";

const CartaoPequeno = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    border: 1px solid black;
    padding: 10px 10px;
`

const Icone = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

function CardPequeno(props) {
    return (
        <CartaoPequeno> 
            <Icone src={props.imagem}/>
            <p> { props.texto } </p>
        </CartaoPequeno>
    )
}

export default CardPequeno;