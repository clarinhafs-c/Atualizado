import React from 'react'
import Icon1 from '../../images/logo2.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  BtnWrap
} from './ServicesElements'
import { Button } from '../ButtonElement'

//card muda de tamanho dependendo da quantia de caracteres
//acho uma boa mudarmos os ids, não mexi para todos fazermos isso juntos para ficarmos atualizados.
const Services = () => {
  return (
    <ServicesContainer id='services'> 
        <ServicesH1> Artigos </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Skateflow news </ServicesH2>
              <ServicesP> Noticias do mundo do skate. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Virtual Offices </ServicesH2>
              <ServicesP> asdsdf </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Premium Benefits </ServicesH2>
              <ServicesP> lorem ipsum fecais</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
        <BtnWrap>
          <Button 
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              primary={1} 
              dark={0}
          > Mais Informações </Button>
        </BtnWrap>
    </ServicesContainer>
  )
}

export default Services
