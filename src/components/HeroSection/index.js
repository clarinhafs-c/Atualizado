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
                       Somos uma comunidade, onde você, skatista, pode encontrar outros skatistas!
                       
                </HeroP>
                <HeroP>
                Tenha acesso a pistas compartilhadas por usuarios, veja e agende seus ingressos para eventos 
                que estamos divulgando e leia artigos escritos por nós!
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="about" 
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