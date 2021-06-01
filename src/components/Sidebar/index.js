import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <CloseIcon>
                <Icon onClick={toggle} />
            </CloseIcon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Registrarse
                    </SidebarLink>
                    <SidebarLink to="planes" onClick={toggle}>
                        Planes
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Servicios
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Tour
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={toggle}>INGRESAR</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}