import React from 'react'
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

export const Footer = () => {

  const toggleHome = ()=>{
    scroll.scrollToTop();
}
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Conocenos</FooterLinkTitle>
                <FooterLink to ="signin">How it Works</FooterLink>
                <FooterLink to ="signin">Testimonials</FooterLink>
                <FooterLink to ="signin">Careers</FooterLink>
                <FooterLink to ="signin">Investors</FooterLink>
                <FooterLink to ="signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contacto</FooterLinkTitle>
                <FooterLink to ="signin">How it Works</FooterLink>
                <FooterLink to ="signin">Testimonials</FooterLink>
                <FooterLink to ="signin">Careers</FooterLink>
                <FooterLink to ="signin">Investors</FooterLink>
                <FooterLink to ="signin">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to ="signin">How it Works</FooterLink>
                <FooterLink to ="signin">Testimonials</FooterLink>
                <FooterLink to ="signin">Careers</FooterLink>
                <FooterLink to ="signin">Investors</FooterLink>
                <FooterLink to ="signin">Terms of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Rutinas</FooterLinkTitle>
                <FooterLink to ="signin">How it Works</FooterLink>
                <FooterLink to ="signin">Testimonials</FooterLink>
                <FooterLink to ="signin">Careers</FooterLink>
                <FooterLink to ="signin">Investors</FooterLink>
                <FooterLink to ="signin">Terms of Services</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              REPZ
            </SocialLogo>
            <WebsiteRights>Itecel $ {new Date().getFullYear()} Derechos reservados. </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
