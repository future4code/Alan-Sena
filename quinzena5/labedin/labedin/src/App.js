import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './img/eu.jpg';
import styled from 'styled-components';

const AppPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const SecaoContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const SecaoContainerH2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


function App() {
  return (
    <AppPage className="App">
      <SecaoContainer>
        <SecaoContainerH2> Dados pessoais </SecaoContainerH2>
          <CardGrande 
            imagem={eu} 
            nome="Alan Marcos Brazões Sena" 
            descricao="Oi, eu sou o Alan. Sou alunos da Labenu. Adoro solucionar problemas através de códigos de programação."
          />
          
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
        />

        <CardPequeno 
          texto="Email: bananinha@banu.com"
        />

        <CardPequeno 
          texto="Endereço: Rua Antônio Silva, nº180"
        />
      </SecaoContainer>

      <SecaoContainer>
        <SecaoContainerH2> Experiências profissionais </SecaoContainerH2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Já trabalhei como auxiliar administrativo em uma empresa de saneamento básico em BH, a Copasa." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Perfeccionista - as vezes o meu perfeccionismo mais atrapalha do que ajuda." 
        />
      </SecaoContainer>

      <SecaoContainer>
        <SecaoContainerH2> Minhas redes sociais </SecaoContainerH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
    </SecaoContainer>
    </AppPage>
  );
}

export default App;
