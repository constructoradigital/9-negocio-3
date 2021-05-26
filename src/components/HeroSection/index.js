import React, {useState} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../ButtonElements'
import Video from '../../videos/video.mp4'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'

export const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Cada Repetición Cuenta</HeroH1>
                <HeroP>
                    Registrate en linea para obtener cinco dias de prueba y un 25% de descuento en tu inscripción.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} 
                        primary="true"
                        dark="true"
                    >
                        INGRESAR {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}
