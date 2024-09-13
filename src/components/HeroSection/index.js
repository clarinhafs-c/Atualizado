import React, { useState } from 'react'
// pexels.com for free stock videos
import Video from '../../videos/dog.mp4'
import {
    HeroContainer,
    HeroBg,
    DogBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <DogBg autoPlay loop muted src={Video} type='dog/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Bem Vindo à SkateFlow </HeroH1>
                <HeroP> 
                       Seu ritmo, seu skate!
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass='active'
                        exact='true'
                        > 
                        Iniciar
                        {hover ? <ArrowForward/> : <ArrowRight/>} 
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection