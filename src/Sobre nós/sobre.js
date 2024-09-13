import React from 'react';
import { Link } from 'react-router-dom'; // Para navegação entre páginas
import {
  sobreContainer,
  BtnWrap
} from '../components/Services/elements.js';
import { Button } from '../components/ButtonElement';

// Caso tenha um componente estilizado chamado SobreH1, você deve importá-lo
// import SobreH1 from '../components/SobreH1'; 

const Sobre = () => {
  return (
    <sobreContainer id='sobre'>
      <sobreH1>Sobre Nós</sobreH1>
      <sobreWrapper>
        <sobreCard>
          <sobreIcon src="path/to/icon1.png" alt="Ícone 1" />
          <sobreH2>Título 1</sobreH2>
          <sobreP>Descrição do primeiro serviço ou informação.</sobreP>
        </sobreCard>
        <sobreCard>
          <sobreIcon src="path/to/icon2.png" alt="Ícone 2" />
          <sobreH2>Título 2</sobreH2>
          <sobreP>Descrição do segundo serviço ou informação.</sobreP>
        </sobreCard>
        <sobreCard>
          <sobreIcon src="path/to/icon3.png" alt="Ícone 3" />
          <sobreH2>Título 3</sobreH2>
          <sobreP>Descrição do terceiro serviço ou informação.</sobreP>
        </sobreCard>
      </sobreWrapper>
      <BtnWrap>
        <Link to="/home"> 
          <Button 
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={1} 
              dark={0}
          > 
              Mais Informações 
          </Button>
        </Link>
      </BtnWrap>
    </sobreContainer>
  );
}

export default Sobre;
