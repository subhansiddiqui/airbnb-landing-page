import React from "react";
// !  ======  IMPORTING Common Container  ======
import ContentContainer from "../../components/Common/ContentContainer";

//!   ======  IMPORTING Navbar Component w/styles  ======
import {
  FooterSection,
  FooterFlexContainerStyled,
  SiteOptionNTextContainerStyled,
  SiteOptionsWrapper,
  SiteOptionsContainerStyled,
  SiteOptionStyled,
  CopyRightTextStyled,
  OptionTextStyled,
  OptionDotStyled,
  IconLanguage,
  IconMoney,
  IconArrowUp,
  OptionText,
} from "./styled";
//!   ======  IMPORTING Static data  ======
import footerContent from "../../site-data/FooterContent";

const Footer = () => {
  const data = footerContent;
  return (
    <FooterSection>
      <ContentContainer>
        <FooterFlexContainerStyled>
          <SiteOptionNTextContainerStyled>
            <CopyRightTextStyled variant="p">
              {data.copyrightText}
            </CopyRightTextStyled>
            <SiteOptionsWrapper>
              <SiteOptionsContainerStyled>
                {data.siteOptions1.map((item, index) => {
                  return (
                    <SiteOptionStyled key={index}>
                      <OptionDotStyled variant="p">{data.dot}</OptionDotStyled>
                      <OptionTextStyled href="#">{item}</OptionTextStyled>
                    </SiteOptionStyled>
                  );
                })}
              </SiteOptionsContainerStyled>
            </SiteOptionsWrapper>
          </SiteOptionNTextContainerStyled>
          {/* 
      option 2
      */}

          <SiteOptionNTextContainerStyled>
            <SiteOptionsWrapper>
              <SiteOptionsContainerStyled>
                <SiteOptionStyled>
                  <IconLanguage></IconLanguage>
                  <OptionText href="#">{data.siteOptions2[0]}</OptionText>
                </SiteOptionStyled>

                <SiteOptionStyled>
                  <IconMoney></IconMoney>
                  <OptionText href="#">{data.siteOptions2[1]}</OptionText>
                </SiteOptionStyled>
                <SiteOptionStyled>
                  <OptionText href="#">{data.siteOptions2[2]}</OptionText>
                  <IconArrowUp></IconArrowUp>
                </SiteOptionStyled>
              </SiteOptionsContainerStyled>
            </SiteOptionsWrapper>
          </SiteOptionNTextContainerStyled>
        </FooterFlexContainerStyled>
      </ContentContainer>
    </FooterSection>
  );
};

export default Footer;
