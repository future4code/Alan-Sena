import React from 'react';
import styled from 'styled-components';

const SecaoGrande = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgCardGrande = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const TituloH4 = styled.h4`
    margin-bottom: 15px;
`

const DivMenor = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <SecaoGrande>
            <ImgCardGrande src={ props.imagem } />
            <DivMenor>
                <TituloH4>{ props.nome }</TituloH4>
                <p>{ props.descricao }</p>
            </DivMenor>
        </SecaoGrande>
    )
}

export default CardGrande;