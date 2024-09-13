import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Heading, Text } from './SucessPageElements';
import videoSource from './dog2.mp4'; // Atualize o caminho conforme necessário

const SucessPage = () => {
  return (
    <Container>
      <video autoPlay muted loop id="backgroundVideo">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Content>
        <Link to="/">
          <h1>SkateFlow</h1>
        </Link>
        <Heading>Cadastro Feito com Sucesso!!!</Heading>
        <Text>Obrigado por se cadastrar! Clique no ícone "SkateFlow" para voltar à página inicial.</Text>
      </Content>
    </Container>
  );
};

export default SucessPage;
