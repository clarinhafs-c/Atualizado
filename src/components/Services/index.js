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

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1> Our Services </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Learn Guga </ServicesH2>
              <ServicesP> We guide users to achieve expertise in Guga training. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2> Virtual Offices </ServicesH2>
              <ServicesP> You can access our platform online anywhere in the world. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2> Premium Benefits </ServicesH2>
              <ServicesP> Unlock our special membership card that grants access to additional content. </ServicesP>
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
          > Explore More </Button>
        </BtnWrap>
    </ServicesContainer>
  )
}

export default Services
