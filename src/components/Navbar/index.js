import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {GiWeightLiftingUp} from 'react-icons/gi'

import {MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu,NavBtnLink,NavBtn,Iconlogo} from './NavbarElements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';

export const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <GiWeightLiftingUp style={{color:'red', fontSize:'3rem', margin:'20px'}}/>
                        REPZ
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}  
                            >Registrarse</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='planes'
                             smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >Planes</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                             smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >Servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'
                             smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >Tour</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin">Ingresar</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}
