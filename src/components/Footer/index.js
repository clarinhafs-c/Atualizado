    import React from 'react'
    import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
    import {
        FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinkItems,
        FooterLinksWrapper,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcons,
        WebsiteRights,
        SocialIconLink
    } from './FooterElements'
    import { animateScroll as scroll } from 'react-scroll'

    // To link outside of the website, use normal a tags

    const Footer = () => {

        // Function from react-scroll
        const toggleHome = () => {
            scroll.scrollToTop();
        }

        return (
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle> Sobre Nós </FooterLinkTitle>
                               
                                <FooterLink to="/"> Termos de serviço </FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle> Contato</FooterLinkTitle>
                                <FooterLink to="/"> 11 12345-67890 </FooterLink>
                                <FooterLink to="/"> Skateflow@gmail.com </FooterLink>
                                <FooterLink to="/"> Patrocinadores </FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            
                            <FooterLinkItems>
                                <FooterLinkTitle> Redes sociais </FooterLinkTitle>
                                <FooterLink to="/"> Instagram </FooterLink>
                                <FooterLink to="/"> Facebook </FooterLink>
                                <FooterLink to="/"> Youtube </FooterLink>
                                <FooterLink to="/"> Bluesky </FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                SkateFlow
                            </SocialLogo>
                            
                            <WebsiteRights> SkateFlow © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        )
    }

    export default Footer